const button = document.querySelector('.btn')
const output = document.querySelector('.output')
let dayInput = document.querySelector('.day-input');
let monthInput = document.querySelector('.month-input');
let yearInput = document.querySelector('.year-input') 

button.addEventListener('click', getDay)


function getDay(){
  let dateOfBirth = dayjs().set('date', dayInput.value ).set('month', monthInput.value-1).set('year', yearInput.value)
  if(dayInput.value || monthInput.value || yearInput.value == ''){
    output.innerHTML = 'Enter full age'
  }
  if(dayInput.value || monthInput.value || yearInput.value == true){
    output.innerHTML = 'and all set'
  }
  ageCalc(dateOfBirth)
}

function ageCalc(dateOfBirth) {
  const currentDate = dayjs();
  const birthDate = dayjs(dateOfBirth);

  let years = currentDate.diff(birthDate, 'year');
  console.log(years + ' years');

  let birthYear = birthDate.add(years, 'year');

  const months = currentDate.diff(birthYear, 'months');
  console.log(months + ' months');

  const birthMonth = birthYear.add(months, 'month');

  let days = currentDate.diff(birthMonth, 'days');
  console.log(days + ' days');
}
 ageCalc()
