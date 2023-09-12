import { Actions } from "gatsby";

export const createRedirects = (createRedirect: Actions["createRedirect"]) => {

  // Redirects
  createRedirect({
    fromPath: "/apache-cassandra-use-cases/",
    toPath: "/usecases/",
    isPermanent: true,
    redirectInBrowser: true,
  });

   
   createRedirect({
    fromPath: "/tshirt/",
    toPath: "/contact/",
    isPermanent: true,
    redirectInBrowser: true,
  });

  
  createRedirect({
    fromPath: "/contribute/",
    toPath: "/contact/",
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Add more redirects here as needed
};
