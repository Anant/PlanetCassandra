import React, { useState } from "react";
import {
  Typography,
  Paper,
  Skeleton,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Carousel from "react-material-ui-carousel";
import SendIcon from "@mui/icons-material/Send";


interface Props {
  items: Array<{
    title: string;
    image: IGatsbyImageData;
    slug: string;
  }>;
}

const NewCarousel: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);

  const handleNext = (e: any) => {
    setIsImageLoaded(true);
    setCurrentIndex(e);
  };

  return (
    <Carousel onChange={(e) => handleNext(e)}>
      {items.map((item, i) => (
        <Card key={i} sx={{
          borderRadius: '16px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          border: '3px solid #F2F2F2',
        }}>
          <CardContent sx={{ height: {
            xs: "300px",
            sm: "450px",
            md: "400px",
            lg: "400px"
          } }}>
          {item.image && isImageLoaded ? (
            <GatsbyImage
              image={items[currentIndex].image}
              alt="Logo"
              onError={() => setIsImageLoaded(false)}
            />
          ) : (
            <Skeleton variant="rectangular" width={"100%"} height={300} />
          )}
          <Typography
            marginTop={2}
            textAlign={"center"}
            height="80px"
            variant="h5"
            sx={{
              paddingBottom: { xs: 2.5, sm: 1, md: 1, lg: 1 },
            }}
          >
            {item.title}
          </Typography>
          </CardContent>

          <Link
            style={{
              display: "block",
              textDecoration: "none",
              color: "white",
              margin: "auto",
              textAlign: "center",
            }}
            to={`/post/${items[currentIndex].slug}`}
          >
            <Button
              sx={{
                borderRadius: 50,
                marginBottom: 2,

                backgroundColor: "#344D67",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Continue reading{" "}
            </Button>
          </Link>
        </Card>
      ))}
    </Carousel>
  );
};

export default NewCarousel;
