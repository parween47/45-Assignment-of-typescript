// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

let guestList:string[]=["Allama Iqbal","Quaid-e-Azam","Liaquat Ali Khan"]
guestList.forEach((val)=>console.log(`My honourable leader ${val} ,I would like you to invite you for a dinner party.`))
console.log(`${guestList[1]} got some issue,he can't make the dinner.`);

console.log("\n----------------------------------------\n");

guestList.splice(1,1,"Mulana Mohammad Ali Johar")
guestList.forEach((val)=>console.log(`My honourable leader ${val} ,I would like you to invite you for a dinner party.`))


