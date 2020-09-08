import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  Image,
  StyleSheet, 
  ScrollView, 
  Alert} from "react-native";
import FontAws from "react-native-vector-icons/FontAwesome";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";
import RadioButton from "../../Components/SignUp/RadioButton";
import { _WIDTH, _HEIGHT, nonActive, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Category from "../../Components/SignUp/Category";
import WritePortpolio from "../../Components/SignUp/WritePortpolio";
import ImageView from "../../Components/SignUp/ImageView";
import { getCityName, getDistrictName } from "../../common/address_api";
import SelectDistrict from "../../Components/SignUp/SelectDistrict";
import EditPortpolio from "../../Components/SignUp/EditPortpolio";
import { postData } from "../../Components/SignUp/PostData";

export default ({
  signUpData,
  setSignUpData,
  portpolioImg,
  setPortpolioImg,
  profileImg,
  setProfileImg,
  companyImg,
  setCompanyImg,
  postAPI,
}) => {
  const [visible, setVisible] = useState(false);
  const [profileImgVisible, setProfileImgVisible] = useState(false);
  const [radio, setRadio] = useState([ false, false, false, false ]);
  const [cities, setCities] = useState([{ id: 0, name: "" }]);
  const [selectCity, setSelectCity] = useState(0);
  const [cityVisible, setCityVisible] = useState(false);
  const [districts, setDistricts] = useState([{ id: 0, name: "" }]);
  const [selectDistrict, setSelectDistrict] = useState(0);
  const [districtVisible, setDistrictVisible] = useState(false);
  const [portpolioVisible, setPortpolioVisible] = useState(null);

  useEffect(()=>{
    if(cities.length < 2) {
      getCitys();
    }
    if(cities[selectCity].name.length > 1) {
      getDistrict(cities[selectCity].id);
    }
  },[cities, selectCity])
  const getCitys = async () => {
    try {
      let result = await getCityName();
      result = result.map(data => (
        { id: data.adm_cd, name: data.adm_nm }
      ));
      setCities(result);
    } catch(e) {
      console.log(e);
    }
  }
  const getDistrict = async (city) => {
    try {
      let result = await getDistrictName(city);
      result = result.map(data => (
        { id: data.adm_cd, name: data.adm_nm }
      ));
      setDistricts(result);
      setSelectDistrict(0);
    } catch (e) {
      console.log(e);
    }
  }
  const companyImgPick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      mediaType: "photo",
      multiple: true,
      includeBase64: true
    }).then(image => {
      setCompanyImg(
        image.map(image => ({
          image_path: image.path,
          data: image.data,
          image_tag: "company"
        }))
      )    
    }).catch(e => {
      console.log("image picker error :", e);
    })
  }
  const companyImgClean = (path) => {
    ImagePicker.cleanSingle(path).then(() => {
      if(companyImg.length === 1) {
        setCompanyImg([{
          image_path: null,
          data : null,
          image_tag: "company",
          visible: false,
        }])
        return;
      }
      companyImgSetVisible(path);
      setCompanyImg(
        companyImg.filter(image => 
          image.image_path !== path
        )
      );
    }).catch(e => {
      console.log("imageCleanError :",e);
    })
  }
  const companyImgSetVisible = (path) => {
    setCompanyImg(
      companyImg.map(image => {
        if(image.image_path === path) {
          image.visible = !image.visible;
          return image;
        } else return image;
      })
    );
  }
  const profileImgPick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      mediaType: "photo",
      includeBase64: true,
    }).then(image => {
      setProfileImg({...profileImg,
        image_path: image.path,
        data: image.data
      })
    }).catch(e => {
      console.log(e);
    })
  }
  const profileImgClean = (path) => {
    ImagePicker.cleanSingle(path).then(()=>{
      setProfileImg({...profileImg,
        image_path: null,
        data: null
      })
    }).catch(e => {
      console.log(e);
    })
  }
  const addDistrict = () => {
    const addData = `${cities[selectCity].name} ${districts[selectDistrict].name}`;
    //중복검사
    for(let i=0; i<signUpData.area.length; i++) {
      if(signUpData.area[i] === addData) {
        Alert.alert("이미 추가된 지역입니다!");
        return;
      }
    }
    setSignUpData({
      ...signUpData,
      area : [
        ...signUpData.area,
        addData
      ]
    });
  }
  const deleteDistrict = (district) => {
    setSignUpData({
      ...signUpData,
      area : signUpData.area.filter(
        dist => dist !== district
      )
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* 사진 등록 */}
        <View style={styles.componentContainer}>
          <Text style={styles.titleText}>
            사진을 등록해주세요.
          </Text>
          <View style={styles.pictureContainer}>
            <Text style={styles.pictureContainerText}>업체 사진</Text>
            { companyImg[0].image_path === null ?
              <MaterialComIcons 
                name="image-multiple-outline" 
                size={70} 
                onPress={()=>companyImgPick()}
              />:
              <ScrollView horizontal>
                {companyImg.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={()=>companyImgSetVisible(image.image_path)}
                  >
                    <Modal isVisible={image.visible}>
                      <ImageView 
                        title="업체 사진"
                        image_path={image.image_path}
                        setVisible={companyImgSetVisible}
                        clean={companyImgClean}
                      />
                    </Modal>
                    <Image 
                      source={{ uri: image.image_path }} 
                      style={{ width: 90, height: 90 }} 
                      resizeMode="cover" 
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            }
          </View>
          <View style={styles.pictureContainer}>
            <Text style={styles.pictureContainerText}>프로필 사진</Text>
            { profileImg.image_path === null ?
              <MaterialComIcons 
                name="image-multiple-outline" 
                size={70} 
                onPress={()=>profileImgPick()}
              /> :
              <TouchableOpacity onPress={()=>setProfileImgVisible(true)}>
                <Modal isVisible={profileImgVisible}>
                  <ImageView 
                    title="프로필 사진"
                    image_path={profileImg.image_path}
                    setVisible={setProfileImgVisible}
                    clean={profileImgClean}
                  />
                </Modal>
                <Image 
                  source={{ uri: profileImg.image_path }} 
                  style={{ width: 90, height: 90 }} 
                  resizeMode="cover" 
                />
              </TouchableOpacity>
            }
          </View>
        </View>
        {/* 업체선택 */}
        <View style={styles.componentContainer}> 
          <Text style={styles.titleText}>
            업체 선택을 해주세요.
          </Text>
          <View style={styles.radioContainer}>
            <View style={{ width: "50%" }}>
              <RadioButton 
                name="인테리어/건설 업체" 
                selected={0}
                selectArr={radio}
                setSelected={setRadio}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
              />
            </View>
            <View style={{ width: "50%" }}>
              <RadioButton 
                name="쇼핑몰 업체" 
                selected={1}
                selectArr={radio}
                setSelected={setRadio}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
              />
            </View>
          </View>
          <View style={styles.radioContainer}>
            <View style={{ width: "50%" }}>
              <RadioButton 
                name="청소 업체" 
                selected={2}
                selectArr={radio}
                setSelected={setRadio}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
              />
            </View>
            <View style={{ width: "50%" }}>
              <RadioButton 
                name="간판 업체" 
                selected={3}
                selectArr={radio}
                setSelected={setRadio}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
              />
            </View>
          </View>
        </View>
        {/* 작업가능지역 */}
        <View style={styles.componentContainer}>
          <Text style={styles.titleText}>작업가능한 지역을 선택하세요.</Text>
          <View style={styles.addressContainer}>
            <TouchableOpacity style={styles.addressSelector} onPress={()=>setCityVisible(true)}>
              <Modal isVisible={cityVisible}>
                <SelectDistrict 
                  setVisible={setCityVisible}
                  cities={cities}
                  selected={selectCity}
                  setSelected={setSelectCity}
                />
              </Modal>
              <Text style={{ fontSize: 12 }}>
                { cities.length > 1 ?
                  cities[selectCity].name : ""}
              </Text>
              <FontAws name="angle-down" size={_WIDTH/20} color={nonActive} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addressSelector} onPress={()=>setDistrictVisible(true)}>
              <Modal isVisible={districtVisible}>
                <SelectDistrict 
                  setVisible={setDistrictVisible}
                  cities={districts}
                  selected={selectDistrict}
                  setSelected={setSelectDistrict}
                />
              </Modal>
              <Text style={{ fontSize: 12 }}>
                { cities.length > 1 ? 
                  districts[selectDistrict].name : ""}
              </Text>
              <FontAws name="angle-down" size={_WIDTH/20} color={nonActive} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addressButton}
              onPress={()=>addDistrict()}
            >
              <Text style={{ fontSize: 13, color: "white" }}>추가</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
          {signUpData.area.map((district, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", marginRight: 8, }}
            >
              <Text style={{ fontSize: 12 }}>{district}</Text>
              <MaterialComIcons 
                name="close" 
                size={_WIDTH/30} 
                onPress={()=>deleteDistrict(district)}
              />
            </View>
          ))}
          </View>
        </View>
        {/* 작업가능분야 */}
        <View style={styles.componentContainer}>
          <Text style={styles.titleText}>작업가능한 분야를 선택하세요.</Text>
          <Category 
            signUpData={signUpData}
            setSignUpData={setSignUpData}
          />
        </View>
        {/* 포폴 */}
        <View style={styles.componentContainer}>
          <Text style={styles.titleText}>포트폴리오 (시공사례)</Text>
          <TouchableOpacity
            style={styles.portpolioAddButton}
            onPress={()=>setVisible(true)}
          >
            <Text style={{ fontSize: _WIDTH/30, color: "white" }}>
              포트폴리오 추가 +
            </Text>
          </TouchableOpacity>
          <Modal 
            isVisible={visible} 
            animationIn="slideInUp"
          >
            <WritePortpolio 
              setVisible={setVisible}
              portpolio={portpolioImg}
              setPortpolio={setPortpolioImg}
            />
          </Modal>
          { portpolioImg[0].image_path !== null &&
            portpolioImg.map((portpolio, index) => (
            <TouchableOpacity
              key={index}
              style={styles.portpolioEditButton}
              onPress={()=>setPortpolioVisible(index)}
            >
              <Modal isVisible={index === portpolioVisible}>
                <EditPortpolio
                  portpolio={portpolioImg}
                  setPortpolio={setPortpolioImg}
                  portpolioInfo={portpolio}
                  index={index}
                  setVisible={setPortpolioVisible}
                />
              </Modal>
              <Text style={styles.portpolioText}>
                {portpolio.title}
              </Text>
              <Image 
                source={{ uri: portpolio.image_path }}
                style={styles.portpolioImage}
                resizeMode="cover"
              />
              <View style={styles.portpolioShadow}/>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{ width: "100%", height: _WIDTH/8, justifyContent: "center" }} >
        <TouchableOpacity
          style={{ width: "100%", height: _WIDTH/12, backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
          onPress={()=>postAPI()}
        >
          <Text style={{ fontSize: _WIDTH/30, color: "white" }}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  componentContainer: {
    marginBottom: 30,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "500",
  },
  pictureContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  pictureContainerText: {
    fontSize: 13,
    width: 100,
    fontWeight: "300",
  },
  radioContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressSelector: {
    width: _WIDTH*0.32,
    height: 32,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: nonActive,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  addressButton: {
    width: _WIDTH*0.15,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5,
  },
  portpolioAddButton: {
    width: _WIDTH*0.32,
    height: _WIDTH*0.06,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: buttonColor ,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  portpolioEditButton: {
    width: "80%",
    height: 60,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    overflow: "hidden",
  },
  portpolioText: {
    position: "absolute",
    zIndex: 2,
    paddingLeft: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  portpolioImage: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  portpolioShadow: {
    position: "absolute", 
    zIndex: 1, 
    width: "100%", 
    height: "100%", 
    backgroundColor: "rgba(0,0,0,0.3)" 
  }
}) 