// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var guestList = ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan"];
guestList.forEach(function (val) { return console.log("My honourable leader ".concat(val, " ,I would like you to invite you for a dinner party.")); });
console.log("".concat(guestList[1], " got some issue,he can't make the dinner."));
console.log("\n----------------------------------------\n");
guestList.splice(1, 1, "Mulana Mohammad Ali Johar");
guestList.forEach(function (val) { return console.log("My honourable leader ".concat(val, " ,I would like you to invite you for a dinner party.")); });
console.log("We found a bigger dinner table.");
console.log("\n----------------------------------------\n");
guestList.unshift("Imran Khan");
guestList.splice(3, 0, "Rajab Tayab Urdugan");
guestList.push("Maulana Shaukat Ali");
guestList.forEach(function (val) { return console.log("My honourable leader ".concat(val, " ,I would like you to invite you for a dinner party.")); });
console.log("Sorry! my honourable guests because I only can invite two of you peoples.");
console.log("\n----------------------------------------\n");
for (var i = -1; i >= -4; i--) {
    var removed = guestList.pop();
    console.log("Dear ".concat(removed, " ,this is to inform you that you are not invited to the party."));
}
guestList.forEach(function (val) { return console.log("Dear honourable ".concat(val, " ,this to inform that you are still invited to the party.")); });
guestList.pop();
guestList.pop();
guestList.forEach(function (val) { return console.log("".concat(val)); });
