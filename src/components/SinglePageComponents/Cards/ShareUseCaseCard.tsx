import { Typography, Box, Button, Modal, useTheme } from "@mui/material";
import { RiArrowRightCircleLine } from "@react-icons/all-files/ri/RiArrowRightCircleLine";
import React, { useState } from "react";

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
            height="533"
          ></iframe>
        </Box>
      </Modal>
      <Box
        sx={{
          background:
            "linear-gradient(67.68deg, #5AB1BB -23.68%, #344D67 92.21%)",
          borderRadius: "8px",
          padding: { xs: 2, sm: 3, lg: 4 },
          paddingY: { lg: 10 },
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
            fontSize: { xs: 13, md: 20, lg: 30 },
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Do you have an Apache® Cassandra Use Case ?
        </Typography>
        <Button
          sx={{
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
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              fontSize: { xs: 13, sm: 10, md: 18 },
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
            }}
          >
            Share Use Case{" "}
            <RiArrowRightCircleLine style={{ marginLeft: "8px" }} size={20} />
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ShareUseCases;
