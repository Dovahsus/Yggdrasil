'use script';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is Dubem');
// }
// // Calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2004);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2006);
// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2008);
// console.log(age3);

// const yearsToRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsToRetirement(1991, 'Jonas'));
// console.log(yearsToRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples);
// const OrangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(2,3);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const yearsToRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0 ){
//                console.log(`${firstName} retires in ${retirement} years`);
//  return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);

//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsToRetirement(1991, 'Jonas'));
// console.log(yearsToRetirement(1980, 'Bob'));

// function ageCalc(birthYear, firstName){
//     const age4 = 2037 - birthYear;
//     console.log(`${firstName} is
//     ${age4} years old`);
//     return age4;
// }

// const age4 = ageCalc(1991, 'Jonas')

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends.length);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const Jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
// console.log(Jonas);

// // exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearz = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearz[0]);
// const age2 = calcAge(yearz[1]);
// const age3 = calcAge(yearz[2]);
// console.log(age1, age2, age3);

// const ages = [calcAge(yearz[0]), calcAge(yearz[1]), calcAge(yearz[yearz.length - 1])];
// console.log(ages);

// const friends = ['Micheal', 'Steven', 'Peter'];

// Add Elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas)

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + namekey]);
// console.log(jonas['last'  + namekey]);

// const intrestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job and friends');
// console.log(jonas[intrestedIn]);

// if(jonas[intrestedIn]){
//     console.log(jonas[intrestedIn]);
// } else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// //Challenge
// console.log(`${jonas.firstName}  has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,

// calcAge: function(birthYear){
//     return 2037 - birthYear;
// }

//     calcAge: function (){
//         this.age = 2037 - this.birthYear;
//         return
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// };

// // console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991));

// console.log(jonas.age);

// console.log(jonas.getSummary());

// const mike = {
//     fullName: 'Michael Essa',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;

//     }
// };

// const brian = {
//     fullName: 'Brian Scotto',
//     mass: 100,
//     height: 1.85,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;

//     }
// }

// mike.calcBMI();
// brian.calcBMI();

// console.log(mike.bmi, brian.bmi);

// if(mike.bmi > brian.bmi){
//     console.log(`${mike.fullName}'s BMI (${mike.bmi}) is higher than ${brian.fullName}'s BMI (${brian.bmi})`)
// }
// else if (brian.bmi > mike.bmi){
//         console.log(`${brian.fullName}'s BMI (${brian.bmi}) is higher than ${mike.fullName}'s BMI (${mike.bmi})`)
// }

// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is true

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   1991,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven'],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from Jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// // [  test --]

// const years = [1985, 1998, 1963, 2004, 2006];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2035 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   1991,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven'],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exe = 1; exe < 4; exe++) {
//   console.log(`------ Starting excercise ${exe}`);
//   for (let rep = 1; rep < 31; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
//   }
// }

// for (let rep = 1; rep < 10; rep++) {
//   console.log(`Lifting weights rep ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`Lifting weights rep ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`6...loop is about to end...`);
// }

// Think this might be the end of this era
// so many dormant lines of code here.....Sad.....Just SAD
