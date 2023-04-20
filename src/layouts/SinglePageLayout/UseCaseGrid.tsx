import React from "react";
import BaseGrid from "./BaseGrid";
import RelatedArticlesLayout from "./RelatedArticlesLayout";
//@ts-ignore
const UseCaseGrid = ({ singlePage, relatedArticles }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      renderExploreFurther={undefined}
      renderRelatedArticles={undefined}
      routePrefix="/usecases"
    />
  );
};
export default UseCaseGrid;
