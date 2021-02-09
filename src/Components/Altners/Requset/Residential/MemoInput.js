import React from "react";
import styled from "styled-components/native";
import Title from "../Title";

const Container = styled.View`
  margin-top: 25px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 120px;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  padding: 10px 10px;
`;
 
export default ({ value, setValue }) => (
  <Container>
    <Title>요청사항 (선택)</Title>
    <TextInput 
      multiline
      scrollEnabled={false}
      textAlignVertical="top"
      value={value.memo}
      onChangeText={text=>setValue({...value, memo: text})}
    />
  </Container>
)