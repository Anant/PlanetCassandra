import React from 'react';
import BaseGrid from './BaseGrid';

//@ts-ignore
const UseCaseGrid = ({ singlePage, relatedArticles }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      renderExploreFurther={undefined}
      routePrefix="/use-cases"
    />
  );
};

export default UseCaseGrid;