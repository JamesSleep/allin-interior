import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import Calendars from "../../Calendars";
import Title from "./Title";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin-bottom: 30px;
`;

const TextInput = styled.TextInput`
  height: 50px;
  padding: 0px 15px;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 10px;
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
      <Title title="완공일" />
      <TouchableOpacity onPress={() => setVisible(true)}>
        <TextInput 
          value={value.date}
          editable={false}
          //keyboardType="number-pad"
          onChangeText={text => setValue({...value, date: text})}
          placeholder="날짜를 선택해주세요"
          placeholderTextColor="gray"
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
      >
        <Calendars 
          setVisible={setVisible}
          calendarOption={{
            current: value.date === "" ? currentDate : value.date,
            minDate: currentDate
          }}
          setSelectDate={(data) => setValue({...value, date: data})}
        />
      </Modal>
    </Container>
  )
}