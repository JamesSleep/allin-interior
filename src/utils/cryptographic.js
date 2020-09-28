import CryptoJS from "crypto-js";

export const createSalt = () => {
  return CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
}

export const cryptoGraphic = ( password="", salt="") => {
  const _salt = salt; 
  const keySize = 128;
  const iterationCount = 10000;
  const key128bitIteration = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(_salt), {
    keySize: keySize/32, iteration: iterationCount
  });

  return key128bitIteration.toString(CryptoJS.enc.Hex);
}

