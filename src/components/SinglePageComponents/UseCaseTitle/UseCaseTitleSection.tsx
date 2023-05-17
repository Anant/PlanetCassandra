import React from "react";
import { Grid, Typography, useTheme, Box } from "@mui/material";
import ThumbnailImage from "../Cards/Thumbnail/Thumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface UseCaseTitleSectionProps {
  title: string;
  thumbnail: IGatsbyImageData | null;
  Case_Function?: {
    data: {
      Function_Name: string;
    }[];
  };
  Case_Industry?: {
    data: {
      Industry_Name: string;
    }[];
  };
  Company_Name?: string;
}

const UseCaseTitleSection: React.FC<UseCaseTitleSectionProps> = ({
  title,
  thumbnail,
  Case_Function,
  Case_Industry,
  Company_Name,
}) => {
  const theme = useTheme();

  // Destructure and map through the arrays to get the names
  //@ts-ignore
  const caseFunctionNames =
    //@ts-ignore
    Case_Function?.map(
      (item: { data: { Function_Name: string } }) => item.data.Function_Name
    ) || [];
  //@ts-ignore
  const caseIndustryNames =
    //@ts-ignore
    Case_Industry?.map(
      (item: { data: { Industry_Name: string } }) => item.data.Industry_Name
    ) || [];

  return (
    <Grid
      sx={{ borderBottom: "1px solid black", marginBottom: 5, paddingY: 2 }}
      container
      spacing={2}
    >
      <Grid sx={{ display: "flex" }} item xs={12} sm={6}>
        <ThumbnailImage thumbnail={thumbnail} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          marginY: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                padding: 1,
                borderRadius: 3,
                background:
                  "linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #F3F3F3, #F3F3F3)",
                border: "1px solid #EEEEEE",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                  fontWeight: "bold",
                  padding: 1.5,
                }}
              >
                Company:
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                }}
              >
                {" "}
                {Company_Name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                padding: 1,
                borderRadius: 3,
                background:
                  "linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #F3F3F3, #F3F3F3)",
                border: "1px solid #EEEEEE",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                  fontWeight: "bold",
                  padding: 1.5,
                }}
              >
                Industry:
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                }}
              >
                {" "}
                {caseIndustryNames}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 3,
                background:
                  "linear-gradient(0deg, #EEEEEE, #EEEEEE), linear-gradient(0deg, #F3F3F3, #F3F3F3)",
                border: "1px solid #EEEEEE",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                  fontWeight: "bold",
                }}
              >
                Functional Use Case:
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "23px",
                  lineHeight: "31px",
                  letterSpacing: "2%",
                  color: "#383D3B",
                }}
              >
                {" "}
                {caseFunctionNames.join(", ")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UseCaseTitleSection;
