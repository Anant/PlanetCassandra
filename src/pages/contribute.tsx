import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import YoutubeSection from '../components/YoutubeSection/YoutubeSection';
interface ContributingListDataInterface {
  text: string;
}
const ContributePage = () => {
  const contributingListData: ContributingListDataInterface[] = [
    {
      text: `Reporting bugs and creating issue reports: If you encounter a bug or an issue in the project, you can report it to the project's maintainers, providing as much detail as possible to help them reproduce and fix the problem.`,
    },
    {
      text: `Contributing code fixes and improvements: This involves writing code that fixes issues or adds new features to the project.
      `,
    },
    {
      text: `Improving the documentation: You can help improve the project's documentation, by writing or editing content that helps users understand how to use the project or how it works.
      `,
    },
    {
      text: `Spreading the word about our project: Sharing the project on social media, participating in relevant online communities, and recommending the project to others who might be interested in contributing.
      `,
    },
  ];
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={10} md={5}>
          <Typography
            variant="h1"
            className="Font_Montserrat_Bold"
            sx={{ color: '#5ab1bb', fontSize: 30 }}
          >
            Contribute to Our Project
          </Typography>
          <Typography
            variant="body2"
            className="Font_Montserrat_550"
            color="text.secondary"
            sx={{ marginTop: 5 }}
          >
            Our project is open-source and always looking for new contributors.
            If you want to help us build a better product, you're in the right
            place! Please contribute and help us improve our project. We accept
            contributions in many forms including code, documentation, and bug
            reports. You can also donate to our project to show your support.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={3}
          sx={{ backgroundColor: '#5AB1BB', padding: '38px' }}
        >
          <Typography
            variant="h2"
            fontFamily="Montserrat, sans-serif"
            sx={{
              color: '#F9F8F8',
              fontSize: '25px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Ways to{' '}
            <span style={{ marginLeft: '10px', color: '#344D67' }}>
              {' '}
              contribute
            </span>
          </Typography>
          <Grid container spacing={3} sx={{ width: '70%', mx: 'auto' }}>
            {contributingListData.map((item) => {
              return (
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    fontFamily="Lato, sans-serif"
                    fontWeight={300}
                    color="text.secondary"
                    fontSize={20}
                    sx={{ marginTop: 3 }}
                  >
                    {item.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <YoutubeSection />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContributePage;
