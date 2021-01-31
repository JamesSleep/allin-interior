import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../../common/theme";
import Header from "../../../../Components/JoinType/Header";
import CardSwiper from "../../../../Components/JoinType/CardSwiper";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation }) => (
  <Container>
    <Header navigation={navigation} />
    <CardSwiper navigation={navigation} />
  </Container>
) 