// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import BaseGrid, {
  BaseGridProps,
} from "../../layouts/SinglePageLayout/BaseGrid";
import LeaftGrid from "../../layouts/SinglePageLayout/LeafGrid";
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

function findThumbnails(nodes: any[], images: ImageData[]): any[] {
  return nodes.map((node) => {
    const filteredImages = images.filter((e) => e.childImageSharp !== null);
    const thumbnail =
      filteredImages.find((image) => image.parent.id === node.id)
        ?.childImageSharp?.gatsbyImageData || null;
    return {
      ...node,
      thumbnail,
    };
  });
}

function findThumbnailsForTagSets(tagSets: any[], images: ImageData[]): any[] {
  return tagSets.map((tagSet) => {
    const articles = tagSet.articles.map((article: any) => {
      const filteredImages = images.filter((e) => e.childImageSharp !== null);
      const thumbnail =
        filteredImages.find((image) => image.parent.id === article.id)
          ?.childImageSharp?.gatsbyImageData || null;
      return {
        ...article,
        thumbnail,
      };
    });
    return {
      ...tagSet,
      articles,
    };
  });
}

const LeafSinglePage: React.FC<LeafSinglePageProps> = (props) => {
  const {
    pageContext: { node, relatedArticles, tagSets, images },
  } = props;

  const allRelatedArticles = findThumbnails(relatedArticles, images);
  const singlePageNode = findThumbnails([node], images);
  const allTagSets = findThumbnailsForTagSets(tagSets, images);
  const metaDescription = node.description
    ? node.description.slice(0, 40)
    : node.title;
  return (
    <Layout>
      <Helmet>
        <title>{node.title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={node.tags.join(", ")} />
        <meta name="author" content={node.url} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: node.title,
            description: metaDescription,
            keywords: node.title,
            author: {
              "@type": "Organization",
              name: node.title,
            },
          })}
        </script>

        <meta property="og:title" content={node.title} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={node.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content={
            "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
          }
        />
      </Helmet>
      <LeaftGrid
        singlePage={singlePageNode[0]}
        relatedArticles={allRelatedArticles}
        tagSets={allTagSets}
      />
    </Layout>
  );
};

export default LeafSinglePage;
