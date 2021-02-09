import React, { useState, useEffect } from "react";
import ResidentialPresenter from "./ResidentialPresenter";
import ImagePicker from "react-native-image-crop-picker";
import AsyncStorage from "@react-native-community/async-storage";
import { postMessage } from "../../../utils/postMessage";
import { NewInteriorAPI, UserInfoAPI, InteriorImgAPI } from "../../../common/api";

export default ({ navigation }) => {
  const [value, setValue] = useState({
    spaceStyle: "",
    zipcode: "",
    address1: "",
    address2: "",
    construction: "",
    squareFeet: "",
    preCost: "",
    preConDate: "",
    structureStyle: "",
    room: 0,
    veranda: 0,
    restroom: 0,
    ref_index: "",
    memo: "",
  });
  const [currentPhoto, setCurrentPhoto] = useState([]);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const [success, data] = await UserInfoAPI(JSON.stringify({ "email": email }));
    if (success) {
      setUserInfo(data);
    }
  }

  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
      cropping: true,
    }).then(image => {
      ImagePicker.openCropper({
        path: image.path,
        width: 1600,
        height: 900,
        includeBase64: true
      }).then(cropped => {
        setCurrentPhoto([
          ...currentPhoto,
          { imagePath: cropped.path, imageData: cropped.data }
        ])
      }).catch(e => {
        console.log(e);
      })
    }).catch(e => {
      console.log(e);
    });
  }

  const imageClean = (path) => {
    ImagePicker.cleanSingle(path).then(() => {
      setCurrentPhoto(currentPhoto.filter(item=>item.imagePath !== path))
    })
  }

  const requestInterior = async () => {
    for (const property in value ) {
      if (property !== "memo" && property !== "ref_index" && property !== "construction") {
        if (value[property] === "" || value[property] === 0) {
          console.log(property);
          postMessage("필수사항을 모두 입력해주세요");
          return;
        } 
      }
    }
    if (currentPhoto.length < 1) {
      postMessage("사진을 추가해주세요");
      return;
    }

    const postData = JSON.stringify({
      "request_style": "100",
      "space_style": value.spaceStyle,
      "mb_index": userInfo.mb_index,
      "zip_code": value.zipcode,
      "address1": value.address1,
      "address2": value.address2,
      "construction": value.construction,
      "square_feet": value.squareFeet,
      "pre_cost": value.preCost,
      "pre_con_date": value.preConDate,
      "structure_style": value.structureStyle,
      "room": value.room,
      "veranda": value.veranda,
      "restroom": value.restroom,
      "memo": value.memo,
      "ref_index": value.ref_index
    });

    const [success, data] = await NewInteriorAPI(postData);

    if (!success) return;
    
    const Forms = currentPhoto.map((obj, index) => {
      return (
        [
          { name: "image", filename: "image.jpg", type: "image/jpg", data: obj.imageData },
          { name: "image_tag", data: "Reference" },
          { name: "mb_index", data: userInfo.mb_index }
        ]
      )
    });

    for (let i=0; i<currentPhoto.length; i++) {
      const [success, data] = await InteriorImgAPI(Forms[i]);
      if (!success) console.log(data);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: '견적신청' }],
    });
  }

  return (
    <ResidentialPresenter 
      navigation={navigation}
      value={value}
      setValue={setValue}
      imagePicker={imagePicker}
      imageClean={imageClean}
      current={currentPhoto}
      setCurrent={setCurrentPhoto}
      regist={requestInterior}
    />
  )
}