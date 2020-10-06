import React, { useState } from "react";
import WritePresenter from "./WritePresenter";

export default ({ navigation }) => {
  const [story, setStory] = useState({
    
  });
  return (
    <WritePresenter 
      navigation={navigation}
    />
  )
}