import axios from "axios";
import RNFetchBlob from "rn-fetch-blob";

export const URL = "https://softer034.cafe24.com/api";
const JSON_HEADERS = { headers: { "Content-Type": "application/json" } };
const FORM_HEADERS = {
	"Content-Type": "multipart/form-data",
	Authorization: "Bearer access-token",
	otherHeader: "foo",
};

const postRequest = (path, data, headers) => axios.post(`${URL}/${path}/index.php`, data, headers);
const imageRequest = async (path, getData, headers) => {
	try {
		const {
			success, data
		} = await RNFetchBlob.fetch('POST', `${URL}/${path}/`, headers, getData)
			.then(res => res.json())
			.then(res => { return res });
		return [success, data || null];
	} catch (e) {
		console.log("error :", e);
		return null;
	}
}

const getDataPOST = async (path, postData, headers) => {
	try {
		const {
			data: { success, data },
		} = await postRequest(path, postData, headers);
		return [success, data || null];
	} catch (e) {
		console.log("error :", e);
		return null;
	}
}

export const SignUpAPI = async postData => getDataPOST("USER/SignUp", postData, JSON_HEADERS); //회원가입 API
export const ImageUploadAPI = async postData => imageRequest("ImageUpload", postData, FORM_HEADERS); //이미지업로드 API
export const CompanySignUpAPI = async postData => getDataPOST("COMPANY/SignUp", postData, JSON_HEADERS); //업체회원가입 API
export const LoginAPI = async postData => getDataPOST("Login", postData, JSON_HEADERS); //로그인 API
export const SaltReturnAPI = async postData => getDataPOST("Login/Salt", postData, JSON_HEADERS); // 암호화 토큰 조회
export const UserInfoAPI = async postData => getDataPOST("USER/GetUser", postData, JSON_HEADERS); // 유저정보조회
export const CompanyInfoAPI = async postData => getDataPOST("COMPANY/GetCompany", postData, JSON_HEADERS); // 회사정보조회
export const CompanyOneInfoAPI = async postData => getDataPOST("COMPANY/GetOneCompany", postData, JSON_HEADERS); // 자기회사조회
export const PostStoryAPI = async postData => getDataPOST("Story/Write", postData, JSON_HEADERS); // 스토리 공유
export const GetStoryAPI = async postData => getDataPOST("Story/GetStory", postData, JSON_HEADERS);  // 스토리 리스트 조회
export const DeleteStoryAPI = async postData => getDataPOST("Story/DeleteStory", postData, JSON_HEADERS);  // 스토리 삭제
export const NewEstimateAPI = async postData => getDataPOST("Estimate/NewEstimate", postData, JSON_HEADERS); // 주문 등록
export const GetEstimateAPI = async postData => getDataPOST("Estimate/GetEstimate", postData, JSON_HEADERS); // 주문 조회
export const GetFollowAPI = async postData => getDataPOST("USER/GetFollow", postData, JSON_HEADERS); // 팔로우 조회
export const UpdateEstimateAPI = async postData => getDataPOST("Estimate/UpdateEstimate", postData, JSON_HEADERS); // 주문 업데이트
export const GetProductAPI = async postData => getDataPOST("PRODUCT/GetProduct", postData, JSON_HEADERS); // 상품 조회
export const GetOneProductAPI = async postData => getDataPOST("PRODUCT/GetOneProduct", postData, JSON_HEADERS); // 상품 하나 조회
export const NewCartAPI = async postData => getDataPOST("CART/NewCart", postData, JSON_HEADERS); // 장바구니 상품추가
export const GetCartAPI = async postData => getDataPOST("CART/GetCart", postData, JSON_HEADERS); // 장바구니 load
export const UpdateCartAPI = async postData => getDataPOST("CART/UpdateCart", postData, JSON_HEADERS); // 장바구니 수정
export const DeleteCartAPI = async postData => getDataPOST("CART/DeleteCart", postData, JSON_HEADERS); // 장바구니 삭제
export const NewCommentAPI = async postData => getDataPOST("COMMENT/NewComment", postData, JSON_HEADERS); // 댓글 작성
export const GetCommentAPI = async postData => getDataPOST("COMMENT/GetComment", postData, JSON_HEADERS); // 댓글 불러오기
export const GetHeartAPI = async postData => getDataPOST("HEART/GetHeart", postData, JSON_HEADERS); // 좋아요불러오기
export const NewHeartAPI = async postData => getDataPOST("HEART/NewHeart", postData, JSON_HEADERS); // 좋아요추가
export const DeleteHeartAPI = async postData => getDataPOST("HEART/DeleteHeart", postData, JSON_HEADERS); // 좋아요취소
export const NewDeliveryAPI = async postData => getDataPOST("DELIVERY/NewDelivery", postData, JSON_HEADERS); // 쇼핑주문추가
export const NewFollowAPI = async postData => getDataPOST("FOLLOW/NewFollow", postData, JSON_HEADERS);
export const DeleteFollowAPI = async postData => getDataPOST("FOLLOW/DeleteFollow", postData, JSON_HEADERS);
export const NewShopAPI = async postData => getDataPOST("SHOP/NewShop", postData, JSON_HEADERS); // 쇼핑몰 추가
export const GetShopAPI = async postData => getDataPOST("SHOP/GetShop", postData, JSON_HEADERS); // 쇼핑몰 추가
export const NewInteriorAPI = async postData => getDataPOST("INTERIOR/NewInterior", postData, JSON_HEADERS); // 견적신청
export const InteriorImgAPI = async postData => imageRequest("INTERIOR/ImageUpload", postData, FORM_HEADERS); // 견적신청이미지
export const GetInteriorAPI = async postData => getDataPOST("INTERIOR/GetInterior", postData, JSON_HEADERS); // 견적조회
export const DeleteInteriorAPI = async postData => getDataPOST("INTERIOR/DeleteInterior", postData, JSON_HEADERS); // 견적삭제
