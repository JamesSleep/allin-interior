import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { _WIDTH, buttonColor, nonActive } from "../../../../common/theme";
import Calendars from "../../../../Components/Calendars";

export default ({ state, setState }) => {
  const isMoving = !(state.cleaningType === "입주 청소" ||
    state.cleaningType === "이사 청소");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const setCanlenderOption = (property) => {
    const date = new Date();
    const today = dateFormat(date);
    const tomorrow = dateFormat(new Date(
      date.getTime() + 86400000
    ));
    const current = property === "cleaningDate" ?
      state.cleaningDate !== "" ?
      state.cleaningDate : tomorrow :
      state.moveDate !== "" ? 
      state.moveDate : tomorrow;
    return {
      current: current,
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
    setState({...state, cleaningDate: date})
  }
  const setSelectDate2 = date => {
    setState({...state, moveDate: date})
  }
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="청소날짜와 이사날짜"
        text2="를 선택하세요"
      />
      <View style={styles.content}>
        {/* 청소날짜 */}
        <View style={styles.dateBox}>
          <Image 
            source={require("../../../../Image/cleaning2.png")}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.picker}
            onPress={()=>setVisible(true)}
          >
            <Text style={styles.dateText}>{setCanlenderOption("cleaningDate").current}</Text>
          </TouchableOpacity>
        </View>
        {/* 이사날짜 */}
        <View style={styles.dateBox}>
          <Image 
            source={require("../../../../Image/moving.png")}
            style={styles.icon}
          /> 
          <TouchableOpacity
            style={[
              styles.picker, 
              isMoving &&
              { borderWidth: 0.5, borderColor: nonActive }
            ]}
            disabled={isMoving}
            onPress={()=>setVisible2(true)}
          >
            <Text 
              style={[
                styles.dateText,
                isMoving && { color: nonActive }
              ]}
            >
              {setCanlenderOption("moveDate").current}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={visible}
          animationIn="slideInUp"
          onBackdropPress={()=>setVisible(false)}
        >
          <Calendars 
            setVisible={setVisible}
            setSelectDate={setSelectDate}
            calendarOption={setCanlenderOption("cleaningDate")}
          />
        </Modal>
        <Modal
          isVisible={visible2}
          animationIn="slideInUp"
          onBackdropPress={()=>setVisible2(false)}
        >
          <Calendars 
            setVisible={setVisible2}
            setSelectDate={setSelectDate2}
            calendarOption={setCanlenderOption("moveDate")}
          />
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 3,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 50,
    justifyContent: "flex-start",
  },
  dateBox: {
    width: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    width: _WIDTH/8,
    height: _WIDTH/8,
  },
  picker: {
    width: _WIDTH*0.4,
    height: _WIDTH*0.15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: buttonColor,
  },
  dateText: {
    fontSize: 15,
    fontWeight: "400"
  }
});