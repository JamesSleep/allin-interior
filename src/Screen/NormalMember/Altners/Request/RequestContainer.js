import React, { useState } from "react";
import RequestPresenter from "./RequestPresenter";

export default ({ navigation, route: { params: { gate } } }) => {
  const [info, setInfo] = useState({
    spaceStyle: "Residential",
    spaceDetail: "선택해주세요",
  });

  return (
    <RequestPresenter
      navigation={navigation}
      gate={gate}
      info={info}
      setInfo={setInfo}
    />
  )
}