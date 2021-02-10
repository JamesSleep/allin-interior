import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Calendars from "../../../Calendars";
import { buttonColor } from "../../../../common/theme";
import { ceil } from "react-native-reanimated";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 25px;
`;

const CleanBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const DateBox = styled.View`
  width: 150px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: ${props=>props.select ? 1.2 : 0.5}px;
  border-color: ${props=>props.select ? buttonColor : "gray"};
`;

const DateText = styled.Text`
  font-size: 15px;
`;

const Content = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default ({ value, setValue }) => {
  const [visible, setVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setDate();
  }, []);

  const setDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const result = `${year}-${month > 8 ? month + 1 : "0"+(month+1)}-${day > 9 ? day : "0" + day}`;
    setCurrentDate(result);
  }

  return (
    <Container>
      <Title>청소날짜를 선택해주세요.</Title>
      <CleanBox>
        <Icon source={require("../../../../Image/cleaning2.png")} />
        <TouchableOpacity onPress={() => setVisible(true)}>
          <DateBox select={true}>
            <DateText>
              {value.cleaningDate === "" ? currentDate : value.cleaningDate}
            </DateText>
          </DateBox>
        </TouchableOpacity>
      </CleanBox>
      <Modal 
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
      >
        <Calendars 
          setVisible={setVisible}
          calendarOption={{ 
            current: value.cleaningDate === "" ? currentDate : value.cleaningDate, 
            minDate: currentDate 
          }}
          setSelectDate={(data) => setValue({...value, cleaningDate: data})}
        /> 
      </Modal>
      { value.cleaningStyle === "이사 청소" && (
        <>
        <Title>이사짐이 있는 상태인가요?</Title>
        <Content>
          <TouchableOpacity onPress={() => setValue({...value, moved: "예"})}>
            <DateBox select={value.moved === "예"}>
              <DateText>예</DateText>
            </DateBox>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setValue({...value, moved: "아니요"})}>
            <DateBox select={value.moved === "아니요"}>
              <DateText>아니요</DateText>
            </DateBox>
          </TouchableOpacity>
        </Content>
        </>
      )}
    </Container>
  )
}