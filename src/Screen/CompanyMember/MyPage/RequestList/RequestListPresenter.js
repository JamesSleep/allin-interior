import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH } from "../../../../common/theme";
import Head from "../../../../Components/RequestBox/Head";
import RequestCard from "../../../../Components/CompanyRequestCard";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.ScrollView``;

export default ({ requestList = [], navigation, companyName, setRefresh }) => (
  <Container>
    <Head />
    <Content
      contentContainerStyle={{
        paddingVertical: _WIDTH / 30,
        paddingHorizontal: _WIDTH / 25,
      }}
    >
      {requestList.length > 0 &&
        requestList.map(request => {
          if (!request.co_index || request.co_index === companyName) {
            return (
              <RequestCard
                key={request.es_index}
                info={request}
                navigation={navigation}
                companyName={companyName}
                setRefresh={setRefresh}
              />
            )
          }
        })}
    </Content>
  </Container>
)