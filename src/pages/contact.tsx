import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import contactUsImg from "../images/contactUs.jpg";

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement your own form submission logic here, e.g. using Axios
    // For demonstration purposes, we'll just simulate a successful submit after 2 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  return (
    <Layout>
      <Container
        maxWidth="xl"
        sx={{ padding: 6  }} 
      >
        <Box my={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box mt={3}>
                  <img
                    src={contactUsImg}
                    alt="Contact Us Image"
                    style={{ width: "100%", borderRadius: "50px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h3">Contact Us</Typography>
                <Typography variant="subtitle2" color={"black"}>
                  Contact us to get assistance with any questions or issues you
                  may have. We are here to listen and help in any way we can!
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Box my={2} mr={2} flex={1}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      required
                    />
                  </Box>
                  <Box my={2} ml={2} flex={1}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      required
                    />
                  </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Box my={2} mr={2} flex={1}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Box>
                  <Box my={2} ml={2} flex={1}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={!isPhoneValid(formData.phone)}
                      helperText={
                        isPhoneValid(formData.phone)
                          ? ""
                          : "Invalid phone number"
                      }
                    />
                  </Box>
                </Box>
                <Box my={2}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Box>
                <Box my={2} display="flex" justifyContent="center">
                  {isSubmitting ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#5AB1BB" }}
                      size="large"
                    >
                      Submit
                    </Button>
                  )}
                </Box>
                {submitSuccess && (
                  <Typography color="secondary" align="center">
                    Your message was successfully sent!
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Layout>
  );
  function isPhoneValid(phone: string) {
    if (phone === "") {
      return true; // return true for empty string
    }
    return /^\d+$/.test(phone);
  }
};

export default ContactUs;
