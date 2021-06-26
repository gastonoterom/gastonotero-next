import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Wrapper,
  Header,
  Footer,
  ArticleComponent,
  BodyContainer,
} from "@components";
import { Article } from "@interfaces/Article";
import { getPost, getPostsPaths } from "@lib";
import { serialize } from "next-mdx-remote/serialize";

export default function Post({ post }: { post: Article }) {
  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <ArticleComponent article={post} />
      </BodyContainer>
      <Footer />
    </Wrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getPostsPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Article = getPost(params.id);
  post.mdx = await serialize(post.content);

  return {
    props: { post },
  };
};
