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
import { serialize } from "next-mdx-remote/serialize";
import { getProject, getProjectsPaths, parseImages } from "@lib/files-api";
import Head from "next/head";

export default function Project({ project }: { project: Article }) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Wrapper>
        <Header />
        <BodyContainer>
          <ArticleComponent article={project} />
        </BodyContainer>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getProjectsPaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project: Article = getProject(params.id as string);

  project.content = parseImages(project.content);
  project.mdx = await serialize(project.content);

  return {
    props: { project },
  };
};
