import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { UserInfoAPI } from "../../common/api";
import { buttonColor, _WIDTH } from "../../common/theme";
import { postMessage } from "../../utils/postMessage";

const HeadColumn = styled.View`
  flex: 3;
  justify-content: center;
  padding-left: 15px;
`;

const CompanyText = styled.Text`
  font-size: ${_WIDTH / 25}px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SpaceStyle = styled.View`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 16}px;
  background-color: #E9EDF2;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const StyleText = styled.Text`
  font-size: ${_WIDTH / 30}px;
`;

const Pay = styled.View`
  flex: 2;
  justify-content: center;
  align-items: flex-end;
`;

const PayText = styled.Text`
  font-size: ${_WIDTH / 27}px;
`;

const ButtonView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const Build = styled.View`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 15}px;
  background-color: #3498db;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const BuildText = styled.Text`
  color: white;
  font-size: ${_WIDTH / 30}px;
`;

const Payment = styled.View`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 15}px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PaymentText = styled.Text`
  color: white;
  font-size: ${_WIDTH / 30}px;
`;

export default ({ info, navigation }) => {
  const payment = () => {
    if (info.payment === null) {
      postMessage("시공이 완료되지않았습니다!");
      return;
    }
    navigation.navigate("Payment", { data: info });
  }

  const build = async () => {
    const postData = JSON.stringify({
      "email": info.mb_index
    });
    const result = await UserInfoAPI(postData);
    const page = [
      { title: "이름", value: result[1].user_name },
      { title: "휴대폰 번호", value: result[1].phone_number },
      { title: "공간 종류", value: info.space_style },
      { title: "공사 예정일", value: info.pre_date },
      { title: "주소", value: `${info.address1} ${info.address2}` },
      { title: "예상 비용", value: info.pre_pay },
    ];
    if (info.managed) {
      page.push({
        title: "운영여부", value: info.managed
      })
    }
    navigation.navigate("RequestBuild", { data: page });
  }

  return (
    <View style={styles.container}>
      <HeadColumn>
        <CompanyText>
          {info.co_index ? info.co_index : "업체 미정"}
        </CompanyText>
        <SpaceStyle>
          <StyleText>
            {info.estimate_style === "Residential" ? "주거공간" : "상업공간"}
          </StyleText>
        </SpaceStyle>
      </HeadColumn>
      <Pay>
        <PayText>
          {info.payment ? info.payment : info.pre_pay}
        </PayText>
      </Pay>
      <ButtonView>
        <TouchableOpacity
          onPress={() => build()}
        >
          <Build>
            <BuildText>견적서보기</BuildText>
          </Build>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => payment()}
        >
          <Payment>
            <PaymentText>결제하기</PaymentText>
          </Payment>
        </TouchableOpacity>
      </ButtonView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    marginBottom: _WIDTH / 15,
    borderRadius: 10,
    backgroundColor: "rgba(250, 250, 250, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    flexDirection: "row"
  },
});