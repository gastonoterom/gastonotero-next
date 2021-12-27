import React from "react";
import { Wrapper, Header, Footer, PageTitle, ProjectsOverview } from "@components";
import { BodyContainer } from "@components";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Article } from "@interfaces/article";
import { getProjects } from "@lib/files-api";


export default function Projects({ projects }: { projects: Article[] }) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Wrapper>
        <Header />
        <BodyContainer>
          <PageTitle>My Projects.</PageTitle>
          <ProjectsOverview projects={projects} />
        </BodyContainer>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Article[] = await getProjects();

  return {
    props: { projects },
  };
};
