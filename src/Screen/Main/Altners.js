import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { nonActive } from "../../common/theme";
import { Filter } from "../../Components/Altners/Filter";
import CompanyCard from "../../Components/Altners/CompanyCard";

const filterList = [ "인테리어", "청소", "간판", "건설업체" ];

const Altners = ({ navigation }) => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.mainContainer}>
      {/* 필터 */}
      <View style={styles.filter}>
        { filterList.map((filter, index) => (
          <Filter 
            key={index} 
            index={index}
            text={filter} 
            selected={selected} 
            setSelected={setSelected} 
          />
        ))}
      </View>
      {/* 업체목록 */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 25, paddingVertical: 15, }}>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  filter: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: nonActive
  }
});

export default Altners;