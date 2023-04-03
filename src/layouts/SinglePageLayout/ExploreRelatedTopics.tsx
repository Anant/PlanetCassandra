import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import { Link } from "gatsby";

interface Tag {
  name: string;
  path: string;
}

const fileItems: Tag[] = [
  { name: "All", path: "/tags/cassandra/1" },
  { name: "Kafka", path: "/tags/kafka/1" },
  { name: "Spark", path: "/tags/spark/1" },
  { name: "Scylla", path: "/tags/scylla/1" },
  { name: "SStable", path: "/tags/sstable/1" },
  { name: "Kubernetes", path: "/tags/kubernetes/1" },
  { name: "Api", path: "/tags/api/1" },
  { name: "Github", path: "/tags/github/1" },
  { name: "GraphQl", path: "/tags/graphql/1" },
];

function ExploreRelatedTopics(): JSX.Element {
  return (
    <Box sx={{ marginY: 5 }}>
      <Typography
        fontSize={{ xs: 15, md: 22 }}
        fontWeight={700}
        marginBottom={3}
        fontFamily="Roboto Condensed, sans-serif"
        color={"#1D201F"}
      >
        Explore Related Topics
      </Typography>
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {fileItems &&
          fileItems.length > 0 &&
          fileItems.map((fileItem, key) => (
            <Typography
              sx={{
                cursor: "pointer",
                marginRight: 3,
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 400,
                fontSize: { xs: 10, sm: 8, md: 16 },
                textTransform: "capitalize",
                border: "1px solid",
                borderColor: "#FFA62B",
                borderRadius: "20px",
                padding: 1,
                width: "100px",
                textAlign: "center",
              }}
            >
              <Link
                key={key}
                to={fileItem.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                {fileItem.name}
              </Link>
            </Typography>
          ))}
      </Box>
    </Box>
  );
}

export default ExploreRelatedTopics;
