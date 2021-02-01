import React from "react";
import { 
  View, 
  Text,
  StyleSheet,  
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH } from "../../common/theme";

export default ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity 
      onPress={()=>navigation.navigate("FindEmail")}
    >
      <Text style={styles.findInfoText}>아이디 찾기</Text>
    </TouchableOpacity>
    <Text> / </Text>
    <TouchableOpacity 
      onPress={()=>navigation.navigate("FindPassword")}
    >
      <Text style={styles.findInfoText}>비밀번호 찾기</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignItems: "center" 
  },
  findInfoText: { 
    fontSize: 13, 
    textAlign: "right", 
    marginVertical: 2, 
  },
});