import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH } from "../../../../common/theme";
import Head from "../../../../Components/RequestBox/Head";
import RequestCard from "../../../../Components/RequestBox/RequestCard";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.ScrollView``;

export default ({ requestList, navigation }) => (
  <Container>
    <Head />
    <Content
      contentContainerStyle={{
        paddingVertical: _WIDTH / 30,
        paddingHorizontal: _WIDTH / 25,
      }}
    >
      {requestList.map(request => (
        <RequestCard
          key={request.es_index}
          info={request}
          navigation={navigation}
        />
      ))}
    </Content>
  </Container>
)