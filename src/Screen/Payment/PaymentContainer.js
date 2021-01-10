import React, { useEffect, useState } from "react";
import PaymentPresenter from "./PaymentPresenter";

export default ({ navigation, route: { params: { data } } }) => {
  const [payMode, setPayMode] = useState("");
  const [check, setCheck] = useState(false);

  const post = () => { };

  return (
    <PaymentPresenter
      navigation={navigation}
      info={data}
      payMode={payMode}
      setPayMode={setPayMode}
      agree={check}
      setAgree={setCheck}
      post={post}
    />
  )
}