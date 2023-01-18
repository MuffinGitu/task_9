document.getElementById('btn_generate').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profesiyOutput').innerText = initPerson.profesiy;
    document.getElementById('YearOutput').innerText = initPerson.year;
})

document.getElementById('btn_delete').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('secondNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('profesiyOutput').innerText = '';
    document.getElementById('YearOutput').innerText = '';
})