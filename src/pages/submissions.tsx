import React from "react";
import Layout from "../components/Layout/Layout";
import { Container } from "@mui/material";
import CustomForm from "../components/Forms/CustomForm";
const Submissions = () => (
  <Layout>
    <Container maxWidth="xl">
      <CustomForm />
    </Container>
  </Layout>
);
export default Submissions;
