import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../common/theme";

export default ({ list=[], property, selected, setSelect }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={()=>setVisible(true)}
      >
        <Text style={{ fontSize: _WIDTH/28 }}>{selected.name}</Text>
        <Modal 
          isVisible={visible} 
          style={{ 
            justifyContent: "center", 
            alignItems: "center",
          }}
        >
          <View style={styles.modal}>
            <ScrollView>
              { list.map((object, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    styles.objectStyle,
                    object.name === selected.name && styles.select
                  ]}
                  onPress={()=>{
                    setSelect(property, object.name, object.id);
                    setVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      object.name === selected.name && { color: "white" }
                    ]}
                  >
                    {object.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  touch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: _WIDTH*0.7,
    height: _WIDTH*0.6,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden"
  },
  objectStyle: {
    width: "100%",
    height: _WIDTH*0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  select: {
    backgroundColor: buttonColor,
  },
  text: {
    fontSize: _WIDTH/28,
    fontWeight: "400",
    color: "black"
  }
});