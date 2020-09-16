import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Categories from "./Categories";
import { backgroundColor } from "../../../../common/theme";
import InputAddress from "./InputAddress";
import CalculateArea from "./CalculateArea";
import ExceptedPrice from "./ExceptedPrice";
import DatePicker from "./DatePicker";
import ImageSelect from "./ImageSelect";

export default ({ navigation, route }) => {
  const option = route.params.option === "Residential" ? true : false;
  const [request, setRequest] = useState({
    category: "",
    zipCode: "",
    address1: "",
    address2: "",
    excepted: "",
    area: "",
    price: "",
    managed: "",
    hopeDate: "",
    requestText: "",
    imageList : [],
  })
  const setState = (property, value) => {
    setRequest({...request, [property]: value});
  }
  return (
    <View style={styles.container}> 
      <Text style={styles.headTitle}>
        { option ? 
          "주거 공간 견적 신청" : 
          "상업 공간 견적 신청"}
      </Text>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 25,
        }}
      >
        {/* 유형 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>
            { option ? "공간 유형" : "업종 유형" }
          </Text>
          <Categories 
            option={option} 
            state={request.category}
            setState={setState}
          />
        </View>
        {/* 주소 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>
            공사지 주소
          </Text>
          <InputAddress 
            state={request}
            setState={setRequest}
          />
        </View>
        {/* 공사예정일 & 공급면적 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>
            { option ? "공사예정일": "평형 (공급면적)" }
          </Text>
          { option && 
          <Categories 
            option="Excepted"
            state={request.excepted}
            setState={setState}
          />}
          { !option &&
          <CalculateArea 
            state={request.area}
            setState={setState}
          />}
        </View>
        {/* 예상비용 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>
            예상비용
          </Text>
          <ExceptedPrice 
            price={request.price}
            setPrice={setState}
          />
        </View>
        {/* 운영여부 */}
        { !option &&
          <View style={styles.columnContainer}>
            <Text style={styles.columnTitle}>운영여부</Text>
            <Categories 
              option={"Managed"}
              state={request.managed}
              setState={setState}
            />
          </View>
        }
        {/* 희망공사 완료일 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>희망 공사 완료일</Text>
          <DatePicker 
            selectDate={request.hopeDate}
            setDate={setState}
          />
        </View>
        {/* 요청사항 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>요청사항</Text>
          <TextInput 
            multiline
            style={styles.input}
            textAlignVertical="top"
            onChangeText={text => setState("requestText", text)}
          />
        </View>
        {/* 사진 등록 */}
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>사진 등록 (선택사항)</Text>
          <ImageSelect 
            imageList={request.imageList}
            setState={setRequest}
          />
        </View>
        {/* 약관 동의 */}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: backgroundColor,
  },
  headTitle: {
    fontSize: 18,
    textAlign: "center"
  },
  columnTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  columnContainer: {
    width: "100%",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    height: 100,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  }
})