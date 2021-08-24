// ? Task:Реализуй функцию sumObjects, которая принимает неограниченное количество объектов и возвращает объект, который объединяет все переданные объекты.

// Примечания:

// Все свойства объекта будут только числовыми значениями
// Если ключи объектов совпадают - значения соответствующих ключей суммируются
// Функция всегда возвращает объект
// Числа в объекте могут быть положительными и отрицательными
// Ты можешь воспользоваться rest оператором, чтобы собрать агрументы, которые ты передал в функцию, в один массив
// Примеры:

// const obj = {};
// sumObjects() === {}
// sumObjects(obj) === {}
// const first = {a: 2, b: 4};
// const second = {a: 2, b: 10};
// const third = {d: -5};

// sumObjects(first) === {a: 2, b: 4}
// sumObjects(first, third) === {a: 2, b: 4, d: -5}
// sumObjects(first, second, third) === {a: 4, b: 14, d: -5}


// Solution 1
const obj = {};
const first = { a: 2, b: 4 };
const second = { a: 2, b: 10 };
const third = { d: -5 };
const four = { a: -4, b: 20, d: -15 };

const sumObjects = (...rest) => {
    const sumObj = {};
    for (item of rest) {
        for (key in item) {
            // typeof sumObj.attribute === 'undefined'
            sumObj.hasOwnProperty(key) === undefined
                ? sumObj[key] += item[key] 
                : sumObj[key] = item[key];
        } 
    }
               
    return sumObj;
}



// const sumObjects = (...rest) => {
//   return rest.reduce((sumObj, object) => {
//     for (let key in object) {
//       sumObj[key] == undefined ? sumObj[key] = object[key] :
//         sumObj[key] = sumObj[key] + object[key];
//     }
//     return sumObj;
//   }, {})
// }

console.log(sumObjects(obj));
console.log(sumObjects());
console.log(sumObjects(first));
console.log(sumObjects(first, second));
console.log(sumObjects(first, second, third));
console.log(sumObjects(first, second, third, four));
// ! Explanation: 
