// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21)
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log ("is numberStudents less than or equal to 20?", numberStudents <= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log ("is numberStudents less than or equal to 21?", numberStudents <= 21)
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// this line of code asks whether the value of 4 is less than 9. This statement will log as a 'false' boolean result because the value of the integer 4 is less than that of the integer 9.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// This line of code asks if the value of 4 is less than the established value of the variable 'books', which in this case is valued at 3. This will log as a false boolean result since 4 is greater than 3, the value of the number variable 'books'.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// This line of code asks if the value of the variable 'friends' is greater than the value of the variable 'siblings'. Both are number data types valued at 6 and 2 respectively, so this should log as a true boolean result since 6 is greater than 2.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// This line of code asks whether the var 'attendees' is strictly unequal to the var 'meals'. This will log as a true boolean result because 9 is strictly unequal to 8.tv


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
true
// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
false;



// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)
true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && isAPuppy)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: ReferenceError: isAPuppy is not defined
// This is a reference error because this line of code references the variable 'isAPuppy' that has not been established as a boolean in our code.