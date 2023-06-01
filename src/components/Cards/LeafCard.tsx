import React from "react";
import { Card, CardContent, Chip, Typography } from "@mui/material";
import { Link } from "gatsby";
import { BaseCard, CardProps } from "./BaseCard";
import getSlug from "speakingurl";
import "./cardStyles.css";

interface LeafCardProps extends CardProps {
  description: string;
  tags: string[];
}

const LeafCard: React.FC<LeafCardProps> = ({
  title,
  date,
  thumbnail,
  description,
  tags,
}) => {
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <CardContent className="px-6 py-4">
        {tags &&
          tags.slice(0, 3).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 700,
                justifyContent: "start",
                padding: 0,
                textOverflow: "initial",
                cursor: "pointer",
                textTransform: "capitalize",
                width: "30%",
                height: "20px",
                backgroundColor: index % 2 === 0 ? "#326065" : "#5AB1BB",
                borderRadius: "0px",
                borderTopRightRadius:
                  index === tags.length - 1 ? "10px" : "0px",
                borderBottomRightRadius:
                  index === tags.length - 1 ? "10px" : "0px",
                borderColor: "transparent",
                fontSize: { xs: "9px", sm: "8px", md: "11px" },
                color: "#fff",
                "& .MuiChip-label": {
                  padding: "0px 0px 0px 5px",
                },
              }}
            />
          ))}
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/leaf/${getSlug(title)}`}
        >
          <BaseCard title={title} date={date} thumbnail={thumbnail} />
        </Link>
        {/* <Typography className="text-gray-700">{description}</Typography> */}
      </CardContent>
    </Card>
  );
};

export default LeafCard;
