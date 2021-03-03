const getSleepHours = day => {
  if (day === 'monday'){
    return 20;
  }
  else if (day === 'tuesday'){
    return 5;
  }
  else if (day === 'wednesday'){
    return 6;
  }
  else if (day === 'thursday'){
    return 7;
  }
  else if (day === 'friday'){
    return 8;
  }
  else if (day === 'saturday'){
    return 9;
  }
  else if (day === 'sunday'){
    return 10;
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}
console.log(getActualSleepHours())
const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
}
console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('Your sleep debt is: ' + (actualSleepHours - idealSleepHours) + '. You have got the perfect amount of sleep!')
  } else if (actualSleepHours < idealSleepHours){
    console.log('Your sleep debt is: ' + (actualSleepHours - idealSleepHours) * -1 + '. You have not got enough sleep!')
  } else {
    console.log('Your sleep debt is: ' + (actualSleepHours - idealSleepHours) * -1 + '. You have got more sleep than you need!')
  }
};
calculateSleepDebt()