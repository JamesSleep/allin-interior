import React, { useState, useEffect } from "react";
import { backgroundColor, _WIDTH, buttonColor, nonActive, _HEIGHT } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, SafeAreaView, StyleSheet, TextInput, Platform, ActionSheetIOS, Modal, Alert, AsyncStorage } from "react-native";
import TextContainer from "../../Components/SignUp/TextContainer";
import { Picker } from "@react-native-community/picker";
import Adress from "../../Components/SignUp/Adress";
import { SignUpAPI } from "../../../api";

const joinInsert = [
  { value: "userId", title: "아이디", subTitle: "띄어쓰기 없이 영/숫자 6~10자" },
  { value: "password", title: "비밀번호", subTitle: "6~15자의 영문 대소문자, 숫자 및 특수문자 포함", password: true },
  { value: "password2", title: "비밀번호 확인", password: true},
  { value: "userName", title: "이름"},
  { value: "phoneNumber", title: "휴대폰"},
  { value: "birthDay", title: "생년월일"},
  { value: "nickName", title: "닉네임"},
];

const emailList = ["선택해주세요","naver.com","hanmail.net","gmail.com","직접입력"];

const SignUp2 = ({ navigation }) => {
  const [selectedEmail, setSelectedEmail] = useState(emailList[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [signUpData, setSignUpData] = useState({
    userId : "", password: "", password2: "", email: "", userName: "",
    phoneNumber: "", birthDay: "", nickName: "", zipCode: "",
    address1: "", address2: "",
  });
  const openAction = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: emailList,
        destructiveButtonIndex: 4,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        setSelectedEmail(emailList[buttonIndex]);
      }
    )
  };
  const getChangeText = ( property, value ) => {
    setSignUpData({...signUpData, [property]: value});
  }
  const postAPI = async () => {
    const postData = JSON.stringify({
      "userId": signUpData.userId,
      "password": signUpData.password,
      "email": signUpData.email,
      "userName": signUpData.userName,
      "phoneNum": signUpData.phoneNumber,
      "birthday": signUpData.birthDay,
      "nickName": signUpData.nickName,
      "zipCode": signUpData.zipCode,
      "address1": signUpData.address1,
      "address2": signUpData.address2,
    });
    if(await SignUpAPI(postData)) {
      //메시지 컴포넌트 생성, asyncStorage 토큰정보저장
      Alert.alert("회원가입 성공");
      await AsyncStorage.setItem("loginInfo", signUpData.userId);
      navigation.navigate("MainRouter"); // 메인페이지로 변경
    } else {
      //회원가입 실패 유효성 검사 추가
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Icon 
            name="angle-left" 
            size={_WIDTH/12} 
            onPress={()=>navigation.navigate("AuthPhoneNum")}
            style={{ position: "absolute", left: 0 }}
          />
          <Text style={{ fontSize: _WIDTH/22, }}>회원가입</Text>
        </View>
        <ScrollView>
          {/* 회원정보입력 */}
          { joinInsert.map((info, index) => {
            if(index < 3) {
              return ( 
                <TextContainer 
                  key={index} 
                  title={info.title} 
                  subTitle={info.subTitle} 
                  password={info.password}
                  value={info.value}
                  setValue={getChangeText}
                />
              )
            }
          })}   
          {/* 이메일 설정 */}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>이메일</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <TextInput 
                style={{ width: "100%", height: _WIDTH/10, borderBottomWidth: 0.5, fontSize: _WIDTH/33 }} 
                onChangeText={text=>setSignUpData({...signUpData, email: text})}
              />
              {/* <Text style={{ width: "6%", fontSize: _WIDTH/23, textAlign: "center", paddingBottom: 7 }}>@</Text>
              { Platform.OS === "ios" ? (
                <TextInput
                  editable={false}
                  style={{ width: "47%", height: "100%", left: 5, borderBottomWidth: 0.5, fontSize: _WIDTH/33, fontWeight: "200" }} 
                  value={selectedEmail}
                  onTouchEnd={openAction}
                />
              ) : (
  
                <View style={{ width: "47%", height: "100%", borderBottomWidth: 0.5, }}>
                  <Picker 
                    style={{width: "120%", left: -10, top:5, transform: [{scaleX: 0.85}, {scaleY: 0.85}] }}
                    itemStyle={{ fontSize : 40 }}
                    selectedValue={selectedEmail}
                    onValueChange={(value, index) => setSelectedEmail(value)} 
                  >
                    { emailList.map((item, index) => (
                      <Picker.Item key={index} label={item} value={item} />
                    ))}
                  </Picker>
                </View>
              )} */}
            </View>
          </View>
          {/* 회원정보입력 */}
          { joinInsert.map((info, index) => {
            if(index > 2) {
              return (
                <TextContainer 
                  key={index} 
                  title={info.title} 
                  subTitle={info.subTitle} 
                  password={info.password} 
                  value={info.value}
                  setValue={getChangeText}
                />
              )
            }
          })}
          {/* 우편번호 검색 */}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>우편번호</Text>
            <View style={{ width: "100%", height: _WIDTH/10, flexDirection: "row", borderBottomWidth: 0.5, alignItems: "center" }}>
              <TextInput 
                editable={false}
                style={{ width: "70%"}}
                value={signUpData.zipCode}
              />
              <TouchableOpacity
                style={{ width: "100%", backgroundColor: buttonColor, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20 }}
                onPress={()=>setModalVisible(true)}
              >
                <Text style={{ color: "white", fontSize: _WIDTH/32 }}>우편번호검색</Text>
              </TouchableOpacity>
              <Modal animationType="slide" visible={modalVisible}>
                <Adress window={setModalVisible} info={signUpData} setInfo={setSignUpData} />
              </Modal>
            </View>
          </View>
          {/* 상세주소 입력 */}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>주소</Text>
            <TextInput 
              style={{ width: "100%", height: _WIDTH/10, borderBottomWidth: 0.5, marginBottom: 10, }}
              placeholder="주소"
              placeholderTextColor="gray"
              editable={false}
              value={signUpData.address1}
            />
            <TextInput 
              style={{ width: "100%", height: _WIDTH/10, borderBottomWidth: 0.5, }}
              placeholder="상세주소"
              placeholderTextColor="gray"
            />
          </View>
        </ScrollView>
        <View style={{ width: "100%", height: _WIDTH/8, justifyContent: "center" }} >
          <TouchableOpacity
            style={{ width: "100%", height: _WIDTH/12, backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
            onPress={()=>postAPI()}
          >
            <Text style={{ fontSize: _WIDTH/30, color: "white" }}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: _HEIGHT/20,
  },
  textContainer: {
    flex: 1,
    marginBottom: 15,
    alignItems: "center",
  },
  titleText: {
    width: "100%",
    textAlign: "left",
    fontSize: _WIDTH/30,
    fontWeight: "500"
  },
})

export default SignUp2;