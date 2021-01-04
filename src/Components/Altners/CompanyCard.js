import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, backgroundColor } from "../../common/theme";
import { imagePathFormat } from "../../utils/imagePathFormat";
import Votes from "./Votes";

export default ({ info, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("CompanyInfo", { info })}>
      <View>
        <Image
          source={{ uri: imagePathFormat(info.landscape) }}
          style={styles.background}
        />
        <Votes />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.profileOuter}>
          <Image
            source={{ uri: imagePathFormat(info.profile) }}
            style={styles.profile}
          />
        </View>
        <View>
          <View style={styles.itemColumn}>
            <Text style={styles.title}>{info.business_name}</Text>
            <View style={styles.tier}>
              <Text style={styles.tierText}>기능사</Text>
            </View>
          </View>
          <View style={styles.tagColumn}>
            <Text style={styles.tag}>전체시공</Text>
            <Text style={styles.tag}>부분시공</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 280,
    marginBottom: _WIDTH / 15,
    borderRadius: 10,
    backgroundColor: "rgba(250, 250, 250, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    //overflow: "hidden",
  },
  background: {
    width: "100%",
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    height: 110,
    paddingVertical: _WIDTH / 40,
    paddingHorizontal: _WIDTH / 20,
    alignItems: "center",
  },
  profileOuter: {
    width: 70,
    height: 70,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    overflow: "hidden"
  },
  profile: {
    width: 70,
    height: 70,
  },
  itemColumn: {
    width: "70%",
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    marginLeft: _WIDTH / 20,
  },
  title: {
    fontSize: _WIDTH / 20,
    fontWeight: "600",
  },
  tagColumn: {
    flexDirection: "row",
    paddingHorizontal: _WIDTH / 20,
    marginTop: 8,
  },
  tag: {
    fontSize: _WIDTH / 30,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E9EDF2",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  tier: {
    width: _WIDTH / 6,
    height: _WIDTH / 20,
    backgroundColor: "#ff7675",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 5,
  },
  tierText: {
    color: "white",
    fontSize: _WIDTH / 30,
  }
});