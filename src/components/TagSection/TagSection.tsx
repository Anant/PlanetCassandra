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

interface Data {
  id: string;
  title: string;
  tag: string;
}

interface AllWpTagData {
  data: Data[];
  allWpTag: {
    nodes: {
      name: string;
      id: string;
      posts: {
        nodes: {
          title: string;
        }[];
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
    <Container>
      <Grid sx={{ marginY: 3 }} rowSpacing={3} columnSpacing={1} container>
        {tags.map((tag) => (
          <Grid key={tag.id} item md={2} xs={4}>
            <Button
              sx={{
                backgroundColor: "#344D67",
                color: "white",
                borderRadius: 50,
                padding: 1,
                minWidth: 150,
                textAlign: "center",
                ":hover": {
                  backgroundColor: "#5ab1bb",
                  color: "white",
                },
              }}
              variant="contained"
              onClick={() => handleClick(tag)}
              className={selectedTag === tag.name ? `selected` : ""}
            >
              {tag.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid>
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
          }
        }
      }
    }
  }
`;

export default TagSection;
