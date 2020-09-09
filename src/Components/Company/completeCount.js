const tier = [
  "기능사", "산업기사", "기사", "기술사", "기능장", "명장"
];


export const completeCount = (num) => {
  if(num >= 21) return tier[5];
  else if(num >= 16) return tier[4];
  else if(num >= 11) return tier[3];
  else if(num >= 6) return tier[2];
  else if(num >= 1) return tier[1];
  else return tier[0];
};