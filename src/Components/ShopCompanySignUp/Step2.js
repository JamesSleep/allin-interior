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
      <Title text="대표자 성함" />
      <TextInput 
        value={info.ceoName}
        onChangeText={text => setInfo({
          ...info,
          ceoName: text
        })}
      />
    </Area>
    <Area>
      <Title text="휴대폰번호" />
      <TextInput 
        keyboardType="number-pad"
        value={info.ceoPhone}
        onChangeText={text => setInfo({
          ...info,
          ceoPhone: text
        })}
      />
    </Area>
    <Area>
      <Title text="회사명" />
      <TextInput 
        value={info.businessName}
        onChangeText={text => setInfo({
          ...info,
          businessName: text
        })}
      />
    </Area>
    <Area>
      <Title text="회사 전화번호" />
      <TextInput 
        keyboardType="number-pad"
        value={info.businessPhone}
        onChangeText={text => setInfo({
          ...info,
          businessPhone: text
        })}
      />
    </Area>
    <Area>
      <Title text="사업자번호" />
      <TextInput 
        keyboardType="number-pad"
        value={info.businessNumber}
        onChangeText={text => setInfo({
          ...info,
          businessNumber: text
        })}
      />
    </Area>
  </Container>
)