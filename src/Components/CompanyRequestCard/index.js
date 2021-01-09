import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { CompanyOneInfoAPI, UpdateEstimateAPI, UserInfoAPI } from "../../common/api";
import { buttonColor, _WIDTH } from "../../common/theme";
import { postMessage } from "../../utils/postMessage";
import AsyncStorage from "@react-native-community/async-storage";

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
  background-color: ${props => props.pay ? "#95a5a6" : buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PaymentText = styled.Text`
  color: white;
  font-size: ${_WIDTH / 30}px;
`;

export default ({ info, navigation, companyName, setRefresh }) => {
  const submit = async () => {
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    const postData = JSON.stringify({
      "email": loginData.email
    });
    const result = await CompanyOneInfoAPI(postData);
    const companyInfo = result[1][0];

    if (info.payment) {
      return;
    }

    if (!info.co_index) {
      const data = JSON.stringify({
        "es_index": info.es_index,
        "co_index": companyName,
      });
      const result2 = await UpdateEstimateAPI(data);
      console.log(result2);
      if (result2[0]) {
        setRefresh(true);
      }
    } else {
      // 시공완료후 금액 및 영수증 등록
      navigation.navigate("CompletePage", { data: info });
    }
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
          {info.payment ? info.payment + " 원" : info.pre_pay}
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
          onPress={() => submit()}
          activeOpacity={info.payment && 1}
        >
          <Payment pay={info.payment}>
            <PaymentText>
              {info.payment ?
                "결제대기" :
                !info.co_index ?
                  "수락하기" :
                  "시공완료"
              }
            </PaymentText>
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