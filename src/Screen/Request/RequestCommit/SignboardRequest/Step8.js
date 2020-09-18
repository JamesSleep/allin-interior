import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { _WIDTH } from "../../../../common/theme";

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="간판글자"
        text2="를 입력하세요."
      />
      <View style={styles.content}>
        <View style={styles.preview}>
          <Text style={{ fontSize: _WIDTH/20, fontWeight: "500" }}>{!state.mainTitle ? "올인간판" : state.mainTitle }</Text>
          <Text style={{ fontSize: _WIDTH/35, fontWeight: "400", position: "absolute", bottom: 5, right: 10 }}>
            {!state.subTitle ? "서울점 TEL.7576-1780" : state.subTitle }
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowTitle}>
            <Text style={{ fontSize: _WIDTH/27, fontWeight: "500" }}>메인글자</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={{ height: "100%", fontSize: _WIDTH/27, paddingLeft: 10, }}
              placeholder="올인간판"
              onChangeText={text=>setState({...state, mainTitle: text})}
            />
          </View>
          <View style={styles.textCount}>
            <Text>{state.mainTitle.length}자</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowTitle}>
            <Text style={{ fontSize: _WIDTH/27, fontWeight: "500" }}>서브글자</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={{ height: "100%", fontSize: _WIDTH/27, paddingLeft: 10, }}
              placeholder="서울점 TEL.7576-1780"
              onChangeText={text=>setState({...state, subTitle: text})}
            />
          </View>
          <View style={styles.textCount}>
            <Text>{state.subTitle.length}자</Text>
          </View>
        </View>
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
    paddingHorizontal: _WIDTH/10,
    alignItems: "center",
  },
  preview: {
    width: _WIDTH*0.8,
    height: _WIDTH*0.25,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray"
  },
  rowContainer: {
    width: "100%",
    height: _WIDTH/8,
    marginVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowTitle: {
    flex: 1.3,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 3,
    width: "100%",
    height: "100%",
    marginHorizontal: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5
  },
  textCount: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
  }
});