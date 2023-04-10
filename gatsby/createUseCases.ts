// gatsby/createUseCases.ts
import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
let getSlug = require("speakingurl");

interface CreateUseCasesArgs {
    createPage: Actions["createPage"];
    graphql: CreatePagesArgs["graphql"];
}

export const createUseCases = async ({ createPage, graphql }: CreateUseCasesArgs) => {
    const allUseCases = await getAllUseCases(graphql);

    if (allUseCases.errors) {
        console.log(allUseCases.errors);
        throw new Error(allUseCases.errors);
    }
    if (!allUseCases.data) {
        console.log("No data found!");
        return;
    }

    allUseCases.data.allAirtable.nodes.forEach((node: { data: { Case_Name: any; Case_Description: any; Case_Article_Content: any; }; }) => {
        createPage({
            path: `/use-cases/${getSlug(node.data.Case_Name)}`,
            component: resolve(`src/components/Templates/UseCaseSinglePage.tsx`),
            context: {
                Description: node.data.Case_Description,
                Name: node.data.Case_Name,
                Case_Article_Content: node.data.Case_Article_Content,
            },
        });
    });
}
//@ts-ignore
async function getAllUseCases(graphql) {
    return await graphql(`
   query UseCasesData {
    allAirtable(filter: { table: { eq: "Cases" } }) {
      nodes {
        table
        data {
          Case_Name
          Case_Description
          Case_Article_Content
        }
      }
    }
  }
  `);
}
