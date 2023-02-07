import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import TagPosts from "./TagPosts";
import "./tagStyles.css";
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Data {
  id: string;
  title: string;
  slug: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData:IGatsbyImageData
        }
      };
    };
  };
  excerpt: string;
}

interface AllWpTagData {
  allWpTag: {
    nodes: {
      name: string;
      id: string;
      count: number;
      posts: {
        nodes: Data[];
      };
    }[];
  };
}

const TagSection = () => {
  const { allWpTag }: AllWpTagData = useStaticQuery(query);
  const tags = allWpTag.nodes;

  const [selectedTag, setSelectedTag] = useState<string | null>(tags[0].name);
  const selectedTagData = allWpTag.nodes.filter(
    (node) => node.name === selectedTag
  );
  const posts =
    selectedTagData.length > 0 ? selectedTagData[0].posts.nodes : [];

  const handleClick = (tag: { name: string; id: string }) => {
    setSelectedTag(tag.name);
  };

  return (
    <Container sx={{ paddingY: 3 }}>
      <Grid sx={{ marginY: 3 }} rowSpacing={3} columnSpacing={1} container>
        {tags.map((tag) => (
          <Grid
            sx={{ textAlign: "center" }}
            key={tag.id}
            padding={0}
            item
            md={2}
            xs={4}
          >
            <Button
              sx={{
                backgroundColor: "#344D67",
                color: "white",
                borderRadius: 50,
                padding: 1,
                minWidth: 150,
                textAlign: "center",
                fontSize: 12,
                ":hover": {
                  backgroundColor: "#5ab1bb",
                  color: "white",
                },
              }}
              variant="contained"
              onClick={() => handleClick(tag)}
              className={selectedTag === tag.name ? `selected ` : ""}
            >
              {tag.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        {selectedTag ? <TagPosts tag={selectedTag} posts={posts} /> : null}
      </Grid>
    </Container>
  );
};

export const query = graphql`
  query GET_TAGS {
    allWpTag(sort: { count: DESC }, filter: { count: { ne: null } }, limit: 5) {
      nodes {
        name
        id
        count
        posts {
          nodes {
            title
            slug
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;

export default TagSection;
