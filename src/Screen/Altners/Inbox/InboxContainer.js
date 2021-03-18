import React, { useState, useEffect } from "react";
import InboxPresenter from "./InboxPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { GetInteriorAPI, UserInfoAPI, DeleteInteriorAPI, CompanyInfoAPI, UpdateInteriorAPI } from "../../../common/api";
import { Alert } from "react-native";
import { postMessage } from "../../../utils/postMessage";

export default ({ navigation, route }) => {
  const screen = route.name;
  const [tab, setTab] = useState("대기중");
  const [list, setList] = useState();
  const [userInfo, setUserInfo] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    getData();
  }, [tab]);

  const getData = async () => {
    const { email, type } = JSON.parse(await AsyncStorage.getItem("loginData"));
    setType(type);
    if (type === "member") {
      const [success, data] = await UserInfoAPI(JSON.stringify({ "email": email }));
      setUserInfo(data);
      const postData = JSON.stringify({ "mb_index": data.mb_index });
      const [success2, data2] = await GetInteriorAPI(postData);
      if (success2) {
        let array = data2;
        array = filterSet(array)
        setList(array);
      }
    } else if (type === "company") {
      const [success, data] = await CompanyInfoAPI(JSON.stringify({ "email": email}));
      setUserInfo(data[0]);
      const [success2, data2] = await GetInteriorAPI();
      if (success2) {
        let array = data2;
        array = filterSet(array)
        setList(array);
      }
    }
  }

  const filterSet = (array = []) => {
    switch (tab) {
      case "대기중": {
        array = array.filter(item => item.state === "100");
        return array;
      }
      case "진행중": {
        array = array.filter(item => item.state === "200" || item.state === "300" || item.state === "400");
        return array;
      }
      case "완료": {
        array = array.filter(item => item.state === "500");
        return array;
      }
      case "중단": {
        array = array.filter(item => item.state === "600");
        return array;
      }
      default: break;
    }
  }

  const inboxHandler = async (info) => {
    let page;
    switch (info.request_style) {
      case "100": {
        page = [
          { title: "이름", value: info.user_info.user_name },
          { title: "휴대폰 번호", value: info.user_info.phone_number },
          { title: "공간 종류", value: info.space_style },
          { title: "평수", value: `${info.square_feet}평` },
          { title: "공간구조", value: info.structure_style },
          { title: "방", value: `${info.room}개` },
          { title: "화장실", value: `${info.restroom}개` },
          { title: "베란다", value: `${info.veranda}개` },
          { title: "주소", value: `${info.address1} ${info.address2}` },
          { title: "예상 비용", value: info.pre_cost },
          { title: "공사 예정일", value: info.pre_con_date },
          { title: "요청사항", value: info.memo }
        ];
        break;
      }
      case "200": {
        page = [
          { title: "이름", value: info.user_info.user_name },
          { title: "휴대폰 번호", value: info.user_info.phone_number },
          { title: "공간 종류", value: info.space_style },
          { title: "공사 예정일", value: info.pre_con_date },
          { title: "평수", value: `${info.square_feet}평` },
          { title: "주소", value: `${info.address1} ${info.address2}` },
          { title: "예상 비용", value: info.pre_cost },
          { 
            title: "운영 여부", 
            value: info.managed === "100" ? "운영중" : info.managed === "200" ? "운영예정(계약전)" : "운영예정(계약완료)" 
          },
          { title: "요청사항", value: info.memo }
        ];
        break;
      }
      case "300": {
        page = [
          { title: "이름", value: userInfo.user_name },
          { title: "휴대폰 번호", value: userInfo.phone_number },
          { title: "청소 종류", value: info.cleaning_style },
          { title: "공간 종류", value: info.space_style },
          { title: "평수", value: `${info.square_feet}평` },
          { title: "공간구조", value: info.structure_style },
          { title: "방", value: `${info.room}개` },
          { title: "화장실", value: `${info.restroom}개` },
          { title: "베란다", value: `${info.veranda}개` },
          { title: "주소", value: `${info.address1} ${info.address2}` },
          { title: "청소 날짜", value: info.cleaning_date },
          info.moved !== "" &&
          { title: "이사짐여부", value: info.moved },
          { title: "요청사항", value: info.memo }
        ];
        break;
      }
    }
    navigation.navigate("Result", { data: page, option: "state" })
  }

  const calcelHandler = async (index) => {
    const postData = JSON.stringify({ "it_index": index });
    Alert.alert(
      "",
      "견적을 취소하시겠습니까?",
      [
        {
          text: "예",
          onPress: async () => {
            const [success, data] = await DeleteInteriorAPI(postData);
            if (success) {
              navigation.reset({
                index: 0,
                routes: [{ name: '견적요청함' }],
              });
            }
          },
        },
        {
          text: "아니요",
          onPress: () => { return },
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  const updateInterior = async (postData) => {
    const [success, data] = await UpdateInteriorAPI(postData);
    if (success) {
      console.log(data);
      navigation.reset({
        index: 0,
        routes: [{ name: '견적수신함' }],
      });
    }
  }

  const requestAccept = async (index) => {
    const postData = JSON.stringify({
      "it_index": index,
      "co_index": userInfo.co_index,
      "state": "200",
    });
    Alert.alert(
      "",
      "견적을 수락하시겠습니까?",
      [
        {
          text: "예",
          onPress: async () => updateInterior(postData)
        },
        {
          text: "아니요",
          onPress: () => { return },
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  const startInterior = async (index) => {
    const postData = JSON.stringify({
      "it_index": index,
      "co_index": userInfo.co_index,
      "state": "300",
    });
    Alert.alert(
      "",
      "시공을 시작하시겠습니까?",
      [
        {
          text: "예",
          onPress: async () => updateInterior(postData)
        },
        {
          text: "아니요",
          onPress: () => { return },
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  const endInterior = async (index) => {
    const postData = JSON.stringify({
      "it_index": index,
      "co_index": userInfo.co_index,
      "state": "400",
    });
    Alert.alert(
      "",
      "완료처리 하시겠습니까?",
      [
        {
          text: "예",
          onPress: async () => updateInterior(postData)
        },
        {
          text: "아니요",
          onPress: () => { return },
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  const payHandler = async (info) => {
    if (info.payment === null) {
      postMessage("결제금액이 입력되지 않았습니다");
      return;
    }
    navigation.navigate("Payment", { data: info });
  }

  return (
    <InboxPresenter 
      navigation={navigation}
      screen={screen}
      type={type}
      tab={tab}
      setTab={setTab}
      requestList={list}
      inboxHandler={inboxHandler}
      calcelHandler={calcelHandler}
      accept={requestAccept}
      startInterior={startInterior}
      endInterior={endInterior}
      payHandler={payHandler}
    />
  )
}