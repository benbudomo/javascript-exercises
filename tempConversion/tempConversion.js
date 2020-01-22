const ftoc = function(currentFarenheit) {
  let newCelsius = (currentFarenheit - 32) * (5/9);
  return  (Math.round(newCelsius * 10) / 10);
} 

const ctof = function(currentCelsius) {
  let newFarenheit = (currentCelsius * (9/5) + 32);
  return (Math.round(newFarenheit * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
