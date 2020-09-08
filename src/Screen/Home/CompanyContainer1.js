import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import { _HEIGHT, _WIDTH, backgroundColor, buttonColor, nonActive } from "../../common/theme";
import TextContainer from "../../Components/SignUp/TextContainer";
import ImageView from "../../Components/SignUp/ImageView";

const joinInsert = [
  { value: "companyId", title: "아이디", subTitle: "띄어쓰기 없이 영/숫자 6~10자" },
  { value: "password", title: "비밀번호", subTitle: "6~15자의 영문 대소문자, 숫자 및 특수문자 포함", password: true },
  { value: "password2", title: "비밀번호 확인", password: true},
  { value: "companyName", title: "상호명"},
  { value: "companyEmail", title: "회사 이메일"},
  { value: "companyPhoneNum", title: "회사 전화번호"},
  { value: "businessNumber", title: "사업자 번호"},
  { value: "ceoName", title: "대표자 성함"},
  { value: "ceoPhoneNum", title: "휴대폰번호"},
];

export default ({ 
  signUpData, 
  setSignUpData, 
  setPageView,
  businessImg,
  setBusinessImg
}) => {
  const [visible, setVisible] = useState(false);
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
      //console.log(image);
      setBusinessImg({...businessImg, 
        data: image.data,
        image_path: image.path
      });
    }).catch(e => {
      console.log("image picker error :", e);
    })
  }
  const imageClean = (path) => {
    ImagePicker.cleanSingle(path).then(() => {
      setBusinessImg({...businessImg,
        data: null,
        image_path: null
      });
      setVisible(false);
    }).catch(e => {
      console.log("imageCleanError :",e);
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        { joinInsert.map((info, index) => {
          if(index < 6) return ( 
            <TextContainer 
              key={index} 
              title={info.title} 
              subTitle={info.subTitle} 
              password={info.password}
              value={info.value}
              setValue={getChangeText}
              record={signUpData[info.value]}
            />)
        })}  
        <View style={styles.profileContainer}>
          <Text style={styles.titleText}>사업자등록증</Text>
          { businessImg.image_path === null ?
            <View style={styles.imageView} onTouchEnd={()=>imagePick()}>
              <MaterialComIcons name="image-multiple-outline" size={70} />
            </View> :
            <TouchableOpacity style={styles.imageView} onPress={()=>setVisible(true)}>
              <Modal isVisible={visible}>
                <ImageView 
                  title="사업자등록증" 
                  image_path={businessImg.image_path}
                  setVisible={setVisible}
                  clean={imageClean}
                />
              </Modal>
              <Image 
                source={{ uri: businessImg.image_path }} 
                style={{ width: 90, height: 90 }} 
                resizeMode="cover" 
              />
            </TouchableOpacity>
          }
        </View>
        { joinInsert.map((info, index) => {
        if(index >= 6) return ( 
          <TextContainer 
            key={index} 
            title={info.title} 
            subTitle={info.subTitle} 
            password={info.password}
            value={info.value}
            setValue={getChangeText}
            record={signUpData[info.value]}
          />)
        })}  
      </ScrollView>
      <View style={{ width: "100%", height: _WIDTH/8, justifyContent: "center" }} >
        <TouchableOpacity
          style={{ width: "100%", height: _WIDTH/12, backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
          onPress={()=>setPageView(false)}
        >
          <Text style={{ fontSize: _WIDTH/30, color: "white" }}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})