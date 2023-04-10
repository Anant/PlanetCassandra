import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import SinglePageBaseGrid from "../../layouts/SinglePageLayout/SinglePageBaseGrid";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface ImageData {
  name: string;
  childrenImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  }[];
}
interface UseCasesSinglePageProps {
  pageContext: {
    node: {
      data: {
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
        Case_Article_Content: string;
        Case_Published: string;
        Case_Company: {
          data: {
            Name: string;
          };
          id: number;
        };
      };
    };
    newestCases: [];
    exploreFurther: [];
    images: ImageData[];
  };
}

const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = ({
  pageContext: { node, newestCases, exploreFurther, images },
}) => {
  function getCurrentCompanies(exploreFurther: any[], images: any[]) {
    return exploreFurther.map((node: any) => {
      const companyName = node.data.Case_Company[0]?.data.Name.split(" ")
        .join("")
        .toLowerCase();
      const logoFile = images.find(
        (file) => file.name === `case.logo.${companyName}`
      );

      return {
        ...node.data,
        thumbnail: logoFile?.childrenImageSharp[0]?.gatsbyImageData || null,
      };
    });
  }
  const exploreFurtherCases = getCurrentCompanies(exploreFurther, images);
  const singlePageWithThumbnail = getCurrentCompanies([node], images);
  const newestRelatedCases = getCurrentCompanies(newestCases, images);

  // Im mapping the useCases to object like leaf so i dont have to change every component down the line
  let singlePageNode = {
    tags: [],
    title: singlePageWithThumbnail[0].Case_Name,
    wallabag_created_at: singlePageWithThumbnail[0].Case_Published,
    description: singlePageWithThumbnail[0].Case_Description,
    id: singlePageWithThumbnail[0].Case_Company[0].id,
    content: singlePageWithThumbnail[0].Case_Article_Content,
    url: singlePageWithThumbnail[0].Case_URL,
    origin_url: singlePageWithThumbnail[0].Case_URL,
    reading_time: 0,
    domain_name: "",
    preview_picture: "",
    thumbnail: singlePageWithThumbnail[0].thumbnail,
  };
  // something similiar needs to be done to newestRelatedCases and exploreFurtherCases
  return (
    <Layout>
      <Helmet>
        <title>{singlePageNode.title}</title>
        <meta
          name={singlePageNode.title}
          content={singlePageNode.description}
        />
      </Helmet>
      <SinglePageBaseGrid
        args={{
          singlePage: singlePageNode,
          relatedArticles: newestRelatedCases,
          tagSets: exploreFurtherCases,
        }}
      />
    </Layout>
  );
};

export default UseCasesSinglePage;
