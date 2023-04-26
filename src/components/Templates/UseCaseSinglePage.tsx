import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { BaseGridProps } from "../../layouts/SinglePageLayout/BaseGrid";
import UseCaseGrid from "../../layouts/SinglePageLayout/UseCaseGrid";
import "../../components/Layout/Layout.css";
import "./singlePageTemplates.css";

interface UseCasesSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    Description: string;
    Case_Article_Content: string;
    Case_Published: string;
    Case_URL: string;
    Case_Stack: {
      data: {
        Name: string;
      }[];
    };
    Case_Function: {
      data: {
        Function_Name: string;
      }[];
    };
    Case_Industry: {
      data: {
        Industry_Name: string;
      }[];
    };
    RelatedArticles: Array<{
      Company: any;
      Case_Published: string;
      Case_URL: string;
      Case_Name: string;
      gatsbyImageData: IGatsbyImageData | null;
    }>;
    gatsbyImageData: IGatsbyImageData | null;
    Company: string;
  };
}

const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = (props) => {
  const {
    pageContext: {
      id,
      title,
      Description,
      Case_Article_Content,
      RelatedArticles,
      Company,
      gatsbyImageData,
      Case_Published,
      Case_URL,
      Case_Stack,
      Case_Function,
      Case_Industry,
    },
  } = props;
  const mapUseCasesToProps = (
    useCasesProps: UseCasesSinglePageProps
  ): BaseGridProps => {
    return {
      singlePage: {
        title,
        description: Description,
        content: Case_Article_Content,
        thumbnail: gatsbyImageData,
        //@ts-ignore
        routePrefix: props.routePrefix,
        id, // Add the missing id property
        url: Case_URL, // Add the missing url property for UseCases
        domain_name: Case_URL, // Add the missing domain_name property
        wallabag_created_at: Case_Published, // Add the date
        published_by: Company,
        Case_Stack, // Pass the Case_Stack
        Case_Function, // Pass the Case_Function
        Case_Industry,
      },
      relatedArticles: RelatedArticles.map((relatedArticle) => ({
        ...relatedArticle,
        title: relatedArticle.Case_Name, // Add the missing title property for UseCases
        thumbnail: relatedArticle.gatsbyImageData,
        published_by: relatedArticle.Company,
        wallabag_created_at: relatedArticle.Case_Published, // Add the date
        url: relatedArticle.Case_URL,
      })),
    };
  };
  const baseGridProps = mapUseCasesToProps(props);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={Description} />
        <meta name="keywords" content={title} />
        <meta name="author" content={Company} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={Description} />
        {/* <meta property="og:image" content={gatsbyImageData} /> */}
      </Helmet>
      <UseCaseGrid
        singlePage={baseGridProps.singlePage}
        relatedArticles={baseGridProps.relatedArticles}
      />
    </Layout>
  );
};

export default UseCasesSinglePage;
