import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor } from "../../../common/theme";
import FilterRow from "../../../Components/Altners/Interior/FilterRow";

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
    <FilterRow />
  </Container>
)