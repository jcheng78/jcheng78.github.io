function handleSubmit(){
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const city = document.getElementById('city')
    const postal = document.getElementById('postal')
    const feedback = document.getElementById('feedback')
    const form = document.getElementById('form')


    localStorage.setItem("NAME", name);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("CITY", city);
    localStorage.setItem("POSTAL", postal);
    localStorage.setItem("FEEDBACK", feedback);


    return;
}