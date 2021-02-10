import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/RequestResult/Header";
import { backgroundColor } from "../../../common/theme";
import Content from "../../../Components/Altners/RequestResult/Content";
import Footer from "../../../Components/Altners/RequestResult/Footer";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
  padding: 0px 35px;
`;

export default ({ navigation, data, option }) => (
  <Container>
    <Header />
    <Content data={data} />
    <Footer navigation={navigation} option={option} />
  </Container>
)