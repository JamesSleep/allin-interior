import React from "react";
import RNPickerSelect from 'react-native-picker-select';
import { _WIDTH } from "../../../theme";
import { StyleSheet } from "react-native";

const placeholder={
  label: "선택해주세요",
  value: null,
  color: "black"
}

const items=[
  { label: "naver.com", value: "naver.com" },
  { label: "hanmail.net", value: "hanmail.net" },
  { label: "gmail.com", value: "gmail.com" },
]

const SelectPicker = () => {
  return (
    <>
      <RNPickerSelect 
        useNativeAndroidPickerStyle={ false }
        onValueChange={(value)=>console.log(value)}
        placeholder={placeholder}
        items={items}
        style={{
          inputAndroid: {
            width: "100%", 
            height: "100%",
            color: "black",
            fontSize: _WIDTH/35,
          },
          placeholder: {
            color: "black"
          }
        }}
      />
    </>
  )
}

const styled = StyleSheet.create({
  
});

export default SelectPicker;
