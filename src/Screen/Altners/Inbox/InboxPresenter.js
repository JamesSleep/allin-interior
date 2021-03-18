import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _HEIGHT } from "../../../common/theme";
import Header from "../../../Components/Altners/Header";
import FilterTab from "../../../Components/Altners/Inbox/FilterTab";
import { TouchableOpacity } from "react-native-gesture-handler";
import InboxCard from "../../../Components/Altners/Inbox/InboxCard";
import { ScrollView } from "react-native";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View`
  flex: 1;
  background-color: #F8F8F8;
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

export default ({ 
  navigation, screen, type, tab, setTab, requestList=[], 
  inboxHandler, calcelHandler, accept, startInterior, endInterior,
  payHandler
}) => (
  <Container>
    <Header navigation={navigation} screen={screen} />
    <FilterTab tab={tab} setTab={setTab} list={list} />
    <Content>
      <ScrollView
        contentContainerStyle={{ 
          paddingHorizontal: 20, 
          paddingVertical: 15,
          alignItems: "center"
        }}
      >
        {requestList.length > 0 ? 
          requestList.map(item => (
            <InboxCard 
              key={item.it_index} 
              info={item} 
              type={type}
              inboxHandler={inboxHandler} 
              cancelHandler={calcelHandler} 
              accept={accept}
              startInterior={startInterior}
              endInterior={endInterior}
              navigation={navigation}
              payHandler={payHandler}
            />
          )) : (
          <ZeroList>
            <MaterialCI name="emoticon-cry-outline" size={50} />
            <Text>조건에 맞는 정보가 없습니다.</Text>
          </ZeroList>
        )}
      </ScrollView>
    </Content>
  </Container>
);

const list = ["대기중", "진행중", "완료", "중단"];