interface PageData {
  id: string;
  title: string;
  url: string;
  content: string;
  description: string;
  domain_name: string;
  preview_picture: string | null;
  reading_time: number | null;
  published_by: string[];
  origin_url: string | null;
  wallabag_created_at: string;
  tags: string[];
}

interface TopTagsResult {
  topTagsWithRecentPosts: Record<string, PageData[]>;
  sortedTags: string[];
}

function topTagsFilter({ data }: { data: PageData[] }): TopTagsResult {
  const tagCount = data.reduce((acc: Record<string, number>, node) => {
    node.tags.forEach((tag) => {
      acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map((tag) => tag[0]);

  const topTagsWithRecentPosts = sortedTags.reduce((acc: any, tag) => {
    acc[tag] = data
      .filter((node) => node.tags.includes(tag))
      .sort((a, b) =>
        b.wallabag_created_at.localeCompare(a.wallabag_created_at)
      )
      .slice(0, 12);
    return acc;
  }, {});

  return { topTagsWithRecentPosts, sortedTags };
}

export default topTagsFilter;
