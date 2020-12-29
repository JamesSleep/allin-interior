import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../../common/theme";

const Text = styled.Text`
  font-size: ${_WIDTH/24}px;
  font-weight: bold;
`;

export default ({ children }) => (
  <Text>{children}</Text>
)