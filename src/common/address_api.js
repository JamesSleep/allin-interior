import axios from "axios";

//https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json 토큰 값 받기

//https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json 시, 도

const URL = "https://sgisapi.kostat.go.kr/OpenAPI3";
const getToken = "auth/authentication.json";
const getPopulation = "stats/population.json";
const consumer_key = "b2c40aa46b0d43cbac59";
const consumer_secret= "8f990e762d784d81a01f";

const requestToken = async () => {
  const params = `consumer_key=${consumer_key
    }&consumer_secret=${consumer_secret}`;
  try {
    const {
      data : {
        result : { accessToken }
      }
    } = await getRequest(getToken, params);
    return accessToken;
  } catch (e) {
    console.log(e);
  }
}

const getRequest = (path, params) => axios.get(`${URL}/${path}?${params}`);

const getDataGET = async (city_num) => {
  const accessToken = await requestToken();
  const params = `accessToken=${
    accessToken
  }&year=2018&low_search=1${
    city_num ? "&adm_cd="+city_num.toString() : ""
  }`;
  try {
    const {
      data : { result } // return array
    } = await getRequest(getPopulation,params);
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
}

//시 이름 
export const getCityName = async () => getDataGET();
//구 이름
export const getDistrictName = async city_num => getDataGET(city_num);