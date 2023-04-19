/*Problem 3
Module 3: src/validator/formatter.js
- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

Call all these functions in route.js inside the test-me route handler*/

const str = ' functionUp  '
const trimIt = function() {
    console.log(str.trim())
}
const str1 = "SunDay"
const changeToLowerCase = function() {
    console.log(str1.toLowerCase())
}

const changeToUpperCase = function() {
    console.log(str1.toUpperCase())
}

module.exports = { trimIt, changeToLowerCase, changeToUpperCase }