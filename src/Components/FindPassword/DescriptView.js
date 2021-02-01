import React from "react";
import styled from "styled-components/native";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const IconView = styled.View`
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.Text`
  font-size: 13px;
  color: #999999;
  margin-bottom: 12px;
  text-align: center;
`;

export default () => (
  <Container>
    <IconView>
      <MaterialCI name="lock-outline" size={120} color={"#ff7675"} />
    </IconView>
    <Title>비밀번호 찾기</Title>
    <Description>
      가입한 계정의 전화번호를 입력해주세요{"\n"}
      '-' 빼고 입력해주세요
    </Description>
  </Container>
)