import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH } from "../../../../common/theme";
import Header from "../../../../Components/Request/Header";
import SelectStyle from "../../../../Components/Request/SelectStyle";
import SpaceDetail from "../../../../Components/Request/SpaceDetail";
import SpaceStyle from "../../../../Components/Request/SpaceStyle";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View`
  flex: 1;
  padding: 5px ${_WIDTH / 20}px;
`;

export default ({ navigation, gate, info, setInfo }) => (
  <Container>
    <Header navigation={navigation} />
    <Content>
      <SelectStyle
        info={info}
        setInfo={setInfo}
      />
    </Content>
  </Container>
);