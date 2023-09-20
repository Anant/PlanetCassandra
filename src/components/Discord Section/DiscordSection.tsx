import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BackgroundImage from '../../images/Background - discord banner.png'
import Planet from '../../images/PlanetPlanetCassandra.png'
import Discord from '../../images/Discord.png'
import { Grid, Typography, Container, Button } from '@mui/material';
import { navigate } from 'gatsby';


const DiscordSection = () => {
    return (
        <Grid
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            container
        >
            <Container sx={{ paddingY: 3 }} maxWidth="xl">
                <Grid container spacing={3}>
                    {/* Left side */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            sx={{
                                color: '#F9F8F8',
                                fontFamily: 'Poppins',
                                fontSize: '68.155px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '131.5%',
                                letterSpacing: '-7.156px',
                            }}
                            gutterBottom
                        >
                            We are on <span style={{ color: '#5AB1BB' }}>Discord</span>
                        </Typography>
                        <Grid container alignItems="center" spacing={2} sx={{ flexDirection: 'row' }}>
                            <Grid item>
                                <img
                                    src={Planet} // Replace with your Discord image source
                                    alt="Discord"
                                    style={{ width: '150px', height: '150px' }}
                                />
                            </Grid>
                            <Grid item xs>
                                <Grid container direction="column">
                                    <Typography
                                        sx={{
                                            color: '#FFF',
                                            fontFamily: 'Lato',
                                            fontSize: '22.718px',
                                            fontStyle: 'normal',
                                            fontWeight: 300,
                                            lineHeight: '122.5%',
                                            letterSpacing: '0.454px',
                                        }}
                                    >
                                        Find <span style={{ fontWeight: 700 }}>answers</span> to your common Cassandra issues by joining our discord channel of developers!
                                    </Typography>

                                    <a href="https://discord.com/invite/pPjPcZN" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            sx={{
                                                display: 'inline-flex',
                                                height: '51px',
                                                padding: '9px 14px',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '8px',
                                                flexShrink: 0,
                                                borderRadius: '12px',
                                                background: '#5AB1BB',
                                                color: '#FFF',
                                            }}
                                        >
                                            Invitation Link
                                            <ArrowForwardIosIcon />
                                        </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    {/* Right side */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Discord} alt="Right side image" style={{ maxWidth: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>

    );
};

export default DiscordSection;
