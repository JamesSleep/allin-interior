import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import Categories from "./Categories";
import InputAddress from "./InputAddress";
import CalculateArea from "./CalculateArea";
import ExceptedPrice from "./ExceptedPrice";
import DatePicker from "./DatePicker";
import ImageSelect from "./ImageSelect";
import AgreeForm from "./AgreeForm";
import { UserInfoAPI, ResidentialPostAPI, CommercialPostAPI } from "../../../../common/api";

export default ({ navigation, route }) => {
  const option = route.params.option.screen === "Residential" ? true : false;
  const { userInfo : {
    userId, userName, phoneNum, zipCode, address1, address2
  }} = route.params.option;
  const [request, setRequest] = useState({
    userId, 
    userName, 
    phoneNum, 
    zipCode, 
    address1, 
    address2,
    category: "",
    excepted: "",
    area: "",
    price: "",
    managed: "",
    hopeDate: "",
    requestText: "",
    imageList: [],
    agree: false
  });
  const setState = (property, value) => {
    setRequest({...request, [property]: value});
  }
  const postRequestData = async () => {
    let data, result;
    if(option) {
      data = JSON.stringify({
        "userId": request.userId,
        "phoneNum": request.phoneNum,
        "category": request.category,
        "zipCode": request.zipCode,
        "address1": request.address1,
        "address2": request.address2,
        "excepted": request.excepted,
        "price": request.price,
        "hopeDate": request.hopeDate,
        "request": request.requestText
      });
      result = await ResidentialPostAPI(data);
    } else {
      data = JSON.stringify({
        "userId": request.userId,
        "phoneNum": request.phoneNum,
        "category": request.category,
        "zipCode": request.zipCode,
        "address1": request.address1,
        "address2": request.address2,
        "area": request.area,
        "excepted": request.excepted,
        "price": request.price,
        "managed": request.managed,
        "hopeDate": request.hopeDate,
        "request": request.requestText
      });
      result = await CommercialPostAPI(data);
    } 
    if(result[0]) {
      console.log("Success");
      navigation.navigate("ReceiptRequest", {
        option: option ? "Residential" : "Commercial"
      })
    } else {
      console.log("Failed");
    }
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
        { !option && (
          <View style={styles.columnContainer}>
            <Text style={styles.columnTitle}>운영여부</Text>
            <Categories 
              option={"Managed"}
              state={request.managed}
              setState={setState}
            />
          </View> 
        )}
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
        <View style={styles.columnContainer}>
          <AgreeForm setState={setState}/>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>postRequestData()}
        >
          <Text style={styles.btnText}>견적신청하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  },
  buttonContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: _WIDTH-50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: buttonColor
  },
  btnText: {
    color: "white",
    fontSize: 15,
  }
})