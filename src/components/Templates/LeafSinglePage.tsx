// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import SinglePageBaseGrid from "../../layouts/SinglePageLayout/SinglePageBaseGrid";
import "../../components/Layout/Layout.css";
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
  };
}

const LeafSinglePage: React.FC<LeafSinglePageProps> = ({
  pageContext: { node, relatedArticles, tagSets },
}) => {
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
          thumbnail: {
            layout: "constrained",
            backgroundColor: "#382858",
            images: {
              fallback: {
                src: "/static/c9a775fe14a5f58876a03c5587454932/4a49b/49d9079034d98c3a6cbddb7ae7e5387c.jpg",
                srcSet:
                  "/static/c9a775fe14a5f58876a03c5587454932/b4dad/49d9079034d98c3a6cbddb7ae7e5387c.jpg 320w,\n/static/c9a775fe14a5f58876a03c5587454932/3440d/49d9079034d98c3a6cbddb7ae7e5387c.jpg 640w,\n/static/c9a775fe14a5f58876a03c5587454932/4a49b/49d9079034d98c3a6cbddb7ae7e5387c.jpg 1280w",
                sizes: "(min-width: 1280px) 1280px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/c9a775fe14a5f58876a03c5587454932/c0bcc/49d9079034d98c3a6cbddb7ae7e5387c.webp 320w,\n/static/c9a775fe14a5f58876a03c5587454932/17574/49d9079034d98c3a6cbddb7ae7e5387c.webp 640w,\n/static/c9a775fe14a5f58876a03c5587454932/71d4d/49d9079034d98c3a6cbddb7ae7e5387c.webp 1280w",
                  type: "image/webp",
                  sizes: "(min-width: 1280px) 1280px, 100vw",
                },
              ],
            },
            width: 1280,
            height: 720,
          },
          tagSets,
        }}
      />
    </Layout>
  );
};

export default LeafSinglePage;
