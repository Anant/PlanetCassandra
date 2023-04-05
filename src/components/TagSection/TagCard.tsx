import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

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
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
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
  const excerptWithoutLinks = removeLinks(post.excerpt);
  return (
    <Card
      sx={{
        maxWidth: 500,
        borderRadius: 5,
        padding: 3,
        margin: { xs: "auto", lg: 0 },
      }}
    >
      <Typography
        sx={{
          color: "#5AB1BB",
          fontSize: 20,
        }}
        gutterBottom
        variant="h6"
        component="div"
        className="Font_Montserrat_Bold"
      >
        Featured article
      </Typography>
      <GatsbyImage
        image={
          post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
        }
        alt={post.title}
      />
      <CardContent sx={{ paddingInline: 0 }}>
        <Typography
          sx={{ color: "#5ab1bb" }}
          gutterBottom
          variant="h6"
          component="div"
          className="Font_Montserrat_Bold"
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="Font_Montserrat_600"
          sx={{
            color: "#000000CC",
            fontSize: 14,
          }}
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
            to={`/leaf/${post.slug}`}
          >
            <Typography className="Font_Mulish_Button_M">
              Continue reading
            </Typography>
          </Link>
        </Button>{" "}
        <Button
          sx={{
            borderRadius: 50,
            backgroundColor: "#163BBF",
            fontSize: 10,
            "&:hover": {
              backgroundColor: "#163BBF",
            },
          }}
          variant="contained"
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/posts`}
          >
            <Typography className="Font_Mulish_Button_M">
              See all articles
            </Typography>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default TagCard;
