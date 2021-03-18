import React, { useState, useEffect } from "react";
import InputPricePresenter from "./InputPricePresenter";
import { postMessage } from "../../../utils/postMessage";
import { UpdateInteriorAPI, InteriorImgAPI } from "../../../common/api";
import ImagePicker from "react-native-image-crop-picker";

export default ({ navigation, route }) => {
  const { data } = route.params;
  const [value, setValue] = useState({
    price: data.payment ? data.payment : "",
    date: data.end_date ? data.end_date : "",
  });
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    console.log(data);
  }, []);

  const updateInterior = async () => {
    if (value.price === "" || value.date === "") {
      postMessage("정보를 모두 입력해주세요!");
      return;
    }
    const postData = JSON.stringify({
      "it_index": data.it_index,
      "co_index": data.co_index,
      "payment": value.price,
      "end_date": value.date
    });

    const [success, data1] = await UpdateInteriorAPI(postData);

    if (!success) return;

    const Forms = photo.map((obj, index) => {
      return (
        [
          { name: "image", filename: "image.jpg", type: "image/jpg", data: obj.imageData },
          { name: "image_tag", data: "Complete" },
          { name: "co_index", data: userInfo.mb_index }
        ]
      )
    });

    for (let i=0; i<photo.length; i++) {
      const [success2, data] = await InteriorImgAPI(Forms[i]);
      if (!success2) console.log(data);
    }

    if (success) {
      console.log(data1);
      navigation.reset({
        index: 0,
        routes: [{ name: '견적수신함' }],
      });
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
        setPhoto([
          ...photo,
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
      setPhoto(photo.filter(item=>item.imagePath !== path))
    })
  }
  
  return (
    <InputPricePresenter 
      navigation={navigation}
      info={route.params.data}
      value={value}
      setValue={setValue}
      update={updateInterior}
      photo={photo}
      imagePicker={imagePicker}
      imageClean={imageClean}
    />
  )
}