import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../common/theme";
import Search from "../../../Components/ShoppingHome/Search";
import ShoppingHomeTopTab from "../../../Router/Shopping/ShoppingHomeTopTab";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation }) => (
  <Container>
    <Search navigation={navigation} />
    <ShoppingHomeTopTab />
  </Container>
) 