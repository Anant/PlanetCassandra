import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PostCardGrid from "../components/PostCardGrid/PostCardGrid";
import { useStaticQuery, graphql } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          title
          date
        }
      }
    }
  `)
  
  const cardData = data.allWpPost.nodes;

  return (
    <main>
      <PostCardGrid cardData={cardData} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
;
