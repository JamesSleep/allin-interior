import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor } from "../../../common/theme";
import CompanyCard from "../../../Components/Altners/Company/CompanyCard";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation, screen, list=[] }) => (
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
      { list.length > 0 && (
        list.map(company => (
          <CompanyCard 
            key={company.co_index}
            info={company}
            navigation={navigation}
          />
        ))
      )}
    </ScrollView>
  </Container>
)