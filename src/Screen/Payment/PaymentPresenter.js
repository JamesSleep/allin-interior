import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { backgroundColor } from "../../common/theme";
import AgreePay from "../../Components/Payment/AgreePay";
import Head from "../../Components/Payment/Head";
import PayInfo from "../../Components/Payment/PayInfo";
import PayMode from "../../Components/Payment/PayMode";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation, info, setInfo, post, agree, setAgree, payMode, setPayMode }) => (
  <Container>
    <Head navigation={navigation} />
    <ScrollView>
      <PayInfo info={info} />
      <PayMode
        payMode={payMode}
        setPayMode={setPayMode}
      />
      <AgreePay
        agree={agree}
        setAgree={setAgree}
        post={post}
      />
    </ScrollView>
  </Container>
)