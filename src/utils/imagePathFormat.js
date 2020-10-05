import { URL } from "../common/api";

export const imagePathFormat = (uri="") => {
  return `${URL}${uri.substring(2)}`;
}