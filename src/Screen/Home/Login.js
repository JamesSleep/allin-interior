import React, { useState, useEffect } from "react";
import { 
  TouchableWithoutFeedback, Keyboard, Platform, 
  View, StyleSheet, Text,  Image, TextInput, Alert, ToastAndroid 
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { LoginAPI } from "../../common/api";
import ActionCreator from "../../redux/action";
import { backgroundColor, _WIDTH, _HEIGHT, buttonColor } from "../../common/theme";
import { setUserId } from "../../redux/action/userAction";

const Login = ({ navigation, setSignUpType }) => {
  const [saveID, setSaveID] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(false);

  useEffect(()=>{
    checkLoginData();
  },[]);
  
  const checkLoginData = async () => {
    const loginData = JSON.parse(
      await AsyncStorage.getItem("loginData")
    );
    if(loginData) {
      loginData.autoLogin &&
      navigation.reset({
        index: 0,
        routes: [{name: "MainRouter"}]
      });
      loginData.saveID &&
      setUserId(loginData.userId);
    }
  }
  const postAPI = async () => {
    if(!userId || !password) {
      Platform.OS === "android" ?
        ToastAndroid.show("회원정보를 확인해주세요", 2) :
        Alert.alert("회원정보를 확인해주세요");
      return;
    }
    const postData = JSON.stringify({
      "userId": userId,
      "password": password,
      "type": isCompany
    });
    const response = await LoginAPI(postData);
    if(response[0]) {
      //need fix getting token
      const loginData = JSON.stringify({
        "userId": userId,
        "password": password,
        "saveID": saveID,
        "autoLogin": autoLogin,
        "type": isCompany
      });
      await AsyncStorage.setItem("loginData", loginData);
      navigation.reset({
        index: 0,
        routes: [{name: "MainRouter"}]
      });
    } else {
      //메시지 컴포넌트 생성
      Platform.OS === "android" ?
        ToastAndroid.show("로그인정보가 일치하지않습니다", 2) :
        Alert.alert("로그인정보가 일치하지않습니다");
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* 로고 */}
        <View style={styles.logoContainer}>
          <Image 
            style={{ width: "50%", height: "55%" }}
            source={require("../../Image/logo.png")} 
          />
        </View>
        <View style={styles.loginContainer}>
          {/* 로그인정보입력 */}
          <View style={styles.findTextContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("FindMemberId")}>
              <Text style={styles.findInfoText}>아이디 찾기</Text>
            </TouchableOpacity>
            <Text> / </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("FindMemberPW")}>
              <Text style={styles.findInfoText}>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputTextView}>
            <SimpleIcon style={{ marginRight: 15 }} name="user" size={_WIDTH/22} color="gray" />
            <TextInput 
              placeholder="아이디" 
              placeholderTextColor="gray" 
              value={userId}
              style={{ width: "100%", fontSize: _WIDTH/30 }}
              onChangeText={text=>setUserId(text)}
            />
          </View>
          <View style={styles.inputTextView}>
            <SimpleIcon style={{ marginRight: 15 }} name="lock" size={_WIDTH/22} color="gray" />
            <TextInput 
              placeholder="비밀번호" 
              placeholderTextColor="gray" 
              secureTextEntry
              style={{ width: "100%", fontSize: _WIDTH/30 }}
              onChangeText={text=>setPassword(text)}
            />
          </View>
          <View style={styles.autoLoginContainer}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
              onPress={()=>setAutoLogin(state => !state)}
            >
              <Ionicons 
                name={autoLogin? "checkmark-circle" : "checkmark-circle-outline"} 
                size={_WIDTH/20} 
                color={autoLogin? buttonColor : "gray"}
              />
              <Text style={{ fontSize: _WIDTH/32, marginRight: 15, }}>자동로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
              onPress={()=>setSaveID(state => !state)}
            >
              <Ionicons 
                name={saveID? "checkmark-circle" : "checkmark-circle-outline"} 
                size={_WIDTH/20} 
                color={saveID? buttonColor : "gray"} 
              />
              <Text style={{ fontSize: _WIDTH/32, marginRight: 10 }}> 아이디저장 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={()=>setIsCompany(state => !state)}
            >
              <Ionicons 
                name={isCompany? "checkmark-circle" : "checkmark-circle-outline"} 
                size={_WIDTH/20} 
                color={isCompany? buttonColor : "gray"} 
              />
              <Text style={{ fontSize: _WIDTH/32 }}> 업체회원 </Text>
            </TouchableOpacity>
          </View>
          {/* 버튼뷰 */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.joinButton} 
              onPress={()=>{
                setSignUpType("member");
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.joinText}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={()=>postAPI()}>
              <Text style={styles.loginText}>로그인</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.officeJoin} 
            onPress={()=>{
              setSignUpType("company");
              navigation.navigate("SignUp");
            }}
          >
            <Text style={{ fontSize: _WIDTH/28, color: "black" }}>업체 회원가입</Text>
          </TouchableOpacity>
        </View>
        {/* 소셜로그인 */}
        <View style={styles.socialContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.line}/>
            <Text style={styles.lineText}>간편로그인</Text>
            <View style={styles.line}/>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconView}>
              <Image style={styles.iconImg} source={require("../../Image/kakao.png")} />
              <Text style={{ fontSize: _WIDTH/27, color: "#FBE443" }}>카카오톡</Text>
            </View>
            <View style={styles.iconView}>
              <Image style={styles.iconImg} source={require("../../Image/naver.png")} />
              <Text style={{ fontSize: _WIDTH/27, color: "#2DBE34" }}>네이버</Text>
            </View>
            { Platform.OS === "ios" ? (
              <View style={styles.iconView}>
                <Image style={{ width: _WIDTH/10, height: _WIDTH/10 }} source={require("../../Image/apple.png")} />
                <Text style={{ fontSize: _WIDTH/27, color: "black" }}> APPLE</Text>
              </View>
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1,  backgroundColor: backgroundColor, paddingHorizontal: _WIDTH/17, },
  logoContainer: { 
    flex: 4, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  loginContainer: { 
    flex: 4, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  findTextContainer: { 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignItems: "center" 
  },
  findInfoText: { 
    fontSize: _WIDTH/32, 
    textAlign: "right", 
    marginVertical: 2, 
  },
  inputTextView: {
    width: "100%",
    height: _HEIGHT/17,
    marginVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
  },
  autoLoginContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: { 
    width: "100%", 
    height: _HEIGHT/18, 
    flexDirection: "row", 
    justifyContent: "space-between",
    marginVertical: 10,
  },
  joinButton: { 
    width: _WIDTH*0.43, 
    height: "100%",
    borderWidth: 0.5,
    borderColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  joinText: { 
    fontSize: _WIDTH/26, 
    color: buttonColor, 
  },
  loginButton: { 
    width: _WIDTH*0.43, 
    height: "100%",
    backgroundColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: { 
    fontSize: _WIDTH/26, 
    color: "white", 
  },
  officeJoin: {
    width: _WIDTH*0.31,
    height: _WIDTH/13,
    borderWidth: 0.5,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  socialContainer: { 
    flex: 2, 
  },
  lineContainer: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  line: { 
    width: "35%", 
    height: 1, 
    borderWidth: 0.5, 
    opacity: 0.7, 
    borderColor: "gray" 
  },
  lineText: { 
    fontSize: _WIDTH/30, 
    color: "gray" 
  },
  iconContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconView: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconImg: {
    width: _WIDTH/7,
    height: _WIDTH/7,
  },
});

function mapStateToProps(state) {
  return {
    screen: state.screen,
    user_id: state.user_id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSignUpType: (screen) => {
      dispatch(ActionCreator.setSignUp(screen));
    },
    setUserId: (user_id) => {
      dispatch(ActionCreator.setUserId(user_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);