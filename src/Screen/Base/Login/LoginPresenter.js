import React from "react";
import { TouchableWithoutFeedback, Keyboard, View, StyleSheet } from "react-native";
import { backgroundColor, _WIDTH } from "../../../common/theme";
import Logo from "../../../Components/Login/Logo";
import FindInfo from "../../../Components/Login/FindInfo";
import InputData from "../../../Components/Login/InputData";
import Options from "../../../Components/Login/Options";
import CommitButton from "../../../Components/Login/CommitButton";
import Social from "../../../Components/Login/Social";

export default ({ loginInfo, setState, navigation }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Logo />
      <View style={styles.loginContainer}>
        <FindInfo navigation={navigation}/>
        <InputData 
          email={loginInfo.email}
          password={loginInfo.password}
          setState={setState}
        />
        <Options 
          autoLogin={loginInfo.autoLogin}
          saveID={loginInfo.saveID}
          setState={setState}
        />
        <CommitButton 
          navigation={navigation}
        />
      </View>
      <Social />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: _WIDTH/17
  },
  loginContainer: { 
    flex: 4, 
    justifyContent: "center", 
    alignItems: "center", 
  },
})