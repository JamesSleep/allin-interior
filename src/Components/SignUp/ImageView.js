import React from "react";
import {
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { buttonColor, nonActive, _WIDTH } from "../../common/theme";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ 
  title, 
  image_path, 
  clean, 
  setVisible 
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{
        width: "95%",
        height: 500,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 10,
        alignItems: "center"
      }}>
        <View style={{ 
          width: "100%", 
          height: 50, 
          justifyContent: "center",
          paddingHorizontal: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: "white"
        }}>
          <Text style={{ color: "white", fontSize: 15, }}>{title}</Text>
        </View>
        <View style={{
          width: "100%",
          height: 350,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Image 
            source={{ uri: image_path }}
            style={{ width: "80%", height: "80%" }}
            resizeMode="contain"
          />
        </View>
        <View style={{
          width: "100%",
          height: 100,
          alignItems: "center"
        }}>
          <TouchableOpacity 
            style={styles.buttonDelete}
            onPress={()=>clean(image_path)}
          >
            <Text style={{ color: "white", fontSize: 16 }}>삭제</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonClose}
            onPress={()=>{
              if(title === "업체 사진") {
                setVisible(image_path);
              } else {
                setVisible(false);
              }
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonClose: {
    width: _WIDTH*0.6,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: nonActive
  },
  buttonDelete: {
    width: _WIDTH*0.6,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: buttonColor
  }
})