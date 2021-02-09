import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor, _HEIGHT } from "../../../common/theme";
import CompanyCard from "../../../Components/Altners/Company/CompanyCard";
import { ScrollView } from "react-native";
import Filter from "../../../Components/Altners/Company/Filter";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const ZeroList = styled.View`
  width: 100%;
  height: ${_HEIGHT * 0.7}px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-top: 10px;
`;

export default ({ navigation, screen, list=[], filter, setFilter }) => (
  <Container>
    <Header 
      navigation={navigation}
      screen={screen}
    />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 20
      }}
    >
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      { list.length > 0 && (
        list.map(company => (
          <CompanyCard 
            key={company.co_index}
            info={company}
            navigation={navigation}
          />
        ))
      )}
      { list.length === 0 && (
        <ZeroList>
          <MaterialCI name="emoticon-cry-outline" size={50} />
          <Text>조건에 맞는 업체가 없습니다.</Text>
        </ZeroList>
      )}
    </ScrollView>
  </Container>
)