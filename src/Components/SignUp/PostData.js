import { 
  CompanySignUpAPI, 
  CompanyAreaAPI, 
  CompanyCategoryAPI, 
  CompanyImage,
  CompanyPortpolioAPI,
  CompanyPortpolioImgAPI
} from "../../common/api";

export const postData = async (
  signUp, 
  busuiness,
  portpolio,
  companyImg,
  profile,
) => {
  const companySignUp = JSON.stringify({
    "companyId": signUp.companyId,
    "password": signUp.password,
    "campanyName": signUp.companyName,
    "componyEmail": signUp.componyEmail,
    "companyPhone": signUp.companyPhoneNum,
    "businessNumber": signUp.businessNumber,
    "ceoName": signUp.ceoName,
    "ceoPhone": signUp.ceoPhoneNum,
    "type": signUp.type
  });
  const area = signUp.area.map(value => (
    JSON.stringify({
      "companyId": signUp.companyId,
      "area": value
    })
  ));
  const categories = signUp.categories.map(value => (
    JSON.stringify({
      "companyId": signUp.companyId,
      "category": value
    })
  ));
  const busuinessImgData = [
    { name: "image", filename: "image.png", type: "image/png", data: busuiness.data },
    { name: "image_tag", data: busuiness.image_tag },
    { name: "company_id", data: signUpData.companyId },
  ];
  const portpolioData = portpolio.map(data => (
    JSON.stringify({
      "companyId": signUp.companyId,
      "title": data.title,
      "content": data.content
    })
  ));
  const portpolioImgData = portpolio.map((data, index) => ([
    { name: "image", filename: "image.png", type: "image/png", data: data.data },
    { name: "image_tag", data: data.Image_tag },
    { name: "company_id", data: signUpData.companyId },
  ]));
  const companyImgData = companyImg.map((data, index) => ([
    { name: "image", filename: "image.png", type: "image/png", data: data.data },
    { name: "image_tag", data: data.Image_tag },
    { name: "company_id", data: signUpData.companyId },
  ]));
  const profileImgData = [
    { name: "image", filename: "image.png", type: "image/png", data: profile.data },
    { name: "image_tag", data: profile.Image_tag },
    { name: "company_id", data: signUpData.companyId },
  ];

  let result = await CompanySignUpAPI(companySignUp);
  if(!result[0]) return false;
  result = await CompanyAreaAPI(area);
  if(!result[0]) return false;
  for(let i=0; i<categories.length; i++) {
    result = await CompanyCategoryAPI(categories[i]);
    if(!result[0]) return false;
  }
  result = await CompanyImage(busuinessImgData);
  if(!result[0]) return false;
  result = await CompanyImage(profileImgData);
  if(!result[0]) return false;
  for(let i=0; i<portpolioData.length; i++) {
    result = await CompanyPortpolioAPI(portpolioData[i]);
    if(!result[0]) return false;
    result = await CompanyPortpolioImgAPI(
      portpolioImgData[i].push({
        name: "pp_index", data: result[1]
      })
    );
    if(!result[0]) return false;
  }
  return true;
}