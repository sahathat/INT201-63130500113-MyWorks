// async and await
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

//2. async/await 
async function main(){
    const myFriend = await getFriendName("Yoko", "Naree", getFullName).then;
    const friendAddr = await getFriendAddress(myFriend)
    console.log(myFriend);
    console.log(friendAddr);
} 


  