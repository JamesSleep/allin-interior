import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput,
  Modal,
  Image,
  Platform,
  ToastAndroid,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { _WIDTH, backgroundColor, _HEIGHT, buttonColor } from "../../common/theme";
import TextContainer from "../../Components/SignUp/TextContainer";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Adress from "../../Components/SignUp/Adress";
import ImagePicker from "react-native-image-crop-picker";
import { imageLoad } from "../../common/imageLoad";
import { MemberImage, EditProfileAPI } from "../../common/api";

const joinInsert = [
  { value: "userId", title: "아이디", edit: false },
  { value: "userName", title: "이름", edit: false},
  { value: "phoneNumber", title: "휴대폰", edit: false},
  { value: "birthDay", title: "생년월일", edit: false},
  { value: "email", title: "이메일", edit: true},
  { value: "nickName", title: "닉네임", edit: true},
];

export default ({ navigation, route }) => {
  const { joinInfo } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [signUpData, setSignUpData] = useState({
    userId : joinInfo.mb_id, 
    email: joinInfo.mb_email, 
    userName: joinInfo.mb_name, 
    phoneNumber: joinInfo.mb_phone, 
    birthDay: joinInfo.mb_birthday, 
    nickName: joinInfo.mb_nickname, 
    zipCode: joinInfo.mb_zipcode,
    address1: joinInfo.mb_address1, 
    address2: joinInfo.mb_address2,
  });
  const [imageData, setImageData] = useState({
    image_path: imageLoad(joinInfo.mb_image_path),
    data: null,
    image_tag: "USER_PROFILE"
  });
  const getChangeText = ( property, value ) => {
    setSignUpData({...signUpData, [property]: value});
  }
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      mediaType: "photo",
      includeBase64: true
    }).then(image => {
      setImageData({
        ...imageData,
        image_path: image.path,
        data: image.data
      });
    })
  }
  const postAPI = async () => {
    const postData = JSON.stringify({
      "userId": signUpData.userId,
      "email": signUpData.email,
      "nickname": signUpData.nickName,
      "zipCode": signUpData.zipCode,
      "address1": signUpData.address1,
      "address2": signUpData.address2,
    });
    const formData = [
      { name: "image", filename: "image.jpeg", type: "image/jpeg", data: imageData.data },
      { name: "image_tag", data: imageData.image_tag },
      { name: "user_id", data: signUpData.userId },
    ]; 
    const response = await EditProfileAPI(postData);
    if(response[0]) {
      const responseImg = MemberImage(formData);
      if(Platform.OS === "android") 
        ToastAndroid.show("회원정보수정이 완료되었습니다", 2);
      else 
        Alert.alert("회원정보수정이 완료되었습니다");
      navigation.goBack();
    } else {
      Platform.OS === "android" ?
        ToastAndroid.show("회원가입정보를 확인해주세요", 2) :
        Alert.alert("회원가입정보를 확인해주세요");                                                    
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
          <Icon 
            name="angle-left" 
            size={_WIDTH/12} 
            onPress={()=>navigation.goBack()}
            style={{ position: "absolute", left: 0 }}
          />
          <Text style={{ fontSize: _WIDTH/22, }}>회원정보수정</Text>
        </View>
        <ScrollView>
          <TextContainer 
            title={joinInsert[0].title}
            record={signUpData.userId}
            edit={joinInsert[0].edit}
          />
          <TouchableOpacity
            style={styles.passwordChange}
          >
            <Text style={{ fontSize: 14, color: "white" }}>비밀번호 변경</Text>
          </TouchableOpacity>
          { joinInsert.map((info, index) => {
            if(index > 0) {
              return ( 
                <TextContainer 
                  key={index} 
                  title={info.title} 
                  subTitle={info.subTitle} 
                  password={info.password}
                  value={info.value}
                  setValue={getChangeText}
                  edit={info.edit}
                  record={signUpData[info.value]}
                />
            )}
          })}   
          {/* 우편번호 */}
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
              value={signUpData.address2}
              onChangeText={text => setSignUpData({...signUpData, address2: text})}
            />
          </View>
          {/* image pick */}
          <View style={styles.profileContainer}>
            <Text style={styles.titleText}>프로필 사진</Text>
            <View style={styles.imageView} onTouchEnd={()=>imagePick()}>
              { imageData.image_path === null ?
                  <MaterialComIcons name="image-multiple-outline" size={70} /> :
                  <Image source={{ uri: imageData.image_path }} style={{ width: 90, height: 90 }} resizeMode="cover" /> }
            </View>
          </View>
        </ScrollView>
        <View style={{ width: "100%", height: _WIDTH/8, justifyContent: "center" }} >
          <TouchableOpacity
            style={{ width: "100%", height: _WIDTH/12, backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
            onPress={()=>postAPI()}
          >
            <Text style={{ fontSize: _WIDTH/30, color: "white" }}>회원정보수정</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: backgroundColor
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: _HEIGHT/20,
  },
  passwordChange: {
    width: _WIDTH*0.38,
    height: 35,
    marginBottom: 15,
    backgroundColor: buttonColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
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