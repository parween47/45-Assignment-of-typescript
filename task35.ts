// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size:string='large', message:string='I love typescript') {
console.log(`I made a ${size} shirt with the message "${message}" on it.`);
}
make_shirt()
make_shirt("medium")
make_shirt('XL',"'Let's make a fun.")


