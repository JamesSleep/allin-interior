import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { _WIDTH } from "../../../common/theme";
import SelectBox from "../../SelectBox";
import { getCityName, getDistrictName } from "../../../common/address_api";

export default ({ value, setValue }) => {
  const [areaArray, setAreaArray] = useState({
    cities: [],
    districts: []
  });
  const [city, setCity] = useState(value.city.id);
  useEffect(() => {
    getCities();
    if(city > 0) {
      getDistricts();
    }
  },[city]);
  const getCities = async () => {
    const data = await getCityName();
    const cities = data.map(city => {
      return {
        name: city.adm_nm,
        id: city.adm_cd,
      }
    });
    setAreaArray({...areaArray, cities});
  }
  const getDistricts = async () => {
    const data = await getDistrictName(city);
    const districts = data.map(district => {
      return {
        name: district.adm_nm,
        id: district.adm_cd,
      }
    });
    setAreaArray({...areaArray, districts});
  }
  const setSelect = (property, text, id) => {
    setCity(id);
    setValue({...value, [property]: {
      name: text,
      id: id
    }});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.columnTitle}>시공지역</Text>
      <View style={styles.rowContaier}>
        <View style={styles.content}>
          <SelectBox 
            list={areaArray.cities} 
            selected={value.city}
            setSelect={setSelect}
            property={"city"}
          />
        </View>
        <View style={styles.content}>
          <SelectBox 
            list={areaArray.districts} 
            selected={value.district}
            setSelect={setSelect}
            property={"district"}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _WIDTH/10,
  },
  columnTitle: {
    fontSize: _WIDTH/32,
    fontWeight: "400",
    marginBottom: _WIDTH/35
  },
  rowContaier: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  content: {
    width: "47%",
    height: _WIDTH * 0.1,
  }
});