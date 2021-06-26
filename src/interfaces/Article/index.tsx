/**
 * Article interface that represents a markdown blog article.
 */
export interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  iso8601date: string;

  content: string;
}

export interface ArticlePath {
  params: {
    id: string;
  };
}

export interface ArticleData {
  id: string;
  title: string;
  description: string;
  author: string;
  iso8601date: string;
}
