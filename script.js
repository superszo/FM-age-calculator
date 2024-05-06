import { intervalToDuration } from "./node_modules/date-fns/intervalToDuration.mjs";
import { isValid } from "./node_modules/date-fns/isValid.mjs";
import { compareAsc } from "./node_modules/date-fns/compareAsc.mjs";

let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let submit = document.getElementById('submit');

let inputs = [dayInput, monthInput, yearInput]

let dayCorrect = false;
let monthCorrect = false;
let yearCorrect = false;

inputs.forEach(input => {
    input.addEventListener('keydown', e => {
        if(e.key==='.' || e.key===',' || e.key ==='e'){
            e.preventDefault();
        }
    })
})


dayInput.addEventListener('input', function () {
    if (dayInput.value.length < 1 && dayInput.calue != '0') {
        document.getElementById('dayError').classList.remove('show');

    } else {
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
    }
})

monthInput.addEventListener('input', function () {
    if (monthInput.value.length < 1 && monthInput.calue != '0') {
        document.getElementById('dayError').classList.remove('show');
    } else {

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
    }
})

yearInput.addEventListener('input', function () {
    let input = Number(yearInput.value)
    console.log(input)
    
    if (yearInput.value !== '' ) {
        yearCorrect = true;
        document.getElementById('yearError').classList.remove('show');
    } else {
        yearCorrect = false;
    }
})

submit.addEventListener('click', function () {
    var userDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    var todayDate = new Date();

    if (isValid(userDate) && dayCorrect && monthCorrect && yearCorrect && compareAsc(todayDate, userDate) === 1) {
        

        var difference = intervalToDuration({
            start: userDate,
            end: new Date()
        })

        var days = difference.days ? difference.days : 0;
        var years = difference.years ? difference.years : 0;
        var months = difference.months ? difference.months : 0;

       if (days === 1) {
        document.getElementById('days-heading').innerHTML = " day"
       } else {
        document.getElementById('days-heading').innerHTML = " days"
       }

       if (months === 1) {
        document.getElementById('months-heading').innerHTML = " month"
       } else {
        document.getElementById('months-heading').innerHTML = " months"
       }

       if (years === 1) {
        document.getElementById('years-heading').innerHTML = " year"
       } else {
        document.getElementById('years-heading').innerHTML = " years"
       }
        document.getElementById('days-heading').style.setProperty('--content-1', 'counter(num)');
        document.getElementById('days-heading').style.setProperty('--num', days)

        document.getElementById('months-heading').style.setProperty('--content-2', 'counter(num)');
        document.getElementById('months-heading').style.setProperty('--num', months);

        document.getElementById('years-heading').style.setProperty('--content-3', 'counter(num)');
        document.getElementById('years-heading').style.setProperty('--num', years);
    } else {
        document.getElementById('yearError').classList.add('show');
        yearCorrect = false;

    }})