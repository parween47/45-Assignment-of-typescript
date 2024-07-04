// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name
var names = ["Ali", "Hamza", "Shahrukh"];
names.forEach(function (val) { return console.log("Assalam-u-alaikum, ".concat(val, " bhai.")); });
