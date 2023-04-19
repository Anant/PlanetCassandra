import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
// src/images/ContributeBG.png
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import YoutubeSection from '../components/YoutubeSection/YoutubeSection';
interface ContributingListDataInterface {
  text: string;
}
const ContributePage = () => {
  const contributingListData: ContributingListDataInterface[] = [
    {
      text: `Use Cases: If you've built an application or solution using Cassandra, we would love to hear about it! Sharing your use case can help inspire others and showcase the versatility and power of the technology. <a href="https://airtable.com/shrYlu3mjtCiBTlOG" target="_blank">Add Use Case</a>
      `,
    },
    {
      text: `Resources: Have you written an article, created a video, or developed other educational materials related to Cassandra? We welcome contributions of resources that can help others learn more about this powerful database technology. <a href="https://airtable.com/shr3vL0c2LrB4cwZ6" target="_blank">Add an Article or Video</a>
      `,
    },
    {
      text: `Blog Posts: Our blog is a great platform for sharing your insights, tips, and experiences with the Cassandra community. Whether you're a seasoned veteran or a newcomer with fresh ideas, we want to hear from you! <a href="https://airtable.com/shrEifAn99ub2Ny6g" target="_blank">Submit a Blog Post</a>
      `,
    },
    {
      text: `Join PlanetCassandra Team: Of course, one of the most valuable contributions you can make is to the PlanetCassandra team itself. We'd love to get your help to manage the content editing, publishing process. If interested, join the <a href="https://discord.gg/skV5Cenw" target="_blank"> Discord Channel</a>
      `,
    },
  ];
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} className="contributeBGImage">
          <Grid
            container
            maxWidth="xl"
            sx={{
              mx: 'auto',
              paddingY: { xs: '50px', sm: '100px', lg: '250px' },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginBottom: { xs: '50px', md: 0 },
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h1"
                fontFamily="Poppins, sans-serif"
                sx={{
                  color: '#1E1E1E',
                  fontSize: { xs: 30, sm: 45, xl: 60 },
                  fontWeight: 400,
                }}
              >
                Contribute to{' '}
                <span
                  style={{
                    marginRight: '10px',
                    color: '#344D67',
                    fontWeight: 700,
                  }}
                >
                  Our
                </span>
                <span style={{ color: '#5AB1BB', fontWeight: 700 }}>
                  Project!
                </span>
              </Typography>
              <Box
                sx={{
                  width: '70%',
                  textAlign: 'center',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                <Typography
                  variant="body2"
                  fontFamily="Lato, sans-serif"
                  fontWeight={300}
                  color="#1E1E1E"
                  sx={{ marginTop: 4, fontSize: { sm: '22px', lg: '20px' } }}
                >
                  Our project is open-source and always looking for new
                  contributors. If you want to help us build a better product,
                  you're in the right place! Please contribute and help us
                  improve our project. We accept contributions in many forms
                  including code, documentation, and bug reports. You can also
                  donate to our project to show your support.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <StaticImage
                src="../images/ContributeIMG.png"
                className="thumbnail"
                alt="Placeholder"
                style={{
                  width: '100%',
                  height: '100%',
                }}
                objectFit="contain"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ backgroundColor: '#5AB1BB', paddingY: '38px' }}
        >
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="h2"
              fontFamily="Montserrat, sans-serif"
              sx={{
                color: '#F9F8F8',
                fontSize: '25px',
                display: 'flex',
                fontWeight: 700,
                justifyContent: 'center',
              }}
            >
              Ways to{' '}
              <span style={{ marginLeft: '10px', color: '#344D67' }}>
                {' '}
                contribute!
              </span>
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ width: '70%', mx: 'auto' }}>
            {contributingListData.map((item) => {
              return (
                <Grid item xs={12} md={6}>
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
