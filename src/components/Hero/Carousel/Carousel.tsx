import React, { useState } from 'react';
import {
    Typography,
    Paper,
    IconButton,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import '../Carousel/styles.css'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
    items: Array<{
        title: string;
        image: string;
    }>;
}



const Carousel: React.FC<Props> = ({ items }) => {
    //We need to set up gatsby-source-filesystem 
    const  path  = useStaticQuery(query);
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex + items.length - 1) % 4);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    //Need to refactor for production
    const theimage = `http://localhost:8000${items[currentIndex].image}`

    return (
        <div className={'root'}>
            <img src={theimage} alt="Logo" />
            <Paper elevation={3} className={'carousel'}>
                <Grid container className={'carousel'}>
                    <Grid item xs={12} sm={10} md={8}>
                        <Card className={'card'}>
                            <CardMedia
                                className={'media'}
                                image={theimage}
                                title={items[currentIndex].title}
                            />
                            <CardContent className={'content'}>
                                <Typography variant="h5" className={'title'}>
                                    {items[currentIndex].title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div className={'controls'}>
                    <IconButton
                        className={'button'}
                        onClick={handlePrev}
                        aria-label="previous slide"
                    >
                        {'<'}
                    </IconButton>
                    <IconButton
                        className={'button'}
                        onClick={handleNext}
                        aria-label="next slide"
                    >
                        {'>'}
                    </IconButton>
                </div>
            </Paper>
        </div>
    );
};

export const query = graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `;

export default Carousel;
