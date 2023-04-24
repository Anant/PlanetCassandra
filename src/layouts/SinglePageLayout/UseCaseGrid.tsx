import React from "react";
import BaseGrid from "./BaseGrid";
import RelatedArticlesLayout from "./RelatedArticlesLayout";
import ShareUseCases from "../../components/SinglePageComponents/Cards/ShareUseCaseCard";
//@ts-ignore
const UseCaseGrid = ({ singlePage, relatedArticles }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      renderExploreFurther={undefined}
      renderRelatedArticles={undefined}
      renderShareUseCard={() => <ShareUseCases />}
      routePrefix="/usecases"
    />
  );
};
export default UseCaseGrid;
