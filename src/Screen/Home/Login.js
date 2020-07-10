import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor, _HEIGHT } from "../../../theme";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
              <TouchableOpacity
                style={{
                  width: _WIDTH*0.41,
                  height: _HEIGHT*0.08,
                  borderWidth: 1,
                  borderColor: buttonColor,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text size={_WIDTH/23} color={buttonColor}>회원가입</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: _WIDTH*0.41,
                  height: _HEIGHT*0.08,
                  backgroundColor: buttonColor,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text size={_WIDTH/23} color="white">로그인</Text>
              </TouchableOpacity>
            </RowView>
            <RowView sort="space-between">
              <Line/><Text size={_WIDTH/30} color="gray">간편로그인</Text><Line/>
            </RowView>
            <RowView sort="space-around">
              <TouchableOpacity 
                style={{ flexDirection: "row", alignItems: "center", }}
              >
                <SocialIcon source={require('../../Image/kakao.png')}/>
                <Text size={_WIDTH/24} color="black">카카오톡</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{ flexDirection: "row", alignItems: "center", }}
              >
                <SocialIcon source={require('../../Image/naver.png')}/>
                <Text size={_WIDTH/24} color="black">네이버</Text>
              </TouchableOpacity>
              { Platform.OS === "ios" ? (
                <TouchableOpacity 
                style={{ flexDirection: "row", alignItems: "center", }}
                >
                  <SocialIcon source={require('../../Image/naver.png')}/>
                  <Text size={_WIDTH/24} color="black">APPLE</Text>
                </TouchableOpacity>
                ) : null }
            </RowView>
            <RowView sort="center">
              <TouchableOpacity>
                <FindText>아이디찾기</FindText>
              </TouchableOpacity>
              <Line2/>
              <TouchableOpacity>
                <FindText>비밀번호 찾기</FindText>
              </TouchableOpacity>
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
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: ${props=>props.sort};
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
  margin: 0% 2% 0% 2%;
  border-width: 1px;
  border-color: gray;
`;
const SocialIcon = styled.Image`
  width: ${_WIDTH/7}px;
  height: ${_WIDTH/7}px;
`;
const FindText = styled.Text`
  font-size : ${_WIDTH/30}px;
`;

export default Login;