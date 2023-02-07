import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import Layout from '../components/Layout/Layout'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
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
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h4" align="center">
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box my={2}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Box>
            <Box my={2}>
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
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              )}
            </Box>
            {submitSuccess && (
              <Typography color="secondary" align="center">
                Your message was successfully sent!
              </Typography>
            )}
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactUs;