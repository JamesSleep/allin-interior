import React, { useState, useEffect } from "react";
import RequestPresenter from "./RequestPresenter";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation, route: { params: { gate } } }) => {
  const [info, setInfo] = useState({
    spaceStyle: "Residential",
    spaceDetail: "선택해주세요",
  });
  const [page, setPage] = useState(0);
  const [member, setMember] = useState();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const id = JSON.parse(await AsyncStorage.getItem("loginData"));
    setMember(id.email);
  }

  return (
    <RequestPresenter
      navigation={navigation}
      gate={gate}
      info={info}
      setInfo={setInfo}
      page={page}
      setPage={setPage}
      id={member}
    />
  )
}