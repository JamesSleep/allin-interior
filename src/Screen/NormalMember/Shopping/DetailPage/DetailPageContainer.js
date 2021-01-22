import React, { useState } from "react";
import DetailPagePresenter from "./DetailPagePresenter";

export default ({ navigation, route: { params: { data } } }) => {
  const [message, setMessage] = useState(false);

  return (
    <DetailPagePresenter
      navigation={navigation}
      info={data}
      message={message}
      setMessage={setMessage}
    />
  )
}