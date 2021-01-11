import React, { useState } from "react";
import ShoppingBestPresenter from "./ShoppingBestPresenter";

export default ({ navigation }) => {
  const [selected, setSelected] = useState(true);

  return (
    <ShoppingBestPresenter
      navigation={navigation}
      selected={selected}
      setSelected={setSelected}
    />
  )
}