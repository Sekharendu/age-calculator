// we select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
// INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
// const submit_btn = document.querySelector(".submit-btn");
// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
submit_btn.addEventListener("click", CalculateDate);
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    let today = new Date();
    
    let d1 = today.getDate();
    let m1 = today.getMonth()+1;
    let y1 = today.getFullYear();

    let d2,m2,y2;

    y2 = y1-input_year
  let m=input_month.value;
  let y=input_year.value;
  let d=input_day.value;
console.log(`${d} , ${m} , ${y}`)
    console.log(`${d1} , ${m1} , ${y1}`)
    y2 = y1-y
    if(m1>=m){
      m2 = m1-m;
      
  }else{
      y2--;
      m2 = 12+m1-m;
  }
  if(d1>=d){
      d2 = d1-d;
  }else{
      m2--;
      d2 = getdaysinmonth(y,m)+d1-d;
  }
  if(m1<0){
      m2 = 11;
      y2--;
  }
    // DISPLAYING EVERYTHING
    output_day.textContent = d2;
    output_month.textContent = m2;
    output_year.textContent = y2;
  } else {
    alert("error");
  }
}
function getdaysinmonth(year,month){
  return new Date(year,month,0).getDate();
}