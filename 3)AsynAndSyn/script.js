// async and await
const friends = [
    { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Tokyo, Japan' }
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

//2. async/await 
async function main(){
    const myFriend = await getFriend("Paul", "Lee", getFullName);
    const friendAddr = await getAddress(myFriend);
    console.log(myFriend);
    console.log(friendAddr);
} 

main();