import React from "react";
import { GetStaticProps } from "next";
import {
  Wrapper,
  Header,
  Footer,
  PostsOverview,
  PageTitle,
  BodyContainer,
} from "@components";
import { Article } from "@interfaces/Article";
import { getPosts } from "@lib";

export default function Blog({ posts }: { posts: Article[] }) {
  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <PageTitle>Latest Posts.</PageTitle>
        <PostsOverview posts={posts} />
      </BodyContainer>
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
