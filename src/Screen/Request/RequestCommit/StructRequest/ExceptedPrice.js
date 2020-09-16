import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH } from "../../../../common/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPickerSelect from 'react-native-picker-select';

const items= [
  { label: "1000만원 미만", value: "1000만원 미만" },
  { label: "1000만원 ~ 2000만원 미만", value: "1000만원 ~ 2000만원 미만" },
  { label: "2000만원 ~ 3000만원 미만", value: "2000만원 ~ 3000만원 미만" },
  { label: "3000만원 ~ 5000만원 미만", value: "3000만원 ~ 5000만원 미만" },
  { label: "5000만원 ~ 1억원 미만", value: "5000만원 ~ 1억원 미만" },
  { label: "1억원 이상", value: "1억원 이상" },
  { label: "미정(업체 상담 후 결정)", value: "미정(업체 상담 후 결정)" },
];

export default ({ price, setPrice }) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect 
        placeholder={{
          label: "예상 비용 선택",
          value: null,
          color: "gray"
        }}
        onValueChange={(value) => setPrice("price", value)}
        items={items}
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            right: 10,
            top: 10,
          }
        }}
        value={price}
        useNativeAndroidPickerStyle={false}
        Icon={()=><Icon name="angle-down" size={20} color={"gray"} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    height: 40,
    fontSize: 14,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  },
  inputAndroid: {
    width: "100%",
    height: 40,
    fontSize: 14,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  }
});