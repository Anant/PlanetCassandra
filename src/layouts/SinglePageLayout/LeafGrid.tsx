import React from 'react';
import BaseGrid from './BaseGrid';
import ExploreFurtherLayout from './ExploreFurtherLayout';

//@ts-ignore
const LeaftGrid = ({ singlePage, relatedArticles, tagSets }) => {
  return (
    <BaseGrid
      singlePage={singlePage}
      relatedArticles={relatedArticles}
      routePrefix="/leaf"
      renderExploreFurther={() => (
        <ExploreFurtherLayout
          args={{
            data: tagSets,
            isListingPage: false,
          }}
        />
      )}
    />
  );
};

export default LeaftGrid;