import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  post: {
    title: string;
  };
}
const TagCard: React.FC<Props> = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5, padding: 3 }}>
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
      <StaticImage
        style={{ borderRadius: 5 }}
        src="../../images/PostTag.jpg"
        alt="A dinosaur"
        placeholder="blurred"
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
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          cum ducimus expedita recusandae esse nihil, aliquid quo quia atque
          quibusdam amet inventore pariatur, consectetur earum dolore a
          exercitationem laborum tempora.
        </Typography>
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
          Continue reading
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
          See all articles
        </Button>
      </CardActions>
    </Card>
  );
};

export default TagCard;
