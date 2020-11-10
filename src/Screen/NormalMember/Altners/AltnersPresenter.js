import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor, _WIDTH } from "../../../common/theme";
import Header from "../../../Components/Altners/Header";
import CompanyCard from "../../../Components/Altners/CompanyCard";

export default ({ navigation, companies = [] }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: _WIDTH / 30,
        paddingHorizontal: _WIDTH / 25,
      }}
    >
      {companies.length > 0 && (
        companies.map((company, index) => (
          <CompanyCard
            name={company.business_name}
            city={company.city}
            district={company.district}
          />
        ))
      )}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});