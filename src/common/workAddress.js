let result = "";
let searchArray = [];

const textSearch = (array, text) => {
  for(let i=0; i<array.length; i++) {
    if(array[i] === text) {
      return false;
    }
  }
  return true;
}

export const workAddress = text_array => {
  for(let i=0; i<text_array.length; i++) {
    const text = text_array[i].substring(0,2);
    if(textSearch(searchArray, text)) {
      searchArray.push(text);
      if(i === 0) result = text;
      else result += `/${text}`;
    }
  }
  return result;
}