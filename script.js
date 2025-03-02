const button = document.querySelector('.btn')
const output = document.querySelector('.output')
let dayInput = document.querySelector('.day-input');
let monthInput = document.querySelector('.month-input');
let yearInput = document.querySelector('.year-input') 
button.addEventListener('click', getValue)

window.onload=()=>{

  output.classList.add('output')

  const yearDiv = document.createElement('div')
  yearDiv.classList.add('yearDiv')
  output.appendChild(yearDiv)
  const monthDiv = document.createElement('div')
  monthDiv.classList.add('monthDiv')
  output.appendChild(monthDiv)
  const dayDiv = document.createElement('div')
  dayDiv.classList.add('dayDiv')
  output.appendChild(dayDiv)

  const dashOne = document.createElement('p')
  dashOne.classList.add('dashOne')
  dashOne.innerHTML = '--'
  const year = document.createElement('p')
  year.classList.add('yearText')
  year.innerHTML = 'years'
  yearDiv.append(dashOne, year)

  const dashTwo = document.createElement('p')
  dashTwo.classList.add('dashTwo')
  dashTwo.innerHTML = '--'
  const month = document.createElement('p')
  month.classList.add('monthText')
  month.innerHTML = 'months'
  monthDiv.append(dashTwo, month)

  const dashThree = document.createElement('p')
  dashThree.classList.add('dashThree')
  dashThree.innerHTML = '--'
  const day = document.createElement('p')
  day.classList.add('dayText')
  day.innerHTML = 'days'
  dayDiv.append(dashThree, day)

  return outputDisplay(dashOne, dashTwo, dashThree)
}


function getValue(){

  let dateOfBirth = dayjs().set('date', dayInput.value ).set('month', monthInput.value-1).set('year', yearInput.value)

  return ageCalc(dateOfBirth)
}

function ageCalc(dateOfBirth) {

  const currentDate = dayjs();
  const birthDate = dayjs(dateOfBirth);

  let years = currentDate.diff(birthDate, 'year');
  let birthYear = birthDate.add(years, 'year');

  const months = currentDate.diff(birthYear, 'months');
  const birthMonth = birthYear.add(months, 'month');
  
  let days = currentDate.diff(birthMonth, 'days');

  return outputDisplay(years, months, days) 
}

const outputDisplay = (years, months, days)=> {  
  let dashOne = document.querySelector('.dashOne')
  let dashTwo = document.querySelector('.dashTwo')
  let dashThree = document.querySelector('.dashThree')
  if(monthInput.value || yearInput.value || dayInput.value){
    dashOne.innerHTML = years
    dashTwo.innerHTML = months
    dashThree.innerHTML = days
  } 
}
