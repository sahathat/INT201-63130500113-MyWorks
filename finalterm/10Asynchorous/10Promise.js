//another example
const friends = [
  { fullname: "Paul Lee", address: "Bangkok, Thailand" },
  { fullname: "Yoko Naree", address: "Kyoto, Japan" },
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
      reject(new Error("your friend was not found"));
    }
    resolve(myFriend.address);
  });
}
//1. using promise.then() method
const myFriendAddr = getFriend("Paul", "Lee", getFullName)
.then((fullName) => {
    console.log(fullName); //Paul Lee
    return fullName;
})
.then((friendName) => {
    console.log(friendName); //Paul Lee
    getAddress(friendName).then((friendAddr) => {
      console.log(friendAddr); //Bangkok, Thailand
      return friendName + ' ' + friendAddr;
    }); 
})
.catch((error) => {
    console.log(error);
});

let pPromise = document.getElementById("promise");
pPromise.textContent = myFriendAddr;

//2. async/await 
async function asyn(){
    const myFriend = await getFriend("Yoko", "Naree", getFullName);
    const friendAddr = await getAddress(myFriend);
    console.log(myFriend);
    console.log(friendAddr);
    return myFriend+' '+friendAddr;
} 

let pAsyn = document.getElementById("asyn");
pAsyn.textContent = asyn();
