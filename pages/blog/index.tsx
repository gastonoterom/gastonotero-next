import React from "react";
import { GetStaticProps } from "next";
import { Wrapper, Header, Footer, PostsOverview } from "@components";
import { Container } from "./styled";
import { Article } from "@interfaces/Article";
import { getPosts } from "@lib";

export default function ({ posts }: { posts: Article[] }) {
  return (
    <Wrapper>
      <Header />
      <Container>
        <PostsOverview posts={posts} />
      </Container>
      <Footer />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Article[] = await getPosts();
  return {
    props: { posts },
  };
};
