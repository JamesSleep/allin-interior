import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 14px;
  color: gray;
`;

export default ({ text }) => (
  <Text>{text}</Text>
)