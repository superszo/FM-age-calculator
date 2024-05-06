import { intervalToDuration } from "./node_modules/date-fns/intervalToDuration.mjs"

let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let submit = document.getElementById('submit');


let dayCorrect = false;
let monthCorrect = false;
let yearCorrect = false;

dayInput.addEventListener('input', function () {

    let input = Number(dayInput.value)

    if (input <= 0 || input > 31 || input % 1 !== 0) {
        document.getElementById('dayError').classList.add('show');
        dayCorrect = false;
    } else if (document.getElementById('dayError').classList.contains('show')){
        document.getElementById('dayError').classList.remove('show');
        dayCorrect = true;
    }   else {
        dayCorrect = true;
    }
})

monthInput.addEventListener('input', function () {

    let input = Number(monthInput.value)

    if (input <= 0 || input > 12 || input % 1 !== 0) {
        document.getElementById('monthError').classList.add('show');
        monthCorrect = false;
    } else if (document.getElementById('monthError').classList.contains('show')){
        document.getElementById('monthError').classList.remove('show');
        monthCorrect = true;
    } else {
        monthCorrect = true;
    }
})

yearInput.addEventListener('input', function () {
    let thisYear = new Date().getFullYear();
    let input = Number(yearInput.value)

    if (input >= thisYear || input % 1 !== 0) {
        document.getElementById('yearError').classList.add('show');
        yearCorrect = false;
    } else if (document.getElementById('yearError').classList.contains('show')){
        document.getElementById('yearError').classList.remove('show');
        yearCorrect = true;
    } else {
        yearCorrect = true;
    }
})

submit.addEventListener('click', function () {
    var userDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
   
    
    var difference = intervalToDuration({
        start: userDate,
        end: new Date()
    })
    console.log(difference)

    var days = difference.days;
    var years = difference.years;
    var months = difference.months;

    if (dayCorrect && monthCorrect && yearCorrect) {
        document.getElementById('days-result').innerHTML = days;
        document.getElementById('months-result').innerHTML = months;
        document.getElementById('years-result').innerHTML = years;
    } 
})