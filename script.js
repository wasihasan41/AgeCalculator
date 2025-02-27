const button = document.querySelector('.btn')
let dayInput = document.querySelector('.day-input');
let monthInput = document.querySelector('.month-input');
let yearInput = document.querySelector('.year-input') 

button.addEventListener('click', getDay)


function getDay(){
  let dateOfBirth = dayjs().set('year', dayInput.value).set('month', monthInput.value-1).set('year', yearInput.value)
  console.log(dateOfBirth.format('YYYY-MM-DD'))
}

const ageCalc = () => {
  const currentDate = dayjs('2025-02-26');
  const birthDate = dayjs('2004-02-11');
  let years = currentDate.diff(birthDate, 'year')
  console.log(years)
  let birthYear = birthDate.add(years, 'year')
  console.log(birthYear)
  const months = currentDate.diff(birthYear, 'months')
  console.log(months)
  const birthMonth = birthYear.add(months, 'month')
  console.log(birthMonth)
  let days = currentDate.diff(birthMonth, 'days')
  console.log(days)
  let birthDay = birthMonth.add(days, 'days')
  console.log(birthDay)
  
}
// const currentDate = dayjs();
// const birthDate = dayjs('2004-02-11');
// let years = currentDate.diff(birthDate, 'year')
// console.log(years)
// let birthYear = birthDate.add(years, 'year')
// console.log(birthYear)
// const months = currentDate.diff(birthYear, 'months')
// console.log(months)
// const birthMonth = birthYear.add(months, 'month')
// console.log(birthMonth)
// let days = currentDate.diff(birthMonth, 'days')
// console.log(days)
// let birthDay = birthMonth.add(days, 'days')
// console.log(birthDay)
