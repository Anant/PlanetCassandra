import React from "react";
import { Box, Button } from "@mui/material";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import DropdownAccordion from "./DropdownAccordion";
import ShareUseCases from "../SinglePageComponents/Cards/ShareUseCaseCard";
type Props = {};
const pages = [
  { name: "Home", route: "/" },

  { name: "News", route: "/news" },
  { name: "Use Cases", route: "/usecases" },
  { name: "Posts", route: "/posts" },
  { name: "Resources", route: "/leaves" },
  { name: "Videos", route: "/videos" },
];
function MobileNav({}: Props) {
  return (
    <Box className="mobileNav">
      <Box
        height={"60%"}
        sx={{ overflow: "auto", backgroundColor: "white" }}
        paddingY={2}
      >
        <DropdownAccordion />
        <Box marginTop={2}>
          {pages.map(({ name, route }, key) => (
            <Button
              sx={{
                textAlign: "left",
                fontSize: 22,
                display: "block",
                marginLeft: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              key={key}
            >
              <Link
                style={{
                  color: "#5AB1BB",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                }}
                to={route}
              >
                {name}
              </Link>
            </Button>
          ))}
          <Box marginTop={2}>
            <Button
              sx={{
                textAlign: "left",
                fontSize: 22,
                display: "block",
                marginLeft: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Link
                style={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                }}
                to={"/contact"}
              >
                Contribute{" "}
              </Link>
            </Button>
          </Box>
          <Button
              sx={{
                textAlign: "left",
                fontSize: 22,
                display: "block",
                marginLeft: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Link
                style={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                }}
                to={"https://cassandra.apache.org/_/index.html"}
              >
                Apache Cassandra{" "}
              </Link>
            </Button>
        </Box>
      </Box>
      <Box sx={{ position: "absolute", left: "45%", marginTop: "-15px" }}>
        <StaticImage
          height={30}
          src="../../images/icon.png"
          alt="Illustration Image"
        />
      </Box>
      <ShareUseCases />
    </Box>
  );
}

export default MobileNav;
