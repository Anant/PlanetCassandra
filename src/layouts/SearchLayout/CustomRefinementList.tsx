import React, { useState, useEffect } from "react";
import { RefinementList } from "react-instantsearch-hooks-web";

const MyRefinementList = ({ attribute }: any) => {
  //   const [totalItems, setTotalItems] = useState(0);
  //   console.log(
  //     "🚀 ~ file: CustomRefinementList.tsx:6 ~ MyRefinementList ~ totalItems:",
  //     totalItems
  //   );
  //   const [limit, setLimit] = useState(100);

  //   const [hasCalculatedTotalItems, setHasCalculatedTotalItems] = useState(false);

  //   const handleTransformItems = (items: any) => {
  //     if (hasCalculatedTotalItems === false) {
  //       console.log("entered", hasCalculatedTotalItems);

  //       setTotalItems(items.length);
  //       setHasCalculatedTotalItems(true);
  //     }
  //     return items;
  //   };
  //   useEffect(() => {
  //     if (hasCalculatedTotalItems === true) {
  //       console.log("entered here");

  //       setLimit(7);
  //     }
  //   }, [hasCalculatedTotalItems]);

  return (
    <>
      <RefinementList attribute={attribute} showMore={true} limit={7} />
    </>
  );
};
export default MyRefinementList;
