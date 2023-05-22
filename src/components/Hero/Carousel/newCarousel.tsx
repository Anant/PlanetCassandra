import React, { useState } from "react";
import { Typography, Skeleton, Button, Card, CardContent } from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageData } from "gatsby-plugin-image";
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
        <Card
          key={i}
          sx={{
            borderRadius: "16px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            border: "3px solid #F2F2F2",
          }}
        >
          <CardContent
            sx={{
              height: {
                xs: "300px",
                sm: "450px",
                md: "400px",
                lg: "450px",
              },
            }}
          >
            {item.image && isImageLoaded ? (
              <GatsbyImage
                style={{ height: "80%" }}
                image={items[currentIndex].image}
                alt="Logo"
                onError={() => setIsImageLoaded(false)}
              />
            ) : (
              <Skeleton variant="rectangular" width={"100%"} height={380} />
            )}
            <Typography
              className="textTruncate-2"
              marginTop={2}
              textAlign={"center"}
              variant="h5"
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
