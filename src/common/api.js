import axios from "axios";
import RNFetchBlob from "rn-fetch-blob";

export const URL = "https://softer034.cafe24.com/api";
const JSON_HEADERS = { headers: { "Content-Type" : "application/json" } };
const FORM_HEADERS = { 
	"Content-Type" : "multipart/form-data",
	Authorization: "Bearer access-token",
	otherHeader: "foo",
};

const postRequest = (path, data, headers) => axios.post(`${URL}/${path}/index.php`, data, headers);
const imageRequest = async (path, getData, headers) => {
	try {
		const {
			success, data 
		} = await RNFetchBlob.fetch('POST', `${URL}/${path}/`, headers, getData)
		.then(res=> res.json())
		.then(res=> { return res });
		return [success, data || null];
	} catch (e) {
		console.log("error :", e);
		return null;
	}
}

const getDataPOST = async (path, postData, headers) => {
	try {
		const {
			data : { success, data }, 
		} = await postRequest(path, postData, headers);
		return [success, data || null];
	} catch (e) {
		console.log("error :", e);
		return null;
	}
}

export const SignUpAPI = async postData  => getDataPOST("USER/SignUp", postData, JSON_HEADERS); //회원가입 API
export const ImageUploadAPI = async postData  => imageRequest("ImageUpload", postData, FORM_HEADERS); //이미지업로드 API
export const CompanySignUpAPI = async postData => getDataPOST("COMPANY/SignUp", postData, JSON_HEADERS); //업체회원가입 API
export const LoginAPI = async postData  => getDataPOST("Login", postData, JSON_HEADERS); //로그인 API
export const SaltReturnAPI = async postData => getDataPOST("Login/Salt", postData, JSON_HEADERS); // 암호화 토큰 조회
export const UserInfoAPI = async postData => getDataPOST("USER/GetUser", postData, JSON_HEADERS); // 유저정보조회
export const CompanyInfoAPI = async postData => getDataPOST("COMPANY/GetCompany", postData, JSON_HEADERS); // 회사정보조회
export const PostStoryAPI = async postData => getDataPOST("Story/Write", postData, JSON_HEADERS); // 스토리 공유
export const GetStoryAPI = async postData => getDataPOST("Story/GetStory", postData, JSON_HEADERS);  // 스토리 리스트 조회