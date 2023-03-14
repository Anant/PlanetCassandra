import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import algoliasearch from "algoliasearch/lite";
import getSlug from "speakingurl";
import { Box, Fade, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Popper from '@mui/material/Popper';
import { Link } from "gatsby";

const client = algoliasearch("2X56L8156U", "c324c341a46ef9ff06ccd6a8e220d48f");
const index = client.initIndex("PlanetCassandraNews");
//@ts-ignore
const SearchResults = ({ results, open, setOpen, anchor }) => {
  return (
    <Popper open={open} anchorEl={anchor} style={{ zIndex: 100000 }}>
      <Paper>
        <List>
          {/* @ts-ignore */}
          {results.map((result) => (
            <Link to={`/news/${getSlug(result.title)}`} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={result.objectID}>
                <ListItemText primary={result.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Paper>
    </Popper>
  );
};


export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (searchTerm.length >= 3) {
      index.search(searchTerm).then(({ hits }) => {
        // @ts-ignore
        setSearchResults(hits);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);


  return (
   <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: 100, md: 100, lg: 300 },
        height: 30,
        borderRadius: 50,
        marginLeft: { xs: 0, md: 10 },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Planet Cassandra..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={anchorRef}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      {searchResults.length > 0 && (
        <SearchResults
          results={searchResults}
          open={searchResults.length > 0}
          setOpen={setOpen}
          anchor={anchorRef.current}
        />
      )}
    </Paper>
  );
};

