import React, { useState } from "react";
import FindPasswordPresenter from "./FindPasswordPresenter";

export default ({ navigation }) => {
  const [value, setValue] = useState({
    code: "",
    phone: "",
    account: "",
    email: "",
  });

  const findHandler = async () => {
    // test code
    if (value.phone.length < 10) return;
    // 휴대폰번호가 입력했으면 코드 수신
    if (value.code === "") {
      setValue({...value, code: "12345"});
      return;
    }
    // 코드받았을시 입력값과 비교
    if (value.code !== "") {
      if (value.account.length > 4) {
        setValue({...value, email: "admin"})
      } else return;
    }
  }

  return (
    <FindPasswordPresenter 
      navigation={navigation}
      value={value}
      setValue={setValue}
      handler={findHandler}
    />
  )
}