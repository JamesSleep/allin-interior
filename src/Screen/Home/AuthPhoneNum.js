import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { _HEIGHT, _WIDTH, buttonColor, backgroundColor } from "../../common/theme";
import Icon from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from "react-native-gesture-handler";
import ActionCreator from "../../redux/action";
import { connect } from "react-redux";

const AuthPhoneNum = ({ navigation, screen }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.headContainer}>
					<Icon 
						name="angle-left" 
						size={_WIDTH/12} 
						onPress={()=>navigation.navigate("SignUp")}
						style={{ position: "absolute", left: 0 }}
					/>
					<Text style={{ fontSize: _WIDTH/22, }}>회원가입</Text>
				</View>
				<View	style={{ width: "100%", height: _WIDTH * 0.7, justifyContent: "center", alignItems: "center" }}>
					<Text style={{ fontSize: _WIDTH/21, fontWeight: "600", marginBottom: 25, }}>본인인증</Text>
					<Text style={{ fontSize: _WIDTH/31, marginBottom: 5}}>올인 서비스를 이용하시려면 본인인증이 필요합니다.</Text>
					<Text style={{ fontSize: _WIDTH/31 }}>본인인증은 최초 1회만 필요합니다.</Text>
				</View>
				<View	style={{ width: "100%", height: _WIDTH * 0.5, justifyContent: "center", alignItems: "center", }}>
					<TouchableOpacity
						style={{ 
							width: _WIDTH * 0.85, 
							height: _WIDTH/10, 
							backgroundColor: buttonColor, 
							justifyContent: "center", 
							alignItems: "center",
							borderRadius: 5,
						}}
						onPress={()=>{
							if( screen === "member" )
								navigation.navigate("SignUp2");
							else if( screen === "company" )
								navigation.navigate("CompanySignUp");
						}}
					>
						<Text style={{ fontSize: _WIDTH/28, color: "white" }}>본인인증 하기</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container : {
		flex : 1,
		paddingHorizontal: 25,
		paddingVertical: 10,
		backgroundColor: backgroundColor
	},
	headContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: _HEIGHT/20,
  },
});

function mapStateToProps(state) {
  return {
    screen: state.screen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSignUpType: (screen) => {
      dispatch(ActionCreator.setSignUp(screen));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPhoneNum);