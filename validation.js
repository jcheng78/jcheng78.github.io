const name = document.getElementById('name')
const email = document.getElementById('email')
const city = document.getElementById('city')
const postal = document.getElementById('postal')
const feedback = document.getElementById('feedback')
const form = document.getElementById('form')
const error = document.getElementById('error')

var checkName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var checkEmail = /@/;
var checkPostal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
console.log("CHECKPOSTAL IS " + checkPostal);
form.addEventListener('submit', (e) => {
    var valid = checkPostal.exec(postal);
    console.log("VALID IS " + valid);
    if (valid){
        if ( (value.indexOf("-") !== -1 || value.indexOf(" ") !== -1 ) && value.length() == 7 ) {
            console.log("IT WENT TO 1");
            error.innerText = "please enter a valid postal code"
            e.preventDefault()

        } else if ( (value.indexOf("-") == -1 || value.indexOf(" ") == -1 ) && value.length() == 6 ) {
            console.log("IT WENT TO 2");
            error.innerText = "please enter a valid postal code"
            e.preventDefault()

        }
        else{
            e.preventDefault()
        }
    } else {
        console.log("IT WENT TO 3!");
            error.innerText = "please enter a valid postal code"
            e.preventDefault()

    }
    
    
})