import React, { useState } from "react";
import ShopCompanyPresenter from "./ShopCompanyPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import ImagePicker from "react-native-image-crop-picker";
import { createSalt, cryptoGraphic } from "../../../../utils/cryptographic";
import { postMessage } from "../../../../utils/postMessage";
import { ImageUploadAPI, NewShopAPI } from "../../../../common/api";

export default ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    ceoPhone: "",
    ceoName: "",
    businessName: "",
    businessNumber: "",
    businessPhone: "",
    discription: "",
    imagePath: "",
    imageData: null,
  });

  const signUpHandler = async () => {
    for (const property in info) {
      if (info[property].length < 1) {
        postMessage(`가입정보를 모두 입력해주세요!`);
        return;
      }
    }

    const salt = createSalt();
    const password = cryptoGraphic(info.password, salt);
    const postData = JSON.stringify({
      "email": info.email,
      "password": password,
      "salt": salt,
      "business_name": info.businessName,
      "ceo_name": info.ceoName,
      "ceo_phone": info.ceoPhone,
      "business_number": info.businessNumber,
      "business_phone": info.businessPhone,
      "discription": info.discription
    });
    const profile_form = [
      { name: "image", filename: "image.jpg", type: "image/jpg", data: info.imageData },
      { name: "image_tag", data: "ShopProfile" },
      { name: "email", data: info.email }
    ];
    const loginData = JSON.stringify({
      "email": info.email,
      "autoLogin": true
    });

    const companyAPI = await NewShopAPI(postData);
    if (!companyAPI[0]) {
      console.log(companyAPI[1]);
      return;
    }
    
    const profileAPI = await ImageUploadAPI(profile_form);
    if (profileAPI[0]) {
      console.log("성공", profileAPI[1]);
      await AsyncStorage.setItem("loginData", loginData);
      await KeyChain.setInternetCredentials(
        DeviceInfo.getUniqueId(),
        salt,
        info.password,
        { accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED }
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'CompanyTabRouter' }],
      })
    } else console.log("실패", profileAPI[1]);
  }

  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
    }).then(image => {
      ImagePicker.openCropper({
        path: image.path,
        width: 1400,
        height: 1000,
        includeBase64: true
      }).then(cropped => {
        setInfo({
          ...info,
          imagePath: cropped.path,
          imageData: cropped.data
        });
      }).catch(e => {
        console.log(e);
      })
    }).catch(e=>{
      console.log(e);
    })
  }

  return (
    <ShopCompanyPresenter 
      navigation={navigation}
      step={step}
      setStep={setStep}
      info={info}
      setInfo={setInfo}
      imagePicker={imagePicker}
      signUpHandler={signUpHandler}
    />
  )
}