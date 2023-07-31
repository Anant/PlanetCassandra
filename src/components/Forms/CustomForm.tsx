import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";
const CustomForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {

    axios
      .post(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Contact_Submissions`,
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Description: data.description,
            // More fields...
          },
        },
        {
          headers: {
            Authorization: `Bearer pat3wPGK5OIX4uTFg.27448e72258ae8c4e9e6e765451a74054f4589174c3f8ac08c5576898968ea35`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response: any) => {
        setOpen(true);
        reset();
      })
      .catch((error: any) => {});
  };

  return (
    <>
      {open ? (
        <Box sx={{ width: "100%", textAlign: "center", marginY: 3 }}>
          <StaticImage
            src="../../images/SubmissionConfirmation.png"
            className="thumbnail"
            alt="Placeholder"
          />
          <Button
            sx={{
              backgroundColor: "#344D67",
              display: "block",
              margin: "auto",
            }}
            onClick={() => setOpen(false)}
            variant="contained"
            type="submit"
          >
            Go back
          </Button>
        </Box>
      ) : (
        <>
    
          <form
            style={{ marginBottom: "20px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z]+$/,
              })}
              label="Name *"
              variant="outlined"
              error={errors.name ? true : false}
              helperText={errors.name ? "Name is required" : ""}
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              label="Email *"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email ? "Valid email is required" : ""}
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("description", { required: false })}
              label="Message"
              variant="outlined"
              error={errors.description ? true : false}
              helperText={errors.description ? "Description is required" : ""}
              fullWidth
              margin="normal"
            />
            <Button
              sx={{ backgroundColor: "#344D67" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default CustomForm;
