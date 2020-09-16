import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import Calendars from "../../../../Components/Calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../../../common/theme";

export default ({ selectDate="", setDate }) => {
  const [visible, setVisible] = useState(false);
  const setCanlenderOption = () => {
    const date = new Date();
    const today = dateFormat(date);
    const tomorrow = dateFormat(new Date(
      date.getTime() + 86400000
    ));
    return {
      current: selectDate !== "" ? selectDate : tomorrow,
      minDate: today
    };
  }
  const dateFormat = (date) => {
    return (
      `${date.getFullYear()}-${
        date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
      }-${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}`
    );
  }
  const setSelectDate = date => {
    setDate("hopeDate", date)
  }
  return (
    <View style={styles.container}> 
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setVisible(true)}
      >
        <Text style={{ fontSize: 14, color: "gray" }}>
          { selectDate === "" ? 
            "날짜를 선택해주세요": 
            selectDate }
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        onBackdropPress={()=>setVisible(false)}
      >
        <Calendars 
          setVisible={setVisible}
          setSelectDate={setSelectDate}
          calendarOption={setCanlenderOption()}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: _WIDTH-50,
    height: 40,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 15,
    justifyContent: "center",
  }
})