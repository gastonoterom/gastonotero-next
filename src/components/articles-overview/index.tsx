import React from "react";
import Link from "next/link";
import { Article } from "@interfaces/article";
import {
  ListItem,
  Container,
  ArticleTitle,
  ArticleDate,
  ArticleDescription,
} from "./styled";

interface Props {
  articles: Article[];
  basePage: string;
}

function ArticleOverview({ article }: { article: Article }) {
  return (
    <div>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate> {article.iso8601date}</ArticleDate>
      {/**
       *  <ArticleDescription>{article.description}</ArticleDescription>
       * */}
    </div>
  );
}

function ArticlesOverview({ articles, basePage }: Props) {
  return (
    <Container>
      <div>
        {articles.map((article) => (
          <Link key={article.id} href={basePage + "/" + article.id}>
            <ListItem>
              <ArticleOverview article={article} />
            </ListItem>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export function PostsOverview({ posts }: { posts: Article[] }) {
  return <ArticlesOverview articles={posts} basePage={"blog"} />;
}

export function ProjectsOverview({ projects }: { projects: Article[] }) {
  return <ArticlesOverview articles={projects} basePage={"projects"} />;
}
