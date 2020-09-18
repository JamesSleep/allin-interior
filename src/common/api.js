import axios from "axios";
import RNFetchBlob from "rn-fetch-blob";

const URL = "https://softer034.cafe24.com/api";
const JSON_HEADERS = { headers: { "Content-Type" : "application/json" } };
const FORM_HEADERS = { 
	"Content-Type" : "multipart/form-data",
	Authorization: "Bearer access-token",
	otherHeader: "foo",
};

const postRequest = (path, data, headers) => axios.post(`${URL}/${path}/`, data, headers);
const imageRequest = async (path, getData, headers) => {
	try {
		const {
			success, data 
		} = await RNFetchBlob.fetch('POST', `${URL}/${path}`, headers, getData)
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

export const SignUpAPI = async postData  => getDataPOST("SignUp", postData, JSON_HEADERS); //회원가입 API
export const CompanySignUpAPI = async postData => getDataPOST("CompanySignUp", postData, JSON_HEADERS); //업체회원가입 API
export const LoginAPI = async postData  => getDataPOST("Login", postData, JSON_HEADERS); //로그인 API
export const MemberImage = async postData  => imageRequest("MemberImage", postData, FORM_HEADERS); //이미지업로드 API
export const CompanyAreaAPI = async postData => getDataPOST("CompanyArea", postData, JSON_HEADERS); //업체회원가입 업무지역
export const CompanyCategoryAPI = async postData => getDataPOST("CompanyCategory", postData, JSON_HEADERS); //업체회원가입 카테고리
export const CompanyImage = async postData => imageRequest("CompanyImage", postData, FORM_HEADERS); //업체 이미지 업로드 API
export const CompanyPortpolioAPI = async postData => getDataPOST("CompanyPortpolio", postData, JSON_HEADERS); //업체회원가입 포트폴리오
export const CompanyPortpolioImgAPI = async postData => imageRequest("CompanyPortpolioImage", postData, FORM_HEADERS); //업체회원가입 포트폴리오 이미지
export const UserInfoAPI = async postData => getDataPOST("UserInfo", postData, JSON_HEADERS);
export const EditProfileAPI = async postData => getDataPOST("EditProfile", postData, JSON_HEADERS);
export const CompanyInfoAPI = async postData => getDataPOST("CompanyInfo", postData, JSON_HEADERS);
export const CompanyListAPI = async () => getDataPOST("CompanyList", "", JSON_HEADERS);
export const ResidentialPostAPI = async postData => getDataPOST("ResidentialRequest", postData, JSON_HEADERS);
export const CommercialPostAPI = async postData => getDataPOST("CommercialRequest", postData, JSON_HEADERS);
export const CleaningPostAPI = async postData => getDataPOST("CleaningRequest", postData, JSON_HEADERS);