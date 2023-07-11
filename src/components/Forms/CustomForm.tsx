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
    // axios
    //   .get(
    //     `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Cases?maxRecords=1&filterByFormula={Case_Name}="Intuit"`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${process.env.AIRTABLE_KEY_1} `,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response: { data: { records: string | any[] } }) => {
    //     if (response.data.records.length > 0) {
    //     }
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

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
            Authorization: `Bearer patWTGg50ngV7oEFf.4e271d4bd3c7dee02fa4136da5b36435348101141c9197f2436ffd19b755f993`,
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
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              fontFamily: "Roboto Condensed, sans-serif",
              textAlign: "center",
              marginY: 3,
            }}
          >
            Submission form
          </Typography>
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
              label="Description"
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
