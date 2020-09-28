import React from "react";
import JoinTypePresenter from "./JoinTypePresenter";

const JOIN_LIST = [
  { 
    name: "일반회원가입", 
    uri: require("../../../../Image/general_join.jpg"),
    value: "general"  
  },
  { 
    name: "업체회원가입", 
    uri: require("../../../../Image/company_join.jpg"),
    value: "company" 
  },
  { name: "카카오 간편가입" },
  { name: "네이버 간편가입" },
  { name: "애플 간편가입" },
]

export default ({ navigation }) => {
  return (
    <JoinTypePresenter 
      navigation={navigation}
      joinList={JOIN_LIST}
    />
  )
};