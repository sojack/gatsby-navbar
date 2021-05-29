import * as React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 5em;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledH1>Home</StyledH1>
      <h2>Spaghetti is life</h2>
      <p>Main page of spaghetti</p>
    </Layout>
  );
};

export default IndexPage;
