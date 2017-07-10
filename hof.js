// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

// Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peoplesAges`.

var peoplesAges = people.map(function(ages) {
  return ages.age
})



// Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are older than 35. Assign the returned array
// to a variable called `peopleOlderThan35`.
peopleOlderThan35 = people.filter(function (oldAge) {
  var age35 = 35
  return parseInt(oldAge.age) > age35
})

//
// var names = states.map(function(state) {
//   return state.capital + ', ' + state.name
// })
//
// let consonantCapitals = state.filter(function (state) {
//   const firstLetter = state.capital.charAt(0)
//   return !['A','E','I','O','U','Y'].includes(firstLetter)
//
// })
//
// let twoWordStates = states.filter(function (state) {
//   return state.name.includes(' ')
// }).map(function (state) {
//   return state.name
// })
//
// let northOfAnnapolis = states.filter(function (state) {
//   var latOfAnnapolis = 38.972945
//   return parseFloat(state.lat) > latOfAnnapolis
// })
