import SearchBar from "material-ui-search-bar";
import React from "react";

const Search = () => {
  return (
    <div style={{ width: "400px", marginLeft: "180px" }}>
      <SearchBar
        style={{ borderRadius: "32px", height: "30px" }}
        value={""}
        placeholder={"Search Planet Cassandra..."}
        className="fontSize"
      />
    </div>
  );
};

export default Search;
