import React, { useState } from "react";
import styled from "styled-components/native";
import SpaceStyle from "./SpaceStyle";
import RepairAdress from "./RepairAdress";
import DateSelect from "./DateSelect";
import PrePay from "./PrePay";
import { ScrollView } from "react-native";
import ManagedSelect from "./ManagedSelect";
import { _WIDTH, buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NewEstimateAPI, UserInfoAPI } from "../../../common/api";
import { postMessage } from "../../../utils/postMessage";

const Container = styled.View`
  height: 100%;
`;

const Scroll = styled.ScrollView`
  flex: 8;
`;

const ButtonColumn = styled.View`
  flex: 1;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.9}px;
  height: ${_WIDTH * 0.11}px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
`;

const Text = styled.Text`
  color: white;
  font-size: ${_WIDTH / 25}px;
`;

export default ({ id, navigation }) => {
  const [info, setInfo] = useState({
    areaStyle: "사무실",
    zipcode: "",
    address1: "",
    address2: "",
    endDate: "미정",
    prePayment: null,
    managed: "운영중",
  });

  const postData = async () => {
    if ( info.zipcode === "" || info.address1 === "" || info.address2 === "" ) {
      postMessage("주소를 확인해주세요");
      return;
    }

    if ( info.prePayment === null ) {
      postMessage("예상비용을 선택해주세요");
      return;
    }

    const data = JSON.stringify({
      "estimate_style": "Commercial",
      "space_style": info.areaStyle,
      "zip_code": info.zipcode,
      "address1": info.address1,
      "address2": info.address2,
      "mb_index": id,
      "pre_date": info.endDate,
      "pre_pay": info.prePayment,
      "managed": info.managed
    });

    const result = await NewEstimateAPI(data);

    if(result[0]) {
      const result1 = await UserInfoAPI(JSON.stringify({ "email": id }));
      const page = [
        { title: "이름", value: result1[1].user_name },
        { title: "휴대폰 번호", value: result1[1].phone_number },
        { title: "공간 종류", value: info.areaStyle },
        { title: "공사 예정일", value: info.endDate },
        { title: "주소", value: `${info.address1} ${info.address2}` },
        { title: "예상 비용", value: info.prePayment },
        { title: "운영 여부", value: info.managed }
      ];
      navigation.navigate("RequestResult", { data: page });
    }
  }

  return (
    <Container>
      <Scroll>
        <SpaceStyle info={info} setInfo={setInfo} />
        <RepairAdress info={info} setInfo={setInfo} />
        <DateSelect info={info} setInfo={setInfo} />
        <PrePay info={info} setInfo={setInfo} />
        <ManagedSelect info={info} setInfo={setInfo} />
      </Scroll>
      <ButtonColumn>
        <TouchableOpacity onPress={()=>postData()}>
          <Button>
            <Text>견적신청하기</Text>
          </Button>
        </TouchableOpacity>
      </ButtonColumn>
    </Container>
  )
}