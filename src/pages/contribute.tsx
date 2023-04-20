import React from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
// src/images/ContributeBG.png
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import YoutubeSection from '../components/YoutubeSection/YoutubeSection';
interface ContributingListDataInterface {
  text: string;
  cta: string;
  link: string;
}
const ContributePage = () => {
  const contributingListData: ContributingListDataInterface[] = [
    {
      text: `Use Cases: If you've built an application or solution using Cassandra, we would love to hear about it! Sharing your use case can help inspire others and showcase the versatility and power of the technology.`, 
      cta: `Add Use Case`,
      link: `https://airtable.com/shrYlu3mjtCiBTlOG`,
    },
    {
      text: `Resources: Have you written an article, created a video, or developed other educational materials related to Apache Cassandra®? We welcome contributions of resources that can help others learn more about this powerful database technology.`,
      cta: `Add an Article or Video`,
      link: `https://airtable.com/shr3vL0c2LrB4cwZ6`,
    },
    {
      text: `Blog Posts: Our blog is a great platform for sharing your insights, tips, and experiences with the broader Apache Cassandra® community. Whether you're a seasoned veteran or a newcomer with fresh ideas, we want to hear from you!`,
      cta: `Submit a Blog Post`,
      link: `https://airtable.com/shrEifAn99ub2Ny6g`,
    },
    {
      text: `Join Planet Cassandra Team: Of course, one of the most valuable contributions you can make is to the Planet Cassandra team itself. We'd love to get your help to manage the content editing, publishing process.`,
      cta: `Join our Discord Channel`,
      link: `https://discord.gg/skV5Cenw`,
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
                  Planet
                </span>
                <span style={{ color: '#5AB1BB', fontWeight: 700 }}>
                  Cassandra!
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
                  We are proud to be a community of Apache Cassandra&reg; users who recognize the value of open-source technology. We believe that the power of the Planet Cassandra community 
                  lies in the contributions of its members. That's why we're 
                  always looking for new ways to engage with our community and
                  provide opportunities for people to get involved.
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
                contribute to PlanetCassandra, an Apache Cassandra® Community!
              </span>
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ width: '70%', mx: 'auto' }}>
            {contributingListData.map((item) => {
              return (
                <Grid item xs={12} md={6}>
                   <Typography
                    variant="h3"
                    fontFamily="Poppins, sans-serif"
                    fontSize={30}
                    fontWeight={400}
                    >
                    {item.cta}
                  </Typography>  
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
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={item.link}
                  >
                    <Button
                      sx={{
                        fontSize: { xs: 11, sm: 15, md: 12, lg: 14 },
                        borderRadius: 50,
                        margin: 2,
                        backgroundColor: "#344D67",
                      }}
                      variant="contained"
                      className="Font_Mulish_Button_L"
                    >
                      {item.cta}
                    </Button>
                  </Link>
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
