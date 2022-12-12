const name = document.getElementById('name')
const email = document.getElementById('email')
const city = document.getElementById('city')
const postal = document.getElementById('postal')
const form = document.getElementById('form')
const error = document.getElementById('error')


var checkPostal = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
//console.log("CHECKPOSTAL IS " + checkPostal);
form.addEventListener('submit', (e) => {
    var valid = checkPostal.test(postal.value);
    //console.log("VALID IS " + valid);
    //console.log("POSTAL VALUE IS " + postal.value);
    if (!valid){
        error.innerHTML = "Please enter a valid postal code";
        e.preventDefault();
    }
})