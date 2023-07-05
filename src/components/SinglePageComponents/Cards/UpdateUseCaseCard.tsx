import { Typography, Box, Button, Modal, useTheme } from "@mui/material";
import { RiArrowRightCircleLine } from "@react-icons/all-files/ri/RiArrowRightCircleLine";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
const UpdateUseCaseCard: React.FC = () => {
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
          border: "2px solid #5AB1BB",
          boxShadow: "0px 0px 3.85574px #CDCDCD",
          borderRadius: "25.1908px",
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
            color: "#0A2273",
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
              src="../../../images/PuzzlePiece.png"
              alt="HandbookLogo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          Have something to add?
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            color: "#303030",
            fontSize: { xs: 13, sm: 10, lg: 20 },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          Add your own contribution to this case and become a part of the
          Cassandra community.
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            color: "#4E4D4D",
            fontSize: { xs: 13, md: 10, lg: 20 },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          You are welcomed to contribute with any suggestions, corrections and
          improvements on the use cases. We are in this together, and we build
          together!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            marginY: 2,
          }}
        >
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
              Update Use Case
            </Typography>
          </Button>
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
              List of contributors
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UpdateUseCaseCard;
