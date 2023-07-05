import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import algoliasearch from "algoliasearch/lite";
import getSlug from "speakingurl";
import { List, ListItem, ListItemText } from "@mui/material";
import Popper from "@mui/material/Popper";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import { useSearchValueContext } from "../../context/SearchContext";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex("PlanetCassandraPosts");
//@ts-ignore
const SearchResults = ({ results, open, setOpen, anchor }) => {
  return (
    <Popper open={open} anchorEl={anchor} style={{ zIndex: 100000 }}>
      <Paper>
        <List>
          {/* @ts-ignore */}
          {results.map((result) => (
            <Link
              to={`/post/${result.slug}`}
              style={{ textDecoration: "none", color: "black" }}
            >
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

  const { addSearchValue } = useSearchValueContext();

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSearchValue(searchTerm);
      navigate("/search");
      setSearchTerm("");
      localStorage.setItem("selectedCategory", JSON.stringify("all"));
    }
  };
  const handleOnClick = (e: any) => {
    e.preventDefault();
    addSearchValue(searchTerm);
    navigate("/search");
    setSearchTerm("");
    localStorage.setItem("selectedCategory", JSON.stringify("all"));
  };

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
        marginLeft: { xs: 0 },
      }}
    >
      <InputBase
        value={searchTerm}
        sx={{
          "& input": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: { xs: "10px", md: "15px" },
            // Additional styling properties for the input component
          },
          ml: 1,
          flex: 1,
        }}
        placeholder="Search Planet Cassandra..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={anchorRef}
      />
      <IconButton
        onClick={(e) => handleOnClick(e)}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
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
}
