/*Problem 2
Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler*/


const printDate = function() {
    console.log("Current date is 19.04.23")
}

const printMonth = function() {
    console.log("Current Month is April")
}

const getBatchInfo = function() {
    console.log("Batch name : Technetium, Week : 5, Day : 1, The topic for today is : Nodejs module system ")
}

module.exports = { printDate, printMonth, getBatchInfo }