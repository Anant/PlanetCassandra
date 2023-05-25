import React, { useState, useEffect } from "react";
import {
  RefinementList,
  useRefinementList,
} from "react-instantsearch-hooks-web";
import { Typography } from "@mui/material";
const MyRefinementList = ({ attribute, label }: any) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          fontFamily: "Roboto Condensed, sans-serif",
        }}
      >
        {label}
      </Typography>
      <RefinementList attribute={attribute} showMore={true} limit={7} />
    </>
  );
};
export default MyRefinementList;
