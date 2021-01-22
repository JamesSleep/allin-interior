import React from "react";
import styled from "styled-components/native";
import { _WIDTH, backgroundColor } from "../../../common/theme";
import Search from "../../../Components/Home/Search";
import Banner from "../../../Components/Home/Banner";
import BestStory from "../../../Components/Home/BestStory";
import BestShop from "../../../Components/Home/BestShop";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Scroll = styled.ScrollView``;

export default ({ storyList=[], navigation, selected, setSelected, shopList }) => (
  <Container>
    <Search navigation={navigation} />
    <Scroll>
      <Banner />
      <BestStory 
        storyList={storyList} 
        navigation={navigation}
      />
      <BestShop 
        navigation={navigation}
        tab={selected}
        setTab={setSelected}
        shopList={shopList}
      />
    </Scroll>
  </Container>
) 