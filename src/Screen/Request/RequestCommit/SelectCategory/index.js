import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import Footer from "../../../../Components/Request/Footer";
import LogoView from "../../../../Components/Request/LogoView";
import RequestText from "../../../../Components/Request/RequestText";
import RequestMenu from "../../../../Components/Request/RequestMenu";

const options = [
  { 
    name: "주거공간", 
    route: "Residential",
    screen: "StructRequest",
    icon: require("../../../../Image/residential.png") 
  },
  { 
    name: "상업공간", 
    route: "Commercial",
    screen: "StructRequest",
    icon: require("../../../../Image/office.png") 
  },
  { 
    name: "청소", 
    route: "",
    screen: "",
    icon: require("../../../../Image/interior_cleaning.png") 
  },
  { 
    name: "간판", 
    route: "",
    screen: "",
    icon: require("../../../../Image/regular_cleaning.png") 
  },
];

export default ({ navigation, route }) => {
  const [option, setOption] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}><LogoView /></View>
      <View style={{ flex: 2.5 }}>
        <RequestText 
          text1="시공 타입"
          text2="을 선택해주세요"
        />
      </View>
      <View style={{ flex: 5 }}>
        <RequestMenu 
          options={options}
          setOption={setOption}
          selected={option}
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <Footer 
          navigation={navigation}
          next={options[option].screen}
          pararms={options[option].route}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});


//1 1.8 5.5 1.1 