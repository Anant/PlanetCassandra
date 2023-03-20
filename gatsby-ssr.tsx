import React from "react";
import { GatsbySSR } from "gatsby";
import { SearchValueProvider } from "./src/context/SearchContext";

const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <SearchValueProvider>{element}</SearchValueProvider>;
};

export { wrapRootElement };
