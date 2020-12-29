import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  flex: 8;
  border-top-width: 0.3px;
  border-top-color: gray;
  border-bottom-width: 0.3px;
  border-bottom-color: gray;
  padding: 30px 10px;
  justify-content: space-around;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  width: 50%;
  font-size: ${_WIDTH / 28}px;
  color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.Text`
  width: 50%;
  font-size: ${_WIDTH / 28}px;
  font-weight: 300;
`;

export default ({ data }) => (
  <Container>
    { data.map((obj, index) => (
      <Row key={index}>
        <Title>{obj.title}</Title>
        <Content>{obj.value}</Content>
      </Row>
    ))}
  </Container>
)