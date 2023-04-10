// /utils/findThreeTagSets.ts
interface Article {
    id: string;
    tags: string[];
  }
  
  interface TagSet {
    tag: string;
    articles: Article[];
  }
  
  export function findThreeTagSets(
    articles: Article[],
    currentArticle: Article,
    maxArticlesPerSet: number = 4
  ): TagSet[] {
    const tagSets: TagSet[] = [];

    const availableTags = currentArticle.tags.slice(0, 3);
    if (availableTags.length < 3) {
      if (!availableTags.includes("spark")) {
        availableTags.push("spark");
      }
      if (!availableTags.includes("kafka") && availableTags.length < 3) {
        availableTags.push("kafka");
      }
    }

    availableTags.forEach((tag) => {
      let articlesWithTag: Article[] = articles
        .filter((article) => {
          return article.id !== currentArticle.id && article.tags.includes(tag);
        })
        .slice(0, maxArticlesPerSet);

      // If there are not enough articles for the current tag, fill with articles tagged with "spark" and "kafka"
      if (articlesWithTag.length < maxArticlesPerSet) {
        const fillTags = ["spark", "kafka"];
        fillTags.forEach((fillTag) => {
          if (articlesWithTag.length < maxArticlesPerSet) {
            const fillArticles = articles
              .filter((article) => {
                return (
                  article.id !== currentArticle.id &&
                  article.tags.includes(fillTag) &&
                  !articlesWithTag.includes(article)
                );
              })
              .slice(0, maxArticlesPerSet - articlesWithTag.length);
            articlesWithTag = articlesWithTag.concat(fillArticles);
          }
        });
      }

      // Create an object with the tag name and related articles array
      const tagSet: TagSet = {
        tag: tag,
        articles: articlesWithTag,
      };
      tagSets.push(tagSet);
    });

    return tagSets;
  }
  