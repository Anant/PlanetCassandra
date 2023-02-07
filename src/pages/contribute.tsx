import React from 'react';
import { Box, Typography, FormControl, InputLabel, Input, Button } from '@mui/material';
import Layout from '../components/Layout/Layout'
import { Link } from 'gatsby';
import { Container } from '@mui/system';

const ContributePage: React.FC = () => {
    return (
        <Layout>
            <Container  maxWidth="xl">
            <Box sx={{ padding: 3 }}>
                <Typography variant="h3" className="Font_Montserrat_Bold" sx={{ color: '#5ab1bb', fontSize: 30 }}>
                    Contribute to Our Project
                </Typography>
                <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary" sx={{ marginTop: 10 }}>
                    Our project is open-source and always looking for new contributors. If you want to help us build a better product, you're in the right place!
                </Typography>
                <Typography variant="h5" className="Font_Montserrat_Bold" sx={{ color: '#5ab1bb', fontSize: 20, marginTop: 20 }}>
                    Ways to Contribute
                </Typography>
                <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary" sx={{ marginTop: 10 }}>
                    Here are some of the ways you can contribute to our project:
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary">
                            Reporting bugs and creating issue reports
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary">
                            Contributing code fixes and improvements
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary">
                            Improving the documentation
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary">
                            Spreading the word about our project and helping us grow the community
                        </Typography>
                    </li>
                </ul>
                <Typography variant="h5" className="Font_Montserrat_Bold" sx={{ color: '#5ab1bb', fontSize: 20, marginTop: 20 }}>
                    Get Involved
                </Typography>
                <Typography variant="body2" className="Font_Montserrat_550" color="text.secondary" sx={{ marginTop: 10 }}>
                    If you're interested in contributing to our project, the first step is to get involved. Join our community and start contributing today!
                </Typography>
                <Link style={{ textDecoration: "none" }} to="/contactus">
                    <Button
                        sx={{
                            borderRadius: 50,
                            backgroundColor: '#5AB1BB',
                            fontSize: 10,
                            '&:hover': {
                                backgroundColor: '#344D67',
                            },
                            marginTop: 20,
                        }}
                        variant

                        ="contained"
                        color="primary"
                    >
                        Join Our Community
                    </Button>
                </Link>
            </Box>
            </Container>
        </Layout>
    );
};

export default ContributePage;
