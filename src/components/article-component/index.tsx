import React, { useMemo } from "react";
import { Article } from "@interfaces/Article";
import { ArticleTitle, ArticleDate } from "./styled";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export function ArticleComponent({ article }: { article: Article }) {
  // Generate the content mdx for the article

  return (
    <div>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate> {article.iso8601date}</ArticleDate>
      <MDXRemote {...article.mdx} />
    </div>
  );
}
