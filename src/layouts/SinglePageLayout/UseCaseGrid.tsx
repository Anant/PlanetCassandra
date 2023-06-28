import React from "react";
import BaseGrid from "./BaseGrid";
import RelatedArticlesLayout from "./RelatedArticlesLayout";
import ShareUseCases from "../../components/SinglePageComponents/Cards/ShareUseCaseCard";
import UpdateUseCaseCard from "../../components/SinglePageComponents/Cards/UpdateUseCaseCard";
//@ts-ignore
const UseCaseGrid = ({ singlePage, relatedArticles }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      renderExploreFurther={undefined}
      renderRelatedArticles={undefined}
      renderShareUseCard={() => <ShareUseCases />}
      renderUpdateUseCaseCard={() => <UpdateUseCaseCard />}
      routePrefix="/usecases"
      titleSectionType={"usecase"}
    />
  );
};
export default UseCaseGrid;
