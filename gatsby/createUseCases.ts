// gatsby/createUseCases.ts
import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
let getSlug = require("speakingurl");

interface CreateUseCasesArgs {
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
}

interface CompanyData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
        Case_Article_Content: string;
        Case_Published: string;
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
        Case_Company: {
          data: {
            Name: string;
          };
        }[];
        gatsbyImageData: IGatsbyImageData | null;
      };
    }[];
  };
}


interface LogoFile {
  name: string;
  childrenImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  }[];
}

function generateRandomIndices(length: number, count: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * length));
  }
  return Array.from(indices);
}

function mapCompanyLogosToUseCases(
  useCasesData: any[],
  allFile: LogoFile[]
): any[] {
  return useCasesData.map((node) => {
    const companyName = node.data.Case_Company[0]?.data.Name.split(" ")
      .join("")
      .toLowerCase();
    const logoFile = allFile.find(
      (file) => file.name === `case.logo.${companyName}`
    );

    return {
      ...node.data,
      gatsbyImageData: logoFile?.childrenImageSharp[0]?.gatsbyImageData || null,
    };
  });
}

export const createUseCases = async ({
  createPage,
  graphql,
}: CreateUseCasesArgs) => {
  const allUseCases = await getAllUseCases(graphql);

  if (allUseCases.errors) {
    console.log(allUseCases.errors);
    throw new Error(allUseCases.errors);
  }
  if (!allUseCases.data) {
    console.log("No data found!");
    return;
  }

  const useCasesData = allUseCases.data.allAirtable.nodes;
  const allFile = allUseCases.data.allFile.nodes;
  const allWpCategory = allUseCases.data.allWpCategory.nodes;

  const useCasesDataWithContent = useCasesData.map((node: { data: { Case_Name: any; Case_Article_Content: any; }; }) => {
    const wpPost = allWpCategory[0].posts.nodes.find(
      (post: { title: any; }) => post.title === node.data.Case_Name
    );
    
    return {
      ...node,
      data: {
        ...node.data,
        Case_Article_Content: wpPost ? wpPost.content : node.data.Case_Article_Content,
      },
    };
  });



  const useCasesWithLogos = mapCompanyLogosToUseCases(useCasesDataWithContent, allFile);

  useCasesWithLogos.forEach((node, index) => {
    // Generate random related articles
    const relatedArticleIndices = generateRandomIndices(
      useCasesWithLogos.length,
      8
    ); // 8 is the number of related articles to show
    const relatedArticles = relatedArticleIndices.map((idx) => ({
      Case_Name: useCasesWithLogos[idx].Case_Name,
      Company: useCasesWithLogos[idx].Case_Company[0]?.data.Name,
      Case_Published: useCasesWithLogos[idx].Case_Published,
      Case_URL: useCasesWithLogos[idx].Case_URL,

      gatsbyImageData: useCasesWithLogos[idx].gatsbyImageData,
    })); // get the data and images for the related articles

    createPage({
      path: `/usecases/${getSlug(node.Case_Name)}`,
      component: resolve(`src/components/Templates/UseCaseSinglePage.tsx`),
      context: {
        Description: node.Case_Description,
        title: node.Case_Name,
        Case_Article_Content: node.Case_Article_Content,
        RelatedArticles: relatedArticles,
        gatsbyImageData: node.gatsbyImageData,
        Company: node.Case_Company[0]?.data.Name,
        Case_Published: node.Case_Published,
        Case_URL: node.Case_URL,
        Case_Stack: node.Case_Stack,
        Case_Function: node.Case_Function,
        Case_Industry: node.Case_Industry,
      },
    });
    
  });
};

//@ts-ignore
function getAllUseCases(graphql) {
  return  graphql(`
  query UseCasesData {
    allAirtable(
      filter: {table: {eq: "Cases"}}
      sort: {data: {Case_Published: DESC}}
    ) {
      nodes {
        data {
          Case_URL
          Case_Name
          Case_Stack{
            data{
              Name
            }
          }
          Case_Function{
            data{
              Function_Name
            }
          }
          Case_Industry{
            data{
              Industry_Name
            }
          }
          Case_Company {
            data {
              Name
            }
            id
          }
          Case_Published
        }
      }
      
    }
    allFile(filter: { id: { ne: null } }) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    allWpCategory(filter: {name: {eq: "Use Cases"}}) {
      nodes {
        id
        name
        posts {
          nodes {
            id
            title
            authorId
            content
            excerpt
          }
        }
      }
    }
  }
  `);
}
