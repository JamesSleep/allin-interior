import React from "react"
import { View, StyleSheet } from "react-native"
import { nonActive, _WIDTH } from "../common/theme"
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales['kr'] = {
  monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
  dayNames: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
  dayNamesShort: ["일","월","화","수","목","금","토"],
}
LocaleConfig.defaultLocale = "kr";

/* 
  *** calendar options ***
  current,
  minDate,

*/

export default ({ 
  setVisible, 
  calendarOption={
    current: "", minDate: ""
  }, 
  setSelectDate 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Calendar 
          style={styles.calendar}
          current={calendarOption.current}
          minDate={calendarOption.minDate}
          monthFormat={'yyyy년 MMMM'}
          onDayPress={(day)=>{
            setSelectDate(day.dateString);
            setVisible(false);
          }}
          markedDates={{
            [calendarOption.current]: {
              selected: true
            }
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: 300,
    height: 380,
    padding: 2,
    backgroundColor: nonActive,
    borderRadius: 5,
  },
  calendar: {
    width: "100%",
    height: "100%",
  }
})