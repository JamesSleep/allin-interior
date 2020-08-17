import axios from "axios";

const URL = "http://softer034.cafe24.com/api";
const HEADERS = { headers: { "Content-Type" : "application/json" } };

const postRequest = (path, data) => axios.post(`${URL}/${path}/index.php`, data, HEADERS);

const getDataPOST = async (path, data) => {
	try {
		const {
			data : { success } 
		} = await postRequest(path, data);
		return success;
	} catch (e) {
		console.log(e);
		return null;
	}
}

export const SignUpAPI = async( postData ) => getDataPOST("SignUp", postData); //회원가입 API
export const LoginAPI = async( postData ) => getDataPOST("Login", postData); //로그인 API