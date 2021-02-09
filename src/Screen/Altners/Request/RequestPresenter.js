import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor } from "../../../common/theme";
import RequestMenu from "../../../Components/Altners/Requset/RequestMenu";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation, screen }) => (
  <Container>
    <Header 
      navigation={navigation}
      screen={screen}
    />
    <RequestMenu navigation={navigation} />
  </Container>
)