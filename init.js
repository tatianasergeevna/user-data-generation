// Генерация данных пользователей при перезагрузке страницы
//window.onload = function() { 
    //const initPerson = personGenerator.getPerson();
    //document.getElementById('surnameOutput').innerText = initPerson.surname;
    //document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    //document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    //document.getElementById('genderOutput').innerText = initPerson.gender;
    //document.getElementById('birthDayOutput').innerText = initPerson.day;
    //document.getElementById('birthMonthOutput').innerText = initPerson.month;
    //document.getElementById('birthYearOutput').innerText = initPerson.year;
    //document.getElementById('professionOutput').innerText = initPerson.profession;
//};

// Кнопка "Генерация" - при нажатии кнопки генерирует новые данные пользователей
document.getElementById('generation').addEventListener('click', function() { 
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

// Кнопка "Очистить" - при нажатии кнопки содержание меняется на исходное (вместо данных пользователей)
document.getElementById('clear').addEventListener('click', function() { 
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('genderOutput').innerText = 'Генерация пола, ';
    document.getElementById('birthDayOutput').innerText = 'Генерация дня рождения, ';
    document.getElementById('birthMonthOutput').innerText = 'Генерация месяца рождения, ';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения, ';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
}
);