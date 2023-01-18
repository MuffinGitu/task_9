let gender = '';
let day = '';
let year = '1942';
const personGenerator = {
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
    }`,
    firstNameFeMaleJson: `{
        "count": 11,
        "list": {
            "id_1": "Алина",
            "id_2": "Ирина",
            "id_3": "Екатерина",
            "id_4": "Татьяна",
            "id_5": "Зинаида",
            "id_6": "Ульяна",
            "id_7": "Светлана",
            "id_8": "Елена",
            "id_9": "Ксения",
            "id_10": "Ольга",
            "id_11": "Анастасия"
        }
    }`,
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
    }`,
    professiyMaleJson: `{
        "count": 11,
        "list": {
            "id_1": "Пожарный",
            "id_2": "Слесарь",
            "id_3": "Строитель",
            "id_4": "Водитель",
            "id_5": "Полицейский",
            "id_6": "Учитель",
            "id_7": "Программист",
            "id_8": "Шахтёр",
            "id_9": "Актёр",
            "id_10": "Каскадёр",
            "id_11": "Банковский работник"
        }
    }`,
    professiyFeMaleJson: `{
        "count": 11,
        "list": {
            "id_1": "Бухгалтер",
            "id_2": "Официант",
            "id_3": "Медсестра",
            "id_4": "Глав.Врач",
            "id_5": "Парикмахер",
            "id_6": "Тренер",
            "id_7": "Суд-мед эксперт",
            "id_8": "Флорист",
            "id_9": "Администратор",
            "id_10": "Продавец",
            "id_11": "Врач"
        }
    }`,
    Year: `{
        "count": 12,
        "list": {
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomYear: function () {
        const obj = JSON.parse(this.Year);
        const numb = this.randomIntNumber(obj.count, 1)
        const prop = `id_${numb}`;
        if (numb == 1 || numb == 3 || numb == 5 || numb == 7 || numb == 8 || numb == 10 || numb == 12) {
        day = (this.randomIntNumber(31, 1)).toString();  
        } else if (numb == 2) {
            day = (this.randomIntNumber(28, 1)).toString();
        } else {
            day= (this.randomIntNumber(30, 1)).toString();
        }
        const mount = obj.list[prop];
        year = this.randomIntNumber(65, 1);
        const randomYearday = day + " " + mount + " " + (2007 - year).toString() + " года";
        return randomYearday;
    },

        randomGender: function() {
            randomNumber = Math.round(Math.random());
            gender = (randomNumber == 0) ? JSON.parse(JSON.stringify(personGenerator)).GENDER_MALE
            : JSON.parse(JSON.stringify(personGenerator)).GENDER_FEMALE;
            return gender;
        },
        randomFirstName: function() {
            if (gender == 'Мужчина'){
                return this.randomValue(this.firstNameMaleJson);
            } else {
                return this.randomValue(this.firstNameFeMaleJson);
            }
        },
        randomProfesiy: function() {
            if (gender == 'Мужчина') {
                return this.randomValue(this.professiyMaleJson);
            } 
            else {
                return this.randomValue(this.professiyFeMaleJson);
            }
        },
        randomSecondName: function() {
            let secondNameMale = this.randomValue(this.firstNameMaleJson);
            if (gender == 'Мужчина') {
                if (secondNameMale.substr(-1, 1) == 'а') {
                    secondNameMale = secondNameMale.replace('а', 'ович');
                    return secondNameMale;
                }
                else if (secondNameMale.substr(-1, 1) == 'й') {
                    secondNameMale = secondNameMale.replace('й', 'евич');
                    return secondNameMale;
                }
                else if (secondNameMale.substr(-3, 3) == 'аил') {
                    secondNameMale = secondNameMale.replace('ил', 'йлович');
                    return secondNameMale;
                }
                else {
                    return secondNameMale + 'ович';
                }
            }
            else {
                if (secondNameMale.substr(-1, 1) == 'а') {
                    secondNameMale = secondNameMale.replace('а', 'овна');
                    return secondNameMale;
                }
                else if (secondNameMale.substr(-1, 1) == 'й') {
                    secondNameMale = secondNameMale.replace('й', 'евна');
                    return secondNameMale;
                }
                else {
                    secondNameMale = this.randomValue(this.firstNameMaleJson);
                    return secondNameMale + 'овна';
                }
            }
        },
        randomSurname: function() {
            if (gender == 'Мужчина') {
                return this.randomValue(this.surnameJson);
            } else {
                return this.randomValue(this.surnameJson)+'а';
            }
        },

        getPerson: function () {
            this.person = {};
            this.person.gender = this.randomGender();
            this.person.firstName = this.randomFirstName();
            this.person.surname = this.randomSurname();
            this.person.secondName = this.randomSecondName();
            this.person.profesiy = this.randomProfesiy();
            this.person.year = this.randomYear();

            return this.person;
        },
}