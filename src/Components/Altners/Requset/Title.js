import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export default ({ children }) => (
  <Title>{children}</Title>
)