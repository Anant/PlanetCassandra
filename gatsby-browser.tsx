import './src/styles/global.css'
import React from "react";
import { SearchValueProvider } from "./src/context/SearchContext";
import { GatsbyBrowser } from "gatsby";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <SearchValueProvider>{element}</SearchValueProvider>;
};

export { wrapRootElement };
