import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH } from "../../../../common/theme";
import Header from "../../../../Components/Request/Header";
import SelectStyle from "../../../../Components/Request/SelectStyle";
import ResidentialRequest from "../../../../Components/Request/ResidentialRequest";
import CommercialRequest from "../../../../Components/Request/CommercialRequest";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View`
  flex: 1;
  padding: 5px ${_WIDTH / 20}px;
`;

export default ({ navigation, gate, info, setInfo, page, setPage, id }) => (
  <Container>
    <Header navigation={navigation} />
    <Content>
      { page === 0 && (
        <SelectStyle
          info={info}
          setInfo={setInfo}
          setPage={setPage}
        />
      )}
      { page === 1 && (
        <ResidentialRequest 
          id={id}
          navigation={navigation} 
        />
      )}
      { page === 2 && (
        <CommercialRequest 
          id={id} 
          navigation={navigation}
        />
      )}
    </Content>
  </Container>
);