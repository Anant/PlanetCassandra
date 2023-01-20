import React, { useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import Box from "@mui/material/Box";

// *snip*

const Search = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      onClick={() => setChecked(!checked)}
      sx={{
        marginX: 5,
        cursor: "pointer",
        paddingY: 1,
        width: 30,
        border: 1,
        borderColor: "white",
        borderRadius: 50,
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <HiOutlineSun color={checked ? "#5AB1BB" : "gray"} />
      <HiOutlineMoon color={!checked ? "#5AB1BB" : "gray"} />
    </Box>
  );
};

export default Search;
