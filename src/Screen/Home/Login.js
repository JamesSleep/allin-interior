import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../theme";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo>
            <Image source={require("../../Image/logo.png")} resizeMode="center"/>
          </Logo>
          <Content>
            <Input>
              <SimpleIcon name="user" size={_WIDTH/20} color="gray"/>
              <TextInput placeholder="아이디" placeholderTextColor="gray"/>
            </Input>
            <Input>
              <SimpleIcon name="lock" size={_WIDTH/20} color="gray"/>
              <TextInput placeholder="비밀번호" placeholderTextColor="gray" secureTextEntry/>
            </Input>
            <RowView sort="space-between">
              <SignUp><Text size={_WIDTH/23} color={buttonColor}>회원가입</Text></SignUp>
              <SignIn><Text size={_WIDTH/23} color="white">로그인</Text></SignIn>
            </RowView>
            <RowView sort="space-between">
              <Line/><Text size={_WIDTH/30} color="gray">간편로그인</Text><Line/>
            </RowView>
            <RowView sort="center">
              <SocialLogin>
                <SocialIcon source={require('../../Image/kakao.png')}/>
                <Text size={_WIDTH/24} color="black">카카오톡</Text>
              </SocialLogin>
              <SocialLogin>
                <SocialIcon source={require('../../Image/naver.png')}/>
                <Text size={_WIDTH/24} color="black">네이버</Text>
              </SocialLogin>
            </RowView>
            <RowView sort="center">
              <Text size={_WIDTH/30} color="black">아이디찾기</Text>
              <Line2/>
              <Text size={_WIDTH/30} color="black">비밀번호 찾기</Text>
            </RowView>
          </Content>
        </Container>
    </TouchableWithoutFeedback>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;
const Logo = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: 70%;
  height: 70%;
`;
const Content = styled.View`
  flex: 5;
  padding: 0% 7%;
`;
const Input = styled.View`
  height: 15%;
  margin: 1% 0%;
  padding-left: 2%;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: gray;
  border-radius: 5px;
`;
const TextInput = styled.TextInput`
  margin-left: 5%;
  font-size: ${_WIDTH/30}px;
`;
const RowView = styled.View`
  height: 15%;
  flex-direction: row;
  justify-content: ${props=>props.sort};
  align-items: center;
`;
const SignUp = styled.TouchableOpacity`
  width: 48%;
  height: 90%;
  border-width: 1px;
  border-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
const SignIn = styled.TouchableOpacity`
  width: 48%;
  height: 90%;
  border-radius: 5px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  margin: 0% 2%;
  font-size: ${props=>props.size}px;
  color: ${props=>props.color};
`;
const Line = styled.View`
  width: 35%;
  border-width: 1px;
  border-color: gray;
`;
const Line2 = styled.View`
  height: 20%;
  border-width: 1px;
  border-color: gray;
`;
const SocialLogin = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const SocialIcon = styled.Image`
  width: ${_WIDTH/7}px;
  height: ${_WIDTH/7}px;
`;

export default Login;