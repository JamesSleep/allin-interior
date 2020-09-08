import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { _HEIGHT, _WIDTH, backgroundColor, buttonColor } from "../../common/theme";
import CompanyContainer1 from "./CompanyContainer1";
import CompanyContainer2 from "./CompanyContainer2";
import { postData } from "../../Components/SignUp/PostData";
import { CompanySignUpAPI, CompanyAreaAPI, CompanyCategoryAPI, CompanyImage } from "../../common/api";

export default function CompanySignUp({ navigation }) {
  const [pageView, setPageView] = useState(true);
  const [signUpData, setSignUpData] = useState({
    companyId: "", 
    password: "", 
    password2: "", 
    companyName: "", 
    companyEmail: "", 
    companyPhoneNum: "", 
    businessNumber: "",
    ceoName: "",
    ceoPhoneNum: "",
    type: "",
    area: [],
    categories: []
  });
  const [businessImg, setBusinessImg] = useState({
    image_path: null,
    data: null,
    image_tag: "business"
  });
  const [portpolioImg, setPortpolioImg] = useState([{
    image_path: null,
    data: null,
    image_tag: "portpolio",
    title: "",
    content: "",
  }]);
  const [companyImg, setCompanyImg] = useState([{
    image_path: null,
    data: null,
    image_tag: "company"
  }]);
  const [profileImg, setProfileImg] = useState({
    image_path: null,
    data: null,
    image_Tag: "profile"
  });
  const pageHandler = () => {
    if(pageView) {
      navigation.navigate("AuthPhoneNum")
    } else {
      setPageView(true);
    }
  }
  const postAPI = async () => {
    let result;
    //업체회원 기본정보
    const companySignUp = JSON.stringify({
      "companyId": signUpData.companyId,
      "password": signUpData.password,
      "companyName": signUpData.companyName,
      "companyEmail": signUpData.companyEmail,
      "companyPhone": signUpData.companyPhoneNum,
      "businessNumber": signUpData.businessNumber,
      "ceoName": signUpData.ceoName,
      "ceoPhone": signUpData.ceoPhoneNum,
      "type": signUpData.type
    });
    result = await CompanySignUpAPI(companySignUp);
    if(!result[0]) {
      Alert.alert("회원가입 정보를 확인해주세요!");
      return;
    }
    //시공 지역
    const area = signUpData.area?.map(value => (
      JSON.stringify({
        "companyId": signUpData.companyId,
        "area": value
      })
    ));
    if(signUpData.area.length > 0) {
      for(let i=0; i<area.length; i++) {
        result = await CompanyAreaAPI(area[i]);
      }
    }
    //카테고리
    const categories = signUpData.categories?.map(value => (
      JSON.stringify({
        "companyId": signUpData.companyId,
        "category": value
      })
    ));
    if(signUpData.categories.length > 0) {
      for(let i=0; i<categories.length; i++) {
        result = await CompanyCategoryAPI(categories[i]);
      }
    }
    //사업자 등록증
    const businessImgData = [
      { name: "image", filename: "image.png", type: "image/jpeg", data: businessImg.data },
      { name: "image_tag", data: businessImg.image_tag },
      { name: "company_id", data: signUpData.companyId }
    ];
    if(businessImg.image_path !== null) {
      result = await CompanyImage(businessImgData);
    }
    //업체사진
    const companyImgData = companyImg.map((value, index) => ([
      { name: "image", filename: "image.png", type: "image/jpeg", data: value.data },
      { name: "image_tag", data: value.image_tag },
      { name: "company_id", data: signUpData.companyId }
    ]));
    if(companyImg.length > 0) {
      for(let i=0; i<companyImgData.length; i++) {
        result = await CompanyImage(companyImgData[i]);
      }
    } 
    //프로필 사진
    const profileImgData = [
      { name: "image", filename: "image.png", type: "image/jpeg", data: profileImg.data },
      { name: "image_tag", data: profileImg.image_tag },
      { name: "company_id", data: signUpData.companyId }
    ];
    if(profileImg.image_path !== null) {
      result = await CompanyImage(profileImgData);
    }
    //리덕스 추가하기
    navigation.reset({
      index: 0,
      routes: [{name: "MainRouter"}]
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Icon 
          name="angle-left" 
          size={_WIDTH/12} 
          onPress={()=>pageHandler()}
          style={{ position: "absolute", left: 0 }}
        />
        <Text style={{ fontSize: _WIDTH/22, }}>업체  회원가입</Text>
      </View>
      { pageView ?
        <CompanyContainer1 
          signUpData={signUpData}
          setSignUpData={setSignUpData}
          setPageView={setPageView}
          businessImg={businessImg}
          setBusinessImg={setBusinessImg}
        />
        :
        <CompanyContainer2 
          signUpData={signUpData}
          setSignUpData={setSignUpData}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          portpolioImg={portpolioImg}
          setPortpolioImg={setPortpolioImg}
          companyImg={companyImg}
          setCompanyImg={setCompanyImg}
          postAPI={postAPI}
        />
      }
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