// searchPage.tsx
import React from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useSearchValueContext } from '../context/SearchContext'

const SearchPage: React.FC = () => {
  const { searchValue } = useSearchValueContext();

    return (
        <h1>{searchValue}</h1>
    );
 
};

export default SearchPage;
