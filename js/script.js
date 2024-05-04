let names = ['ivan', 'Oleg', 'Maksim'];

// Обращение ко 2 элементу массива
console.log(names[1]);

console.log(names);

// Изменять элементы массива с помощью оператора присваивания
names[2] = 'jon';

console.log(names);

// Свойство length - длина массива 
console.log(names.length);

// Метод push - добавить новый элемент в массив
names.push('Olga');

console.log(names);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// В массивах можно хранить элементы любых типов, поддерживаемых в JS.
let users = [
    {
        login: 'admin',
        password: 'qwerty'
    },
    {
        login: 'user1',
        password: 'qw'
    },
    {
        login: 'user2',
        password: '123'
    }
]


// Перебрать элементы массива users
for(let i = 0; i<users.lenght; i++) {
    console.log(users[i].login);
}

// Перебрать значения свойства login
for(let i = 0; i < users.length; i++) {
    console.log(users[i].login)
}

// Получить последний элемент массива
let fruits = ['Яблоки', 'Апельсины', 'Груши']
console.log(fruits[fruits.length - 1]);

/*Метод at возвращает элемент массива с заданным индексом. 
В параметре метода указывается целое положительное или отрицательное число. 
В первом случае - идет поиск элемента с начала массива, во втором - с конца. */
console.log(fruits.flat(-1));

// pop() - удаление последнего элемента массива

let lastElement = fruits.pop();

console.log(fruits);
console.log(lastElement);

// splice - удаляет или добавляет элементы в массив
// масив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

let cars = ['toyota', 'lexus', 'bmw', 'honda'];
cars.splice(2, 1)

console.log(cars);