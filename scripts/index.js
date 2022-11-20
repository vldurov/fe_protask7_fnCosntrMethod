/*
Реалізувати функцію створення об'єкта "користувач".
   
Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
При виклику функція повинна запитати у імені, що викликає, і прізвище.
Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача,
 все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
Створити користувача за допомогою функції createNewUser(). Викликати користувача функцію getLogin(). 
Вивести у консоль результат виконання функції.


Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем.
Візьміть виконане завдання вище (створена вами функція createNewUser()) та доповніть її наступним функціоналом:

При виклику функція повинна запитати у дату народження, що викликає, (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
Створити метод getAge() який повертатиме скільки користувачеві років.
Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі,
поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).


Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.


Реалізувати функцію фільтру масиву за вказаним типом даних.

                       
Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, 
другий аргумент - тип даних.
Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, 
тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], 
і другим аргументом передати 'string', то функція поверне масив [23, null].
*/

class СreateNewUser {
    constructor (){
        this.firstName = prompt("Введите имя");
        this.lastName = prompt("Введите фамилию");
        this.birthday = prompt("Введите дату своего рождения в формате dd.mm.yyyy"); 
    };

    getLogin() {
        console.log(`${this.firstName.substring(0,1).toLowerCase()}${this.lastName.toLowerCase()}`);
    };

    getAge() {
        console.log(`Пользователю ${new Date().getFullYear() - this.birthday.substring(6,10)} лет`);
    };

    getPassword() {
        console.log(`${this.firstName.substring(0,1).toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.substring(6,10)}`);
    };
}

const newUser = new СreateNewUser ();
newUser.getLogin ();
newUser.getAge ();
newUser.getPassword();




function filterBy (arr, type) {
    const arr1 = arr.filter(item => typeof item !== type)
    console.log(arr1)
}

filterBy([24, 02, 2022, "no war", null, true], "boolean");