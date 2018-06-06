
//object destructuring

// const person = {
//   name: 'Carlos',
//   age: 20,
//   location: {
//     city: 'California',
//     temp: 78
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp } = person.location;
// if (city && temp) {
// console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// // 'Self-Published' made into default incase there is no set name for publisher
// const {name: publisherName = 'Self-Published'} = book.publisher


// console.log(publisherName);

// Array destructuring

const address = ['3832 maxson Rd', 'Los Angeles', 'California', '91732'];

// blank with comma skips that object in array and keeps going
const [, city, state = 'California', zipcode] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, small, med] = item;

console.log(`A medium ${itemName} costs ${small}`)