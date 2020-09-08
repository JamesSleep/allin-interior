import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TextInput, ActionSheetIOS, Modal, Alert, AsyncStorage, Image, Platform, ToastAndroid } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor, _HEIGHT } from "../../common/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextContainer from "../../Components/SignUp/TextContainer";
import Adress from "../../Components/SignUp/Adress";
import { SignUpAPI, MemberImage } from "../../common/api";
import ImagePicker from "react-native-image-picker";

const joinInsert = [
  { value: "userId", title: "아이디", subTitle: "띄어쓰기 없이 영/숫자 6~10자" },
  { value: "password", title: "비밀번호", subTitle: "6~15자의 영문 대소문자, 숫자 및 특수문자 포함", password: true },
  { value: "password2", title: "비밀번호 확인", password: true},
  { value: "userName", title: "이름"},
  { value: "phoneNumber", title: "휴대폰"},
  { value: "birthDay", title: "생년월일"},
  { value: "nickName", title: "닉네임"},
];

const options = {
  title: '프로필 사진 선택',
  takePhotoButtonTitle: null,
  chooseFromLibraryButtonTitle: "사진가져오기",
  customButtons: [
    { name: 'delete', title: '사진제거' },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const emailList = ["선택해주세요","naver.com","hanmail.net","gmail.com","직접입력"];

const SignUp2 = ({ navigation }) => {
  const [selectedEmail, setSelectedEmail] = useState(emailList[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [signUpData, setSignUpData] = useState({
    userId : "", password: "", password2: "", email: "", userName: "",
    phoneNumber: "", birthDay: "", nickName: "", zipCode: "",
    address1: "", address2: "",
  });
  const [imageData, setImageData] = useState({
    ImageSource: null,
    data: null,
    Image_TAG: "USER_PROFILE"
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
    const formData = [
      { name: "image", filename: "image.png", type: "image/png", data: imageData.data },
      { name: "image_tag", data: imageData.Image_TAG },
      { name: "user_id", data: signUpData.userId },
    ]; 
    const response = await SignUpAPI(postData);
    if(response[0]) {
      const responseImg = MemberImage(formData);
      navigation.reset({
        index: 0,
        routes: [{name: "MainRouter"}]
      });
    } else {
      Platform.OS === "android" ?
        ToastAndroid.show("회원가입정보를 확인해주세요", 2) :
        Alert.alert("회원가입정보를 확인해주세요");                                                    
    }
  }
  const imagePick = () => {
    ImagePicker.showImagePicker(options, (response) => {
      //console.log(response);
      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
        setImageData({...imageData, ImageSource: null, data: null });
      } else {
        setImageData({...imageData,
          ImageSource: { uri: response.uri },
          data: response.data
        });
      }
    });
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
          {/* image pick */}
          <View style={styles.profileContainer}>
            <Text style={styles.titleText}>프로필 사진</Text>
            <View style={styles.imageView} onTouchEnd={()=>imagePick()}>
              { imageData.ImageSource === null ?
                  <MaterialComIcons name="image-multiple-outline" size={70} /> :
                  <Image source={imageData.ImageSource} style={{ width: 90, height: 90 }} resizeMode="cover" /> }
            </View>
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
  profileContainer: {
    flex: 1,
    marginBottom: 30,
  },  
  imageView: {
    width: "50%", 
    height: "100%", 
    marginTop: 10,
    justifyContent: "center",
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