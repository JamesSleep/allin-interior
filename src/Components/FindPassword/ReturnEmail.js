import React from "react";
import styled from "styled-components/native";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";
import { buttonColor } from "../../common/theme";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const IconView = styled.View`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const EmailView = styled.View`
  border-width: 2px;
  border-color: ${buttonColor};
  padding: 5px 15px;
`;

const Email = styled.Text`
  font-size: 18px;
  color: ${buttonColor};
`;

export default ({ value }) => (
  <Container>
    <IconView>
      <MaterialCI name="lock-open-outline" size={120} color={"#ff7675"} />
    </IconView>
    <Text>임시비밀번호가 발급되었습니다</Text>
    <EmailView>
      <Email>{value.email}</Email>
    </EmailView>
  </Container>
)