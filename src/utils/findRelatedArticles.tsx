// /utils/findRelatedArticles.ts
interface Article {
    id: string;
    tags: string[];
  }
  
  export function findRelatedArticles(
    articles: Article[],
    currentArticle: Article,
    maxRelated: number = 10
  ): Article[] {
    const currentTags = currentArticle.tags.filter(
        (tag) => tag !== "cassandra"
      );
  
      const articlesWithCurrentTags = articles.filter((article) => {
        if (article.id === currentArticle.id) return false;
  
        const articleTags = article.tags.filter((tag) => tag !== "cassandra");
        return currentTags.some((tag) => articleTags.includes(tag));
      });
  
      const cassandraArticles = articles.filter((article) => {
        if (article.id === currentArticle.id) return false;
        return article.tags.includes("cassandra");
      });
  
      const relatedArticles = [
        ...new Set(
          [...articlesWithCurrentTags, ...cassandraArticles].map(
            (article) => article.id
          )
        ),
      ]
        .map((id) => {
          return articles.find((article) => article.id === id)!;
        })
        .slice(0, maxRelated);
  
      const remaining = maxRelated - relatedArticles.length;
      if (remaining > 0) {
        const additionalArticles = articlesWithCurrentTags
          .filter((article) => {
            return !relatedArticles.includes(article);
          })
          .slice(0, remaining);
        relatedArticles.push(...additionalArticles);
      }
  
      return relatedArticles;
  }
  