const tipCalculator = (quality, total) => {
  if (quality === 'bad') {
    return total * .05
    // if the quality of the service was bad it returns 5% tip upon the total
  } else if (quality === 'ok') {
      return total * .15
      // if the quality of the service was ok it returns 15% tip upon the toal
  } else if (quality === 'good'){
      return total * .20
      // if the quality of the service was good it returns 20% tip upon the total
  } else if (quality === 'excellent'){
    return total * .30
    // if the quality of the service was excellent it returns 30% tip upon the total
  }
  else{
    return total * .18
  }
  // if the quality of the service was bad it returns 5% tip upon the total
}

console.log(tipCalculator('good', 100))
//prints the result of good service with a total of 100 === 20