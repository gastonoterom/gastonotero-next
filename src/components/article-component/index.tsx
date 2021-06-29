import { Article } from "@interfaces/article";

import { MDXRemote } from "next-mdx-remote";
import { PageTitle } from "@components/page-titles";
import { Container } from "./styled";
import Image from "next/image";

export function ArticleComponent({ article }: { article: Article }) {
  // Generate the content mdx for the article

  return (
    <Container>
      <PageTitle>{article.title}</PageTitle>
      <MDXRemote components={{ Image }} {...article.mdx} />
    </Container>
  );
}
