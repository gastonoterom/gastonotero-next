import React from "react";
import Link from "next/link";
import { Article } from "@interfaces/Article";
import { Row, Col, Container } from "./styled";

interface Props {
  articles: Article[];
  basePage: string;
}

function ArticlesOverview({ articles, basePage }: Props) {
  return (
    <Container>
      {articles.map((article) => (
        <Row key={article.id}>
          <Col>
            <Link href={basePage + "/" + article.id}>
              <h4>{article.title}</h4>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export function PostsOverview({ posts }: { posts: Article[] }) {
  return <ArticlesOverview articles={posts} basePage={"blog"} />;
}

export function ProjectsOverview({ projects }: { projects: Article[] }) {
  return <ArticlesOverview articles={projects} basePage={"projects"} />;
}
