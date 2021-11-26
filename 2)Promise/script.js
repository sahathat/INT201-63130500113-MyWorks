//Promise
let word = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is a word");
    resolve("success"); // check if then resolve a set time out all object
    reject("failed"); // check if then reject a set time out some object
  }, 1000);
});

// return this
word.then((returnWord) => {
  console.log(`Check: ${returnWord}`);
});

word.catch((returnWord) => {
  console.log(`Check: ${returnWord}`);
});

// catch problem
let number = 0;
let checkNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(number); //work in 0 milsecond
    number = 4;
    resolve("success"); // check if then resolve a set time out all object
    reject("failed"); // check if then reject a set time out some object
  }, 2000);
  console.log(number);
});

checkNumber.then((returnWord) => {
  console.log(`Check: ${returnWord}`);
});

checkNumber.catch((returnWord) => {
  console.log(`Check: ${returnWord}`);
});

//another example
const friends = [
    { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  ];
  
  function getFullName(name, surname) {
    return `${name} ${surname}`;
  }
  
  function getFriend(name, surname, callback) {
    return new Promise((resolve, reject) => {
      const fullname = callback(name, surname);
      resolve(fullname);
    });
  }
  
  function getAddress(fullname) {
    return new Promise((resolve, reject) => {
      let myFriend = friends.find((friend) => friend.fullname == fullname);
      if (myFriend === undefined) {
        reject(new Error('your friend was not found'));
      }
      resolve(myFriend.address);
    });
  }
  //1. using promise.then() method
  const myFriendAddr = getFriend('Paul', 'Lee', getFullName)
    .then((fullName) => {
      console.log(fullName); //Paul Lee
      return fullName;
    })
    .then((friendName) => {
      console.log(friendName); //Paul Lee
      getAddress(friendName).then((friendAddr) => console.log(friendAddr)); //Bangkok, Thailand
    })
    .catch((error) => {
      console.log(error);
    });