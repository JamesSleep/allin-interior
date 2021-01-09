import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../../common/theme";
import Head from "../../../../Components/RequestResult/Head";
import Content from "../../../../Components/RequestResult/Content";
import Footer from "../../../../Components/RequestResult/Footer";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
  padding: 0px 35px;
`;

export default ({ navigation, data }) => (
  <Container>
    <Head />
    <Content data={data} />
    <Footer
      navigation={navigation}
      option={"build"}
    />
  </Container>
)