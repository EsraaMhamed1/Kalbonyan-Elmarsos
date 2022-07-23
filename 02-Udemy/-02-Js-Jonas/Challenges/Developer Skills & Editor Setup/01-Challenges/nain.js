`use script`;

//Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/

// 1) Understanding the problem
//_ Array transformed to string, separated by...
//- What is the x days? Answer: index+1

// 2) Breaking up into sub-problems
// - transform array into string
// - transform each lement to string with ºC
// - strings needs to contain day (index+1)
// - Add ... between elements and start and end of string

// SOLUTION

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...data1`);

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${1 + 1} days ... `;
  }
  console.log(`...` + str);
};
printForecast(data1);
