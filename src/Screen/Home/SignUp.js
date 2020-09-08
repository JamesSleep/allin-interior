import React, { useState } from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor, _HEIGHT } from "../../common/theme";
import { Text, Alert, Platform, ToastAndroid, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";

const SignUp = ({navigation}) => {
  const [check, setCheck] = useState([false, false, false, false, false]);
  const post = () => {
    if(check[0] && check[1] && check[2]) {
    //check 4,5 푸쉬알림 설정
     
    //회원가입페이지 넘어가기
      navigation.navigate("AuthPhoneNum");  
    } else {
      if(Platform.OS === "android") 
        ToastAndroid.show("필수 이용약관에 동의해주세요", ToastAndroid.SHORT);
      else
        Alert.alert("", "필수 이용약관에 동의해주세요", [{text:"확인"}]);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }} >
    <Container>
      <Head>
        <Icon 
          name="angle-left" 
          size={_WIDTH/12} 
          onPress={()=>navigation.navigate("Login")}
          style={{position: "absolute", left: 0}}
        />
        <HeadTitle>회원가입</HeadTitle>
      </Head>
      <TitleContainer>
        <Title>이용약관 동의</Title>
        <SubText>아래의 약관에 동의하신 후 서비스를 이용해주세요</SubText>
      </TitleContainer>
      <Content>
        <RowView>
          <Ionic 
            name={
              check[0] && check[1] && check[2] && check[3] && check[4] ?
              "checkbox-outline" : "square-outline"
            } 
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              item => check[0] && check[1] && check[2] && check[3] && check[4] ?
                item = false : item = true
            ))}
          />
          <AllAgree>전체동의</AllAgree>
        </RowView>
        <Line />
        <RowView>
          <Ionic 
            name={ check[0] ? "checkbox-outline" : "square-outline" }
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              (item, index)=> index === 0 ? !item : item
            ))}
          />
          <Agree>위치기반 서비스 약관 동의 (필수)</Agree>
        </RowView>
        <RowView>
          <Ionic 
            name={ check[1] ? "checkbox-outline" : "square-outline" }
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              (item, index)=> index === 1 ? !item : item
            ))}
          />
          <Agree>개인정보 처리방침 동의 (필수)</Agree>
        </RowView>
        <RowView>
          <Ionic 
            name={ check[2] ? "checkbox-outline" : "square-outline" }
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              (item, index)=> index === 2 ? !item : item
            ))}
          />
          <Agree>올인 이용약관 동의 (필수)</Agree>
        </RowView>
        <RowView>
          <Ionic 
            name={ check[3] ? "checkbox-outline" : "square-outline" }
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              (item, index)=> index === 3 ? !item : item
            ))}
          />
          <Agree>올인 혜택 알림동의 (선택)</Agree>
        </RowView>
        <RowView>
          <Ionic 
            name={ check[4] ? "checkbox-outline" : "square-outline" }
            size={_WIDTH/23} 
            onPress={()=>setCheck(check.map(
              (item, index)=> index === 4 ? !item : item
            ))}
          />
          <Agree>알림 푸쉬 허용 (선택)</Agree>
        </RowView>
      </Content>
      <TouchableOpacity 
        style={{backgroundColor: buttonColor, height: _WIDTH/12, borderRadius: 5, justifyContent: "center"}}
        onPress={()=>post()}
      >
        <Text style={{color: "white", fontSize: _WIDTH/27, textAlign: "center"}}>시작하기</Text>
      </TouchableOpacity>
    </Container>
    </SafeAreaView>
  )
}

const Container = styled.View`
  flex: 1;
  padding: 10px 25px;
  background: ${backgroundColor};
`;
const Head = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeadTitle = styled.Text`
  font-size: ${_WIDTH/22}px;
`;
const TitleContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  margin-bottom: 13px;
  font-size: ${_WIDTH/21}px;
  font-weight: bold;
`;
const SubText = styled.Text`
  font-size: ${_WIDTH/35}px;
`
const Content =styled.View`
  flex: 8;
`;
const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const AllAgree = styled.Text`
  margin-left: 10px;
  font-size: ${_WIDTH/30}px;
  font-weight: bold;
`;
const Agree = styled.Text`
  margin-left: 10px;
  font-size: ${_WIDTH/33}px;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  background-color: black;
`;

export default SignUp;