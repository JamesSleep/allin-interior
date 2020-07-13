import React, { useState } from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor, nonActive, _HEIGHT } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import SelectEmail from "../../Components/SignUp/SelectEmail";

const SignUp2 = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Head>
        <Icon 
          name="angle-left" 
          size={_WIDTH/12} 
          style={{position: "absolute", left: 0}}
          onPress={()=>navigation.goBack()}
        />
        <HeadTitle>회원가입</HeadTitle>
      </Head>
      <ScrollView
        style={{width: "100%"}}
      >
        <RowView>
          <Title>아이디</Title>
          <Condition>(띄어쓰기 없이 영/숫자 6~10자)</Condition>
        </RowView>
        <TextInput />
        <RowView>
          <Title>비밀번호</Title>
          <Condition>(6~15자의 영문 대소문자, 숫자 및 특수문자 포함)</Condition>
        </RowView>
        <TextInput secureTextEntry/>
        <Title>비밀번호 확인</Title>
        <TextInput secureTextEntry />
        <Title>이메일</Title>
        <Email>
          <EmailInput />
          <Title>@</Title>
          <EmailInput editable={false} onTouchEnd={setModal(true)}/>
          {modal ? <SelectEmail visible={modal} setVisible={setModal}/> : null}
        </Email>
        <Title>휴대폰</Title>
        <TextInput />
        <Title>생년월일</Title>
        <TextInput />
        <Title>닉네임</Title>
        <TextInput />
        <Title>우편번호</Title>
        <TextInput />
        <Title>주소</Title>
        <TextInput placeholder="주소" placeholderTextColor={nonActive} />
        <TextInput placeholder="상세주소" placeholderTextColor={nonActive} />
      </ScrollView>
      <ButtonView>
        <TouchableOpacity
          style={{width: "100%", height: "85%", backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center"}}
        >
          <Text style={{color: "white", fontSize: _WIDTH/26, textAlign: "center"}}>다음</Text>
        </TouchableOpacity>
      </ButtonView>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
  padding: 3% 6% 1% 6%;
`;
const Head = styled.View`
  width: 100%;
  height: 5%;
  margin-bottom: 7%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeadTitle = styled.Text`
  font-size: ${_WIDTH/22}px;
`;
const ButtonView = styled.View`
  width: 100%;
  height: 10%;
  margin-top: 1%;
  justify-content: center;
`;
const RowView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  height: ${_HEIGHT*0.064}px;
  margin-bottom: 5%;
  font-size: ${_WIDTH/28}px;
  border-bottom-width: ${_WIDTH/250}px;
  border-bottom-color: ${nonActive};
`;
const Title = styled.Text`
  font-size: ${_WIDTH/27}px;
  font-weight: bold;
  margin-right: 5px;
`;
const Condition = styled.Text`
  font-size: ${_WIDTH/30}px;
  color: ${nonActive};
`;
const Email = styled.View`
  width: 100%;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center
`;
const EmailInput = styled.TextInput`
  width: 48%;
  height: ${_HEIGHT*0.064}px;
  margin-bottom: 5%;
  font-size: ${_WIDTH/28}px;
  border-bottom-width: ${_WIDTH/250}px;
  border-bottom-color: ${nonActive};
`;

export default SignUp2;