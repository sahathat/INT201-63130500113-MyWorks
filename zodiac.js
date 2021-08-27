let year = 1900;
let zodiaclist = ["Monkey","Rooster","Dog","Wild Pig","Mouse","Cow","Tiger","Rabbit","Dragon","Snake","Horse","Sheep"];

switch (year % 12) {
  case 0:
    console.log("Monkey");
    break;
  case 1:
    console.log("Rooster");
    break;
  case 2:
    console.log("Dog");
    break;
  case 3:
    console.log("Wild Pig");
    break;
  case 4:
    console.log("Mouse");
    break;
  case 5:
    console.log("Cow");
    break;
  case 6:
    console.log("Tiger");
    break;
  case 7:
    console.log("Rabbit");
    break;
  case 8:
    console.log("Dragon");
    break;
  case 9:
    console.log("Snake");
    break;
  case 10:
    console.log("Horse");
    break;
  case 11:
    console.log("Sheep");
    break;
}

//short hand if
console.log(
    year % 12==0 ? "Monkey" :
    year % 12==1 ? "Rooster" :
    year % 12==2 ? "Dog" :
    year % 12==3 ? "Wild Pig" :
    year % 12==4 ? "Mouse" :
    year % 12==5 ? "Cow" :
    year % 12==6 ? "Tiger" :
    year % 12==7 ? "Rabbit" :
    year % 12==8 ? "Dragon" :
    year % 12==9 ? "Snake" :
    year % 12==10 ? "Horse" :
    "Sheep"
);

//array index
console.log(zodiaclist[year%12]);