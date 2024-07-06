"use strict";
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan"];
guestList.forEach((val) => console.log(`My honourable leader ${val} ,I would like you to invite you for a dinner party.`));
console.log(`${guestList[1]} got some issue,he can't make the dinner.`);
console.log("\n----------------------------------------\n");
guestList.splice(1, 1, "Mulana Mohammad Ali Johar");
guestList.forEach((val) => console.log(`My honourable leader ${val} ,I would like you to invite you for a dinner party.`));
console.log("We found a bigger dinner table.");
console.log("\n----------------------------------------\n");
guestList.unshift("Imran Khan");
guestList.splice(3, 0, "Rajab Tayab Urdugan");
guestList.push("Maulana Shaukat Ali");
guestList.forEach((val) => console.log(`My honourable leader ${val} ,I would like you to invite you for a dinner party.`));
