import { Grid, Box, Pagination } from "@mui/material";
import React, { useState } from "react";

import SingleArticleCard from "../../components/SinglePageComponents/Cards/SingleArticleCard";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  data: Array<object>;
  hasSharingContent: boolean;
}

function ListArticlesLayout({ data, hasSharingContent }: Props) {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * 7;
  const endIndex = startIndex + 7;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <Grid container spacing={{ xs: 2, sm: 1.5, md: 3 }}>
        {paginatedData.map((item: any) => (
          <Grid key={item.id} item xs={12}>
            <SingleArticleCard
              cardHeight={{ xs: "101px", sm: "112px", md: "269px" }}
              imageWidth={{ xs: "140px", sm: "149px", md: "351px" }}
              titleFontSize={{ xs: "13px", sm: "13px", md: "32px" }}
              dataFontSize={{ xs: "10px", sm: "9px", md: "22px" }}
              isShared={hasSharingContent}
              item={item}
              hasDescription={!isLargeScreen}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginY: 3 }}>
        <Pagination
          count={Math.ceil(data.length / 7)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
}

export default ListArticlesLayout;
