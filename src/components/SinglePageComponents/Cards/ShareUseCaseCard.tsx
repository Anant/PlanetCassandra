import { Typography, Box, Button, Modal, useTheme } from "@mui/material";
import { RiArrowRightCircleLine } from "@react-icons/all-files/ri/RiArrowRightCircleLine";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import ShareIcon from "../../../images/ShareNetwork.png";
const ShareUseCases: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "70%", md: "50%" },
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };
  const theme = useTheme();
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <iframe
            src={process.env.USE_CASES_AIRTABLE_FORM}
            width="100%"
            height="100%"
          ></iframe>
        </Box>
      </Modal>
      <Box
        sx={{
          background:
            "linear-gradient(67.68deg, #5AB1BB -23.68%, #344D67 92.21%)",
          borderRadius: "8px",
          padding: { xs: 2, sm: 3, lg: 4 },
          paddingY: { lg: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            marginTop: 1,
            color: theme.palette.primary.white,
            fontSize: { xs: 16, sm: 20, lg: 30 },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            textAlign: "start",
          }}
        >
          <Box
            sx={{
              width: { xs: "20px", sm: "30px", md: "40px" },
              height: { xs: "20px", sm: "30px", md: "40px" },
              display: "inline-block",
              marginRight: "10px",
            }}
          >
            {" "}
            <StaticImage
              src="../../../images/ShareNetwork.png"
              alt="HandbookLogo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          Want to share your use case?
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            color: "black",
            fontSize: { xs: 13, sm: 10, lg: 20 },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          Planet Cassandra is the home page for the Cassandra Community, where
          everyone in the community can share their use cases.
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            color: theme.palette.primary.white,
            fontSize: { xs: 13, md: 10, lg: 20 },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            textAlign: "left",
          }}
        >
          Show off what you've done & help others learn following your example &
          contribution.
        </Typography>
        <Button
          sx={{
            marginY: 2,
            width: "100%",
            marginTop: 2,
            paddingX: 1.75,
            paddingY: 1,
            borderRadius: "10px",
            backgroundColor: theme.palette.primary.turqoise,
            "&:hover": {
              backgroundColor: theme.palette.primary.turqoise,
            },
          }}
          onClick={handleOpen}
          variant="contained"
        >
          <Typography
            sx={{
              m: 0,
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              fontSize: { xs: 13, sm: 10, md: 18 },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
            }}
          >
            Add your own Use Case
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ShareUseCases;
