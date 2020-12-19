import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default ({ children }) => (
  <Title>{children}</Title>
)