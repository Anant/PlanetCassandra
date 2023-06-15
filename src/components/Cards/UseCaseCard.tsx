import * as React from "react";

import {
  Box,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import getSlug from "speakingurl";

interface Props {
  name: string;
  description: string;
  gatsbyImageData: IGatsbyImageData | null;
  ID_Case: number;
}

const UseCaseCard = ({
  name,
  description,
  ID_Case,
  gatsbyImageData,
}: Props) => {
  let caseUrl = `/usecases/${getSlug(name)}/${ID_Case}`;
  // if (url && url.includes("https://planetcassandra.org")) {
  //   let newUrl = url.replace("https://planetcassandra.org/post/", "");
  //   caseUrl = `/post/${newUrl}`;
  // } else {
  //   caseUrl = `/usecases/${getSlug(name)}`;
  // }

  return (
    <Card
      sx={{
        padding: 2,
        height: "400px",
        borderRadius: 5,
        margin: { xs: "auto", md: 0 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="tuka"
    >
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {gatsbyImageData ? (
          <Box
            sx={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <GatsbyImage
              className="w-full h-100 object-contain thumbnail"
              image={gatsbyImageData}
              alt={name}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <StaticImage
              src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png"
              className="thumbnail"
              alt="Placeholder"
            />
          </Box>
        )}

        <Typography
          sx={{ color: "#5ab1bb", fontSize: 20, mt: 2 }}
          gutterBottom
          variant="h6"
          className="Font_Montserrat_Bold truncate"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          className="Font_Montserrat_550 textTruncate-3"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "end",
          paddingInline: 0,
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={caseUrl}>
          <Button
            sx={{
              borderRadius: 50,
              backgroundColor: "#5AB1BB",
              fontSize: 10,
              "&:hover": {
                backgroundColor: "#344D67",
              },
              textTransform: "none",
            }}
            variant="contained"
          >
            <Typography className="Font_Mulish_Button_M">
              Continue Reading
            </Typography>
          </Button>
        </Link>
        {/*<Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CiFacebook
              style={{ cursor: "pointer" }}
              color="#32A5EE"
              size="24px"
            />
            <CiLinkedin
              style={{ cursor: "pointer" }}
              color="#32A5EE"
              size="24px"
            />
            <CiTwitter
              style={{ cursor: "pointer" }}
              color="#32A5EE"
              size="24px"
            />
          </Box>*/}
      </CardActions>
    </Card>
  );
};

export default UseCaseCard;
