import React, { useEffect, useState } from "react";
import { UpdateEstimateAPI } from "../../../../common/api";
import { postMessage } from "../../../../utils/postMessage";
import CompletePagePresenter from "./CompletePagePresenter";

export default ({ navigation, route: { params: { data } } }) => {
  const [info, setInfo] = useState({
    payment: "",
    endDate: "",
  });

  const post = async () => {
    if (info.payment.length < 1 || info.endDate.length < 1) {
      postMessage("시공 내용을 모두 입력해주세요");
      return;
    }
    const postData = JSON.stringify({
      "es_index": data.es_index,
      "payment": info.payment,
      "end_date": info.endDate
    });
    const result = await UpdateEstimateAPI(postData);

    if (result[0]) {
      postMessage("등록이 완료되었습니다");
      navigation.reset({
        index: 0,
        routes: [{ name: "MyPage" }]
      });
    }
  }

  return (
    <CompletePagePresenter
      navigation={navigation}
      info={info}
      setInfo={setInfo}
      post={post}
    />
  )
}