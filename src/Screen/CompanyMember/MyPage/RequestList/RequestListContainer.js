import React, { useEffect, useState } from "react";
import RequestListPresenter from "./RequestListPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { CompanyOneInfoAPI, GetEstimateAPI } from "../../../../common/api";

export default ({ navigation }) => {
  const [request, setRequest] = useState([]);
  const [companyName, setCoName] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) setRefresh(false);
    getRequest();
  }, [refresh]);

  const getRequest = async () => {
    const email = "";
    const data = JSON.stringify({ "email": email });
    const result = await GetEstimateAPI(data);
    if (result[0]) {
      setRequest(result[1]);
    }
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    const result2 = await CompanyOneInfoAPI(JSON.stringify({ "email": loginData.email }));
    setCoName(result2[1][0].business_name);
  }

  return (
    <RequestListPresenter
      navigation={navigation}
      requestList={request}
      companyName={companyName}
      setRefresh={setRefresh}
    />
  )
}