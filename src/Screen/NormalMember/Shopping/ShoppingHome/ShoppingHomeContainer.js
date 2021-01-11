import React, { useEffect, useState } from "react";
import ShoppingHomePresenter from "./ShoppingHomePresenter";

export default ({ navigation }) => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("신상품순");

  return (
    <ShoppingHomePresenter
      navigation={navigation}
      category={category}
      setCategory={setCategory}
      filter={filter}
      setFilter={setFilter}
    />
  )
}