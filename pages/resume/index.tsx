import React from "react";
import {
  Wrapper,
  Header,
  Footer,
  PageTitle,
  PageSubTitle,
  BodyContainer,
} from "@components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";
import { getResume } from "@lib";
import Head from "next/head";

interface Props {
  resumeMdx: MDXRemoteSerializeResult;
}

export default function Resume({ resumeMdx }: Props) {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Wrapper>
        <Header />
        <BodyContainer>
          <PageTitle size={40}>Contact Me At</PageTitle>
          <PageSubTitle size={25}>mail@gastonotero.com</PageSubTitle>
          <MDXRemote {...resumeMdx} />
        </BodyContainer>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resume = getResume();
  const resumeMdx = await serialize(resume);

  return { props: { resumeMdx } };
};
