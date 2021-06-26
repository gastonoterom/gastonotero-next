import { Article } from "@interfaces/Article";

import { MDXRemote } from "next-mdx-remote";
import { PageTitle } from "@components/page-titles";

export function ArticleComponent({ article }: { article: Article }) {
  // Generate the content mdx for the article

  return (
    <div>
      <PageTitle>{article.title}</PageTitle>
      <MDXRemote {...article.mdx} />
    </div>
  );
}
