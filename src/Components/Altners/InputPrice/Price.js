import React from "react";
import styled from "styled-components/native";
import Title from "./Title";

const Container = styled.View`
  margin-bottom: 30px;
`;

const TextInput = styled.TextInput`
  height: 50px;
  padding: 0px 15px;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 10px;
`;

export default ({ value, setValue }) => (
  <Container>
    <Title title={"총 결제금액"} />
    <TextInput 
      value={value.price}
      keyboardType="number-pad"
      onChangeText={text => setValue({...value, price: text})}
      placeholder="예) 1,000,000원"
      placeholderTextColor="gray"
    />
  </Container>
)