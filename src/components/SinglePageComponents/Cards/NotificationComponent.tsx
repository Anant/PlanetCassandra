import { Grid, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { GiLightBulb } from "react-icons/gi";
import { Link } from "gatsby";

interface NotificationProps {
  notificationTitle: string;
  articleUrl: string;
}

const NotificationComponent: React.FC<{ args: NotificationProps }> = ({
  args: { notificationTitle, articleUrl },
}) => {
  const theme = useTheme();

  // Check if the articleUrl starts with "https://planetcassandra"
  if (articleUrl.startsWith("https://planetcassandra.org") || articleUrl.startsWith("https://www.youtube.com")) {
    return null; // Hide the whole component
  }

  return (
    <Grid container sx={{ marginBottom: "40px", marginTop: "10px" }}>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#F3F3F3",
            paddingX: 2,
            paddingY: 1.5,
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              fontSize: { sm: "18px", md: "28px" },
              marginRight: 1.5,
            }}
          >
            <GiLightBulb
              style={{
                color: theme.palette.primary.turqoise,
                display: "block",
              }}
            />
          </Box>
          <Typography
            fontFamily="Roboto condensed, sans-serif"
            className="textTruncate-2"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.turqoise,
              lineHeight: { xs: "15px", md: "24px" },
              fontSize: { xs: "13px", sm: "11px", md: "20px" },
            }}
          >
            This {notificationTitle} is based on an article originally published{" "}
            <Link
              to={articleUrl}
              style={{
                color: theme.palette.primary.turqoise,
                textDecoration: "underline",
              }}
            >
              here
            </Link>
            .
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotificationComponent;
