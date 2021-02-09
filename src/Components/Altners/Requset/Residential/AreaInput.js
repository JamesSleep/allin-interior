import React from "react";
import styled from "styled-components/native";
import Title from "../Title";

const Container = styled.View`
  margin-top: 20px;
`;

const InputView = styled.View`
  width: 40%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: gray;
`;

const Text = styled.Text`
  font-size: 14px;
`;

const TextInput = styled.TextInput`
  width: 40px;
  font-size: 15px;
  margin-right: 5px;
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>공간 넓이</Title>
    <InputView>
      <TextInput 
        maxLength={3}
        keyboardType="number-pad"
        onChangeText={text => setValue({...value, squareFeet: text})}
      />
      <Text>평</Text>
    </InputView>
  </Container>
)