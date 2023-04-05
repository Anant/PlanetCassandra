import React from "react";
import { Box, Typography } from "@mui/material";

interface ArticlesFiltersProps {
  args: {
    fileItems: string[];
    selectedTag: string;
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  };
}

function ArticlesFilters({
  args: { fileItems, selectedTag, setSelectedTag },
}: ArticlesFiltersProps) {
  return (
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
            onClick={() => setSelectedTag(fileItem)}
            key={key}
            sx={{
              cursor: "pointer",
              marginRight: 3,
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 13, sm: 11, md: 22 },
              textTransform: "capitalize",
              color: selectedTag === fileItem ? "#FFA62B" : "#494949",
              borderRadius: 0,
              borderBottom:
                selectedTag === fileItem ? " 1px solid #FFA62B" : "",
            }}
          >
            {fileItem}
          </Typography>
        ))}
    </Box>
  );
}

export default ArticlesFilters;
