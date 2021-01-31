import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import { Platform } from "react-native";

const Container = styled.View`
  padding: 0px 25px;
`;

const Area = styled.View`
  margin-bottom: 40px;
`;

const TextInput = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  font-size: 15px;
  height: ${Platform.OS === "ios" ? 35: 40}px;
`;

export default ({ info, setInfo }) => (
  <Container>
    <Area>
      <Title text="이메일" />
      <TextInput 
        keyboardType="email-address"
        value={info.email}
        onChangeText={text => setInfo({
          ...info,
          email: text
        })}
      />
    </Area>
    <Area>
      <Title text="비밀번호" />
      <TextInput 
        secureTextEntry
        value={info.password}
        onChangeText={text => setInfo({
          ...info,
          password: text
        })}
      />
    </Area>
    <Area>
      <Title text="비밀번호 확인" />
      <TextInput 
        secureTextEntry
        value={info.passwordCheck}
        onChangeText={text => setInfo({
          ...info,
          passwordCheck: text
        })}
      />
    </Area>
  </Container>
)