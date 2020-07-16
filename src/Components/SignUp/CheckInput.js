export const CheckInput = ( inputType, value ) => {
  switch (inputType) {
    case "id": {
      if(value.id.length > 0) {
        if(value.id.length < 6 && value.id.length > 10) return false;
        let number=false; let lowerCase=false; let upperCase=false; let other=true;
        for(let i=0; i<value.id.length; i++) {
          if(value.id.charCodeAt(i) > 47 && value.id.charCodeAt(i) < 58) {
            number=true;
            continue;
          }
          if(value.id.charCodeAt(i) > 64 && value.id.charCodeAt(i) < 91) {
            lowerCase=true;
            continue;
          }
          if(value.id.charCodeAt(i) > 96 && value.id.charCodeAt(i) < 123) {
            upperCase=true;
            continue;
          }
          other=false;
        }
        return other*number*(lowerCase+upperCase);
      } else return true;
    }
    case "password1": {
      if(value.password1.length > 0) {
        if(value.password1.length < 6 && value.password1.length > 15) return false;
        let number=false; let lowerCase=false; let upperCase=false; 
        let other=true; let spacialCase=false;
        for(let i=0; i<value.password1.length; i++) {
          if(value.password1.charCodeAt(i) > 47 && value.password1.charCodeAt(i) < 58) {
            number=true;
            continue;
          }
          if(value.password1.charCodeAt(i) > 64 && value.password1.charCodeAt(i) < 91) {
            lowerCase=true;
            continue;
          }
          if(value.password1.charCodeAt(i) > 96 && value.password1.charCodeAt(i) < 123) {
            upperCase=true;
            continue;
          }
          if(value.password1.charCodeAt(i) > 32 && value.password1.charCodeAt(i) < 127) {
            spacialCase=true;
            continue;
          }
          other=false;
        }
        return other*number*lowerCase*upperCase*spacialCase;
      } else return true;
    }
    case "password2": {
      if(value.password2.length > 0) {
        if(value.password1 === value.password2) return true;
        else return false;
      } else return true;
    }
    default:
      break;
  }
}