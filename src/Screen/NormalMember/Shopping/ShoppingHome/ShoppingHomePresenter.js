import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../../common/theme";
import Banner from "../../../../Components/ShoppingHome/Banner";
import IconView from "../../../../Components/ShoppingHome/IconView";
import ProductList from "../../../../Components/ShoppingHome/ProductList";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation, category, setCategory, filter, setFilter, list }) => (
  <Container>
    <Banner />
    <IconView
      category={category}
      setCategory={setCategory}
    />
    <ProductList
      navigation={navigation}
      category={category}
      filters={filter}
      setFilter={setFilter}
      list={list}
    />
  </Container>
) 