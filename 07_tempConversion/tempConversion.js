const convertToCelsius = function(celsius) {
  let CEL =(  celsius-32)*(5/9);
  return Math.round(CEL*10)/10 ;
  //return Math.round((celsius*(9/5) +32)*10)/10;
};

const convertToFahrenheit = function(far) {
  let FAR=far*(9/5) +32;
  return Math.round(FAR*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
