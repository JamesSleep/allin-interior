import React, { useState } from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor, nonActive, _HEIGHT } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Modal } from "react-native";
import SelectPicker from "../../Components/SignUp/SelectPicker";
import Adress from "../../Components/SignUp/Adress";
import { CheckInput } from "../../Components/SignUp/CheckInput";

const SignUp2 = ({ navigation }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    id: "", password1: "", password2: "", 
    email1: "",  email2: "", phone: "", 
    birthday: "", nickName: "", zipCode: "", 
    address1: "", address2: "",
  });
  const [postModal, setPostModal] = useState(false);
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
        <TextInput 
          onChangeText={text=>setSignUpInfo({...signUpInfo, id: text})}
        />
        { CheckInput("id",signUpInfo) ? null 
          : ( <CheckText>아이디를 확인해주세요</CheckText> )}
        <RowView>
          <Title>비밀번호</Title>
          <Condition>(6~15자의 영문 대소문자, 숫자 및 특수문자 포함)</Condition>
        </RowView>
        <TextInput 
          secureTextEntry 
          onChangeText={text=>setSignUpInfo({...signUpInfo, password1: text})}
        />
        { CheckInput("password1",signUpInfo) ? null 
          : ( <CheckText>비밀번호를 확인해주세요</CheckText> )}
        <Title>비밀번호 확인</Title>
        <TextInput 
          secureTextEntry 
          onChangeText={text=>setSignUpInfo({...signUpInfo, password2: text})}
        />
        { CheckInput("password2",signUpInfo) ? null 
          : ( <CheckText>비밀번호가 일치하지 않습니다</CheckText> )}
        <Title>이메일</Title>
        <Email>
          <EmailInput 
            onChangeText={text=>setSignUpInfo({...signUpInfo, email1: text})}
          />
          <Title>@</Title>
          <EmailSelect>
            <SelectPicker />
          </EmailSelect>
        </Email>
        <Title>휴대폰</Title>
        <TextInput 
          onChangeText={text=>setSignUpInfo({...signUpInfo, phone: text})}
        />
        <Title>생년월일</Title>
        <TextInput 
          onChangeText={text=>setSignUpInfo({...signUpInfo, birthday: text})}
        />
        <Title>닉네임</Title>
        <TextInput 
          onChangeText={text=>setSignUpInfo({...signUpInfo, nickName: text})}
        />
        <Title>우편번호</Title>
        <Post>
          <PostText>{signUpInfo.zipCode}</PostText>
          <TouchableOpacity
            style={{backgroundColor: buttonColor, padding: _WIDTH/60, borderRadius: 25}}
            onPress={()=>setPostModal(!postModal)}
          >
            <Text style={{fontSize: _WIDTH/33, color: "white"}}>우편번호 검색</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            visible={postModal}
          >
            <Adress window={setPostModal} info={signUpInfo} setInfo={setSignUpInfo}/>
          </Modal> 
        </Post>
        <Title>주소</Title>
        <TextInput 
          editable={false}
          placeholder="주소" 
          placeholderTextColor={nonActive} 
          value={signUpInfo.address1.length > 0 ? signUpInfo.address1 : null}
          onChangeText={text=>setSignUpInfo({...signUpInfo, zipCode: text})}
        />
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
  color: black;
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
  align-items: center;
`;
const EmailInput = styled.TextInput`
  width: 48%;
  height: ${_HEIGHT*0.064}px;
  margin-bottom: 5%;
  font-size: ${_WIDTH/28}px;
  border-bottom-width: ${_WIDTH/250}px;
  border-bottom-color: ${nonActive};
`;
const EmailSelect = styled.View`
  width: 48%;
  height: ${_HEIGHT*0.064}px;
  margin-bottom: 5%;
  border-bottom-width: ${_WIDTH/250}px;
  border-bottom-color: ${nonActive};
`;
const Post = styled.View`
  width: 100%;
  height: ${_HEIGHT*0.064}px;
  margin-bottom: 5%;
  border-bottom-width: ${_WIDTH/250}px;
  border-bottom-color: ${nonActive};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PostText = styled.Text`
  font-size: ${_WIDTH/28}px;
`;
const CheckText = styled.Text`
  font-size: ${_WIDTH/32}px;
  color: ${buttonColor};
  margin-top: -${_WIDTH/50}px;
  margin-bottom: ${_WIDTH/30}px;
`;

export default SignUp2;