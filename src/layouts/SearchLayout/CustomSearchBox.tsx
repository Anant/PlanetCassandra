import { useSearchBox } from "react-instantsearch-hooks-web";
import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function CustomSearchBox({ props, defaultQuery }: any) {
  const { query, refine, clear } = useSearchBox(props);

  const handleChange = (event: { target: { value: any } }) => {
    refine(event.target.value);
  };
  return (
    <>
      <Paper
        sx={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          sx={{
            marginLeft: 1,
            flex: 1,
          }}
          placeholder="Search Planet Cassandra"
          inputProps={{ "aria-label": "Search Planet Cassandra" }}
          onChange={handleChange}
        />
        <IconButton type="submit" sx={{ padding: 1 }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}
export default CustomSearchBox;
