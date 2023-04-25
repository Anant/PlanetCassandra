import React from "react";
import BaseGrid from "./BaseGrid";
import ExploreFurtherLayout from "./ExploreFurtherLayout";
import RelatedArticlesLayout from "./RelatedArticlesLayout";

//@ts-ignore
const LeaftGrid = ({ singlePage, relatedArticles, tagSets }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      routePrefix="/leaf"
      renderRelatedArticles={() => (
        <RelatedArticlesLayout data={relatedArticles} routePrefix={"/leaf"} />
      )}
      renderExploreFurther={() => (
        <ExploreFurtherLayout
          args={{
            data: tagSets,
            isListingPage: false,
          }} />
      )} titleSectionType={"leaves"}    />
  );
};

export default LeaftGrid;
