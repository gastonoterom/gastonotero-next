import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Wrapper,
  Header,
  Footer,
  ArticleComponent,
  BodyContainer,
} from "@components";
import { Article } from "@interfaces/article";
import { getPost, getPostsPaths } from "@lib";
import { serialize } from "next-mdx-remote/serialize";
import { parseImages } from "@lib/files-api";
import Head from "next/head";

export default function Post({ post }: { post: Article }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Wrapper>
        <Header />
        <BodyContainer>
          <ArticleComponent article={post} />
        </BodyContainer>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getPostsPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Article = getPost(params.id as string);

  post.content = parseImages(post.content);
  post.mdx = await serialize(post.content);

  return {
    props: { post },
  };
};
