import React, { useState, useEffect } from "react";
import RequestBoxPresenter from "./RequestBoxPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { GetEstimateAPI } from "../../../../common/api";

export default ({ navigation }) => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({
      "email": email
    });
    const result = await GetEstimateAPI(data);
    if (result[0]) {
      setRequest(result[1]);
    }
  }

  return (
    <RequestBoxPresenter
      navigation={navigation}
      requestList={request}
    />
  )
}