import React, { useState, useEffect } from "react";
import CleaningPresenter from "./CleaningPresenter";
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
    squareFeet: "",
    cleaningStyle: "",
    cleaningDate: "",
    moved: "",
    structureStyle: "",
    room: 0,
    veranda: 0,
    restroom: 0,
    memo: "",
  });
  const [page, setPage] = useState(0);
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
        if (value[property] === "") {
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
      "request_style": "300",
      "space_style": value.spaceStyle,
      "cleaning_style": value.cleaningStyle,
      "cleaning_date": value.cleaningDate,
      "moved": value.moved,
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

    const page = [
      { title: "이름", value: userInfo.user_name },
      { title: "휴대폰 번호", value: userInfo.phone_number },
      { title: "청소 종류", value: value.cleaningStyle },
      { title: "공간 종류", value: value.spaceStyle },
      { title: "평수", value: `${value.squareFeet}평` },
      { title: "공간구조", value: value.structureStyle },
      { title: "방", value: `${value.room}개` },
      { title: "화장실", value: `${value.restroom}개` },
      { title: "베란다", value: `${value.veranda}개` },
      { title: "주소", value: `${value.address1} ${value.address2}` },
      { title: "청소 날짜", value: value.cleaningDate },
      value.moved !== "" &&
      { title: "이사짐여부", value: value.moved },
      { title: "요청사항", value: value.memo }
    ];
    navigation.navigate("Result", { data: page, option: "request" });
  }

  return (
    <CleaningPresenter 
      navigation={navigation}
      value={value}
      setValue={setValue}
      page={page}
      setPage={setPage}
      imagePicker={imagePicker}
      imageClean={imageClean}
      current={currentPhoto}
      setCurrent={setCurrentPhoto}
      regist={requestInterior}
    />
  )
}