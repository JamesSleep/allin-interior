import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor } from "../../../common/theme";
import FilterRow from "../../../Components/Altners/Interior/FilterRow";
import InteriorCard from "../../../Components/Altners/Interior/InteriorCard";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View``;

export default ({ navigation, screen, list=[] }) => (
  <Container>
    <Header 
      navigation={navigation} 
      screen={screen}
    />
    <FilterRow 
      len={list.length}
    />
    <Content>
      {list.length > 0 && list.map(item => (
        <InteriorCard 
          key={item.it_index}
          data={item}
        />
      ))}
    </Content>
  </Container>
)