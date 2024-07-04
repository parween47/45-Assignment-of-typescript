// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner
var guestList = ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan"];
guestList.forEach(function (val) { return console.log("My honourable leader ".concat(val, " ,I would like you to invite you for a dinner party.")); });
console.log("".concat(guestList.length, " guests are invited to the party."));
