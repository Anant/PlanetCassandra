import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface Props {
  post: {
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
          relativePath: string;
          absolutePath: string;
          childImageSharp: {
            fluid: {
              src: string;
            };
          };
        };
      };
    };
    excerpt: string;
  };
}

const removeLinks = (html: string) => {
  return html.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");
};

const TagCard: React.FC<Props> = ({ post }) => {
  //console.log(post.featuredImage.node.localFile.childImageSharp.fluid.src)
  const excerptWithoutLinks = removeLinks(post.excerpt);
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 5,
        padding: 3,
        margin: { xs: "auto", lg: 0 },
      }}
    >
      <Typography
        sx={{
          color: "#5AB1BB",
        }}
        gutterBottom
        variant="h6"
        component="div"
      >
        Featured article :
      </Typography>
      {/* 
      We need to learn how to use this
      <StaticImage
        style={{ borderRadius: 5 }}
        src={post.featuredImage.node.localFile.childImageSharp.fluid.src}
        alt="A dinosaur"
        placeholder="blurred"
      /> */}
      <img
        src={post.featuredImage.node.localFile.childImageSharp.fluid.src}
        alt={post.title}
      />
      <CardContent sx={{ paddingInline: 0 }}>
        <Typography
          sx={{ height: 100, color: "#5ab1bb" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: excerptWithoutLinks }}
        />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 0,
        }}
      >
        <Button
          sx={{
            borderRadius: 50,
            backgroundColor: "#5AB1BB",
            fontSize: 10,
            "&:hover": {
              backgroundColor: "#5AB1BB",
            },
          }}
          variant="contained"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/post/${post.slug}`}
          >
            Continue reading
          </Link>
        </Button>{" "}
        <Button
          sx={{
            borderRadius: 50,
            backgroundColor: "#F2545B",
            fontSize: 10,
            "&:hover": {
              backgroundColor: "#F2545B",
            },
          }}
          variant="contained"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/posts`}
          >
            See all articles
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default TagCard;
