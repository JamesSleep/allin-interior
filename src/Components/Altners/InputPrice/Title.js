import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;

const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default ({ title }) => (
  <Container>
    <Text>{title}</Text>
  </Container>
)