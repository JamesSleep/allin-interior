import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Matrail from "react-native-vector-icons/MaterialCommunityIcons";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  border-color: #eeeeee;
  border-bottom-width: 8px;
`;

const TitleView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-color: #dddddd;
  border-bottom-width: 0.7px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const WayView = styled.View`
  padding: 20px 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const WayButton = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 5px;
`;

const WayText = styled.Text`
  font-size: 13px;
  margin-left: 10px;
  color: ${props => props.select ? buttonColor : "gray"};
`;

export default ({ info, setInfo }) => (
  <Container>
    <TitleView>
      <TitleText>결제 수단</TitleText>
    </TitleView>
    <WayView>
      <TouchableOpacity 
        onPress={() => setInfo({
          ...info,
          payment: "deposit"
        })}
      >
        <WayButton>
          <Matrail 
            name="bank-transfer" 
            size={28} 
            color={info.payment === "deposit" ? buttonColor : "gray"}
          />
          <WayText select={info.payment === "deposit"}>무통장입금</WayText>
        </WayButton>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => setInfo({
          ...info,
          payment: "card"
        })}
      >
        <WayButton>
          <Matrail 
            name="credit-card" 
            size={28} 
            color={info.payment === "card" ? buttonColor : "gray"}
          />
          <WayText select={info.payment === "card"}>카드결제</WayText>
        </WayButton>
      </TouchableOpacity>
    </WayView>
  </Container>
)