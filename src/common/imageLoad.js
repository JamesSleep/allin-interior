const SITE_URL = "http://softer034.cafe24.com/api";

export const imageLoad = (image_path) => {
  return `${SITE_URL}${image_path?.substring(2)}`;
}