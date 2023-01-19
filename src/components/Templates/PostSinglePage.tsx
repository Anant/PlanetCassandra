// @ts-ignore
import { Helmet } from "react-helmet"
import React from "react"

interface PostSinglePageProps {
  pageContext: {
      id: string;
      title: string;
      content: string;
      tags: string[];
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({ pageContext: { id, title, tags, content } }) => {
  console.log(tags)  
  return (
      <>
      <Helmet>
        <title>{title}</title>
        <meta name={title} content={tags.join(",")} />
      </Helmet>
      <div>
        <h1>Post with id: {id}</h1>
        <p>{content}</p>
      </div>
      </>
    )
  }
  
  export default PostSinglePage