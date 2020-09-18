import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../../../common/theme";
import Adress from "../../../../Components/SignUp/Adress";

export default ({ state, setState }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput 
          editable={false}
          style={[
            styles.input,
            { width: "70%" }
          ]}
          value={state.zipCode}
          placeholder="우편번호"
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>setVisible(true)}
        >
          <Text style={styles.text}>주소 검색</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={visible}>
        <Adress 
          window={setVisible}
          info={state}
          setInfo={setState}
        />
      </Modal>
      <TextInput 
        editable={false}
        style={styles.input}
        value={state.address1}
        placeholder="주소를 검색해주세요"
        placeholderTextColor="gray"
      />
      <TextInput 
        style={styles.input}
        value={state.address2}
        placeholder="상세주소 입력"
        placeholderTextColor="gray"
        onChangeText={text=>setState({...state, address2: text})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input : {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 13,
  },  
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: _WIDTH * 0.22,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5
  },
  text: {
    color: "white",
    fontSize: _WIDTH * 0.035,
  }
});