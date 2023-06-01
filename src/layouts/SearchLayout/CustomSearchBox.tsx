import { useSearchBox } from "react-instantsearch-hooks-web";
import React, { useEffect } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchValueContext } from "../../context/SearchContext";

function CustomSearchBox({
  props,
  defaultQuery,
  setDefaultQuery,
  placeholderText,
}: any) {
  const { addSearchValue } = useSearchValueContext();

  const { query, refine, clear } = useSearchBox(props);
  useEffect(() => {
    // Update the document title using the browser API
    refine(defaultQuery);
    setDefaultQuery(defaultQuery);
  }, [defaultQuery]);
  const handleChange = (event: { target: { value: any } }) => {
    addSearchValue(event.target.value);
    refine(event.target.value);
    setDefaultQuery(event.target.value);
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
          value={defaultQuery}
          placeholder={placeholderText}
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
