import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Platform } from "react-native";

const Container = styled.View`
  margin-bottom: 30px;
`;

export default ({ info, setInfo }) => (
  <Container>
    <Title>예상 비용</Title>
    <RNPickerSelect
      placeholder={{ 
        label: "예상 비용 선택",
        value: null,
        color: "gray"
      }}
      onValueChange={(value) => setInfo({...info, prePayment: value})}
      items={[
        { label: '1000만원대', value: '1000만원대' },
        { label: '2000만원대', value: '2000만원대' },
        { label: '3000만원대', value: '3000만원대' },
        { label: '4000만원대', value: '4000만원대' },
        { label: '5000만원대 이상', value: '5000만원대 이상' },
        { label: '미정', value: '미정' },
      ]}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
    />
  </Container>
);

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: 15,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginTop: 15,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});