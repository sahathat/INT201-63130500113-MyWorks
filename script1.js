let prod = ['chip','snake','dessert','candy']

for(let i of prod){
    console.log(i.charAt(0))
}

let prod1 = {id: 1 , name: 'chip'}
let prod2 = {id: 2 , name: 'snack'}
let prod3 = {id: 3 , name: 'dessert'}
let prod4 = {id: 4 , name: 'candy'}

for(let i in prod1) {
    console.log(i)
    console.log(prod1[i])
}

// object with function
let rect = {width: 5 , height: 10 , area: function(){
    return this.width*this.height
}}

console.log(rect.width)
console.log(rect['width'])
console.log(rect.area())
console.log(rect['area()']) //undefinded

let author = {isbn:1 , book:{fname:'lol',lname:'slow'}}
console.log(author.isbn)
console.log(author.book.fname)
console.log(author.book.lname)

author.book = ['lol','slow']
console.log(author.isbn)
console.log(author.book)

prod2 = {'id': 2 , "name": 'snack'}
console.log(prod2)

// example student object
let student = {id:63130500113 , name: {firstname: 'sahathat',lastname: 'yingsakulkiet'} , 
gpax: [3.05,3.47] , 
gpaxstatus : function(){ 
    let totalavg = 0;
    let count = 0;
    for(let i of this.gpax){
        totalavg += i ;
        count++;
    }
    totalavg = totalavg/count;
    return totalavg >= 3.60 ? 'First-class honors' : 
    totalavg >=3.25 ? 'Second-class honors' : 
    totalavg >=2.0 ? 'Normal' : 
    totalavg < 2.0 && totalavg >= 1.5 ? 'Pro' : 'Retired'
}}

console.log(student.id)
console.log(student.name.firstname)
console.log(student.name.lastname)
console.log(student.gpax)
console.log(student.gpaxstatus())

/*
// function header parameter = formal parameter
function slope(p1,p2){ 

    for(let i of gpax){
        totalavg += i ;
        count++;
    }
    totalavg = totalavg/count;
    return totalavg;
}

// caller parameter = actual parameter
console.log(slope({x:1,y:3},{x:5,y:6}));
*/

// object with shorthand function
let rectshort = {width: 5 , height: 10 , area (){
    return this.width*this.height
}};

console.log(rectshort.area())

// use data constructer
let date = new Date();
console.log(date)

// use in inheritance object
let o = Object.create({x: 1, y: 2});
let p = Object.create(o); 
console.log(p.x); //1
console.log(p.y); //2