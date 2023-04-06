// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import SinglePageBaseGrid from "../../layouts/SinglePageLayout/SinglePageBaseGrid";
import "../../components/Layout/Layout.css";
import { IGatsbyImageData } from "gatsby-plugin-image";
interface ImageData {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  parent: {
    id: string;
  };
}
interface LeafSinglePageProps {
  pageContext: {
    node: {
      tags: string[];
      title: string;
      wallabag_created_at: string;
      description: string;
      id: string;
      content: string;
      preview_picture: string;
      url: string;
      origin_url: string;
      reading_time: number;
      domain_name: string;
    };
    relatedArticles: [];
    tagSets: [];
    images: ImageData[];
  };
}

const LeafSinglePage: React.FC<LeafSinglePageProps> = ({
  pageContext: { node, relatedArticles, tagSets, images },
}) => {
  let filteredImages = images.filter((e) => e.childImageSharp !== null);

  const thumbnail =
    filteredImages.find((image) => image.parent.id === node.id)?.childImageSharp
      .gatsbyImageData || null;

  return (
    <Layout>
      <Helmet>
        <title>{node.title}</title>
        <meta name={node.title} content={node.description} />
      </Helmet>
      <SinglePageBaseGrid
        args={{
          singlePage: node,
          relatedArticles,
          thumbnail,
          tagSets,
        }}
      />
    </Layout>
  );
};

export default LeafSinglePage;
