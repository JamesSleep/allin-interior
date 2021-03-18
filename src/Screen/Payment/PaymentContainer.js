import React, { useEffect, useState } from "react";
import PaymentPresenter from "./PaymentPresenter";
import { UpdateInteriorAPI } from "../../common/api";

export default ({ navigation, route: { params: { data } } }) => {
  const [payMode, setPayMode] = useState("");
  const [check, setCheck] = useState(false);

  const post = async () => {
    const postData = JSON.stringify({
      "it_index": data.it_index,
      "state": "500"
    });
    const [success, data2] = await UpdateInteriorAPI(postData);
    if (success) {
      console.log(data2);
      navigation.reset({
        index: 0,
        routes: [{ name: '견적요청함' }],
      });
    }
  };

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