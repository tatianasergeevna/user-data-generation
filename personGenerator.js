const personGenerator = { // далее: "this" - этот "personGenerator"
    surnameJson: `{ 
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`, // Фамилии (в женском роде добавится окончание "-а")
    
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`, // Мужские имена
    
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Ксения",
            "id_3": "Людмила",
            "id_4": "Екатерина",
            "id_5": "Елена",
            "id_6": "Ольга",
            "id_7": "Вероника",
            "id_8": "Галина",
            "id_9": "Евгения",
            "id_10": "Кристина"
        }
    }`, // Женские имена
    
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Иванов",
            "id_2": "Александров",
            "id_3": "Сергеев",
            "id_4": "Алексеев",
            "id_5": "Денисов",
            "id_6": "Петров",
            "id_7": "Михайлов",
            "id_8": "Артуров",
            "id_9": "Евгеньев",
            "id_10": "Романов"
        }
    }`, // Отчества без окончания "-ич" (мужской род) и "-на" (женский род)
    
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Фельдшер",
            "id_2": "Адвокат",
            "id_3": "Пилот",
            "id_4": "Автослесарь",
            "id_5": "Полицейский",
            "id_6": "Повар",
            "id_7": "Пожарный",
            "id_8": "Учитель",
            "id_9": "Строитель",
            "id_10": "Инженер"
        }
    }`, // Профессии мужского пола
    
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Парикмахер",
            "id_2": "Модель",
            "id_3": "Продавец",
            "id_4": "Секретарь",
            "id_5": "Дизайнер",
            "id_6": "Психолог",
            "id_7": "Телеведущая",
            "id_8": "Актриса",
            "id_9": "Художник",
            "id_10": "Флорист"
        }
    }`, // Профессии женcкого пола

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min), // Случайная генерация данных
    
    randomGender: function() { // Генерация пола
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomValue: function (json) { // преобразование строк JSON в объект JavaScript 
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomFirstName: function() { // f Генерация имени (мужского и женского)
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { // f Генерация отчества (к мужскому полу добавляется окончание "ич", к женскому - окончание "на")
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() { // f Генерация фамилии (к женскому полу добавляется окончание "а")
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth28: function randomMonth() { // f Генерация набора месяцев, в которых 28 дней
		let months = [`января`, `февраля`, `марта`, `апреля`, `мая`, `июня`, `июля`, `августа`, `сентября`, `октября`, `ноября`, `декабря`];
        let month = months[Math.floor(Math.random() * 11)];
		return month;
	},

    randomMonth30: function randomMonth() { // f Генерация набора месяцев, в которых 30 дней
        let months = [`января`, `марта`, `апреля`, `мая`, `июня`, `июля`, `августа`, `сентября`, `октября`, `ноября`, `декабря`];
        let month = months[Math.floor(Math.random() * 10)];
        return month;
    },

    randomMonth31: function randomMonth() { // f Генерация набора месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 6)];
        return month;
    },
    
    randomYear: function() { // f Генерация года рождения 1970-2000
        return this.randomIntNumber(1970, 2001) + " г.р.,";
    },

    randomРrofession: function() { // f Генерация мужских и женских профессий
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        const birthMonth = Math.floor(Math.random() * 3); // Выбор случайного числа от 0 до 2 для генерации выбора набора месяцев, содержащих 28, 30 или 31 день
        // console.log(birthMonth); // проверка выбора "birthMonth"
        if (birthMonth == 0) {
            this.person.month = this.randomMonth28(); // все месяцы
            this.person.day = this.randomIntNumber(1, 29); // Генерация даты месяцев, в которых 28 дней (все месяцы)
        } else if (birthMonth == 1) {
            this.person.month = this.randomMonth30(); // все месяцы, кроме февраля
            this.person.day = this.randomIntNumber(1, 31); // Генерация даты месяцев, в которых 30 дней
            //this.person.day = this.randomIntNumber(28, 31); // Генерация даты для более частого выпадения дат 28-30
        } else if (birthMonth == 2) {
            this.person.month = this.randomMonth31(); // месяцы, в которых 31 день
            this.person.day = this.randomIntNumber(1, 32); // Генерация даты месяцев, в которых 31 день
            //this.person.day = this.randomIntNumber(28, 32); // Генерация даты для более частого выпадения дат 28-31
        }
        this.person.year = this.randomYear();
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};