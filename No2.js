console.log("The following are my source codes answer for 2.1");
//เก็บโครงสร้างข้อมูล
//เพื่อลดความซับซ้อนของความเป็น asymptotic analysis ในการทำงานใน ภาษาโปรแกรมลง
//ควรใช้ตัวแปรในการเก็บ array ในการสร้างรายการที่เป็นตารางออกมา
let student = { id: 63130500113, name: "sahathat" };
let semester1 = {
  semester: "1/2563",
  courseEnroll: [
    { course: "INT100", credit: 3, grade: "C" },
    { course: "INT101", credit: 3, grade: "B+" },
    { course: "INT102", credit: 1, grade: "B+" },
    { course: "INT114", credit: 3, grade: "A" },
    { course: "GEN101", credit: 1, grade: "B+" },
    { course: "GEN121", credit: 3, grade: "B+" },
    { course: "LNG220", credit: 3, grade: "C" },
  ],
  result: { sumcredit: 17, gpa: 3.05 },
};
let semester2 = {
  semester: "2/2563",
  courseEnroll: [
    { course: "INT103", credit: 3, grade: "B" },
    { course: "INT104", credit: 3, grade: "B+" },
    { course: "INT105", credit: 1, grade: "A" },
    { course: "INT107", credit: 3, grade: "B+" },
    { course: "INT200", credit: 1, grade: "A" },
    { course: "GEN111", credit: 3, grade: "B+" },
    { course: "LNG332", credit: 3, grade: "B+" },
  ],
  result: { sumcredit: 17, gpa: 3.47 },
};
// let semester3 = {semester: '2/2563', courseEnroll: [
//     {course: 'INT201',credit:2,grade:'F'},
//     {course: 'INT202',credit:3,grade:'F'},
//     {course: 'INT205',credit:1,grade:'F'},
//     {course: 'INT207',credit:3,grade:'B+'},
//     {course: 'INT214',credit:1,grade:'A'},
//     {course: 'GEN231',credit:2,grade:'A'},
//     {course: 'LNG202',credit:3,grade:'B+'}],
//     result: {sumcredit: 15, gpa: }
// }
let semester = [semester1, semester2];
let result = { totalcredit: 34, gpax: 3.26, getstatus: "Normal" };
//console.log(student)
//console.log(semester)
//console.log(result)
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.2");
//หาผลรวมของจำนวนหน่วยกิตในแต่ละเทอม
//ก่อนจะทำอะไรให้เช็คค่าว่าจะใช้ว่ามีอะไรแตกต่างกันไหม
console.log(semester1.courseEnroll[0].credit); //3
console.log(semester1.courseEnroll[2].credit); //1

//1 forloop
//เรียก parameter ที่เป็น array object ของ function
function sumOfcreditbyFor(semester) {
  let sumcredit = 0; //กำหนดค่าเริ่มต้นของ sumcredit
  for (let i = 0; i < semester.courseEnroll.length; i++) {
    //นำโครงสร้างข้อมูลของ object in array in object มาบวกกันเป็นลูป
    sumcredit += semester.courseEnroll[i].credit;
  }
  return sumcredit;
}

console.log(sumOfcreditbyFor(semester1)); //17
console.log(sumOfcreditbyFor(semester2)); //17

//2 reduce
function sumOfcreditbyReduce(semester) {
  //2 Array method reduce
  //ให้นำ semester ในทำการ reduce โดยใช้ฟังก์ชัน ในการวนลูป
  //โดยที่ค่าเริ่มต้นที่ 0+previous.credit
  //แล้วครั้งต่อไปจะเป็น (0+previous.credit)+current.credit
  //Note previous=semester.courseEnroll[i-1].credit=0+previous.credit
  //บวกแบบนี้ไปเรื่อย ๆ จนครบ array
  let sumcredit = semester.courseEnroll.reduce(
    (previous, current) => previous + current.credit,
    0
  );
  return sumcredit;
}
console.log(sumOfcreditbyReduce(semester1)); //17
console.log(sumOfcreditbyReduce(semester2)); //17
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.3");
//เช็คเงื่อนไขว่า เป็นเป็นเกรดของเราไหม แล้วส่งค่าที่เป็นตัวเลขกลับมา
//ก่อนจะทำอะไรให้เช็คค่าว่าจะใช้ว่ามีอะไรแตกต่างกันไหม
console.log(semester1.courseEnroll[0].grade); //C
console.log(semester1.courseEnroll[1].grade); //B+
//1 for loop
function gradeNumberbyFor(semester) {
  let gradeNumber = []; //สร้างรายการว่าง ๆ 1 array
  for (let i = 0; i < semester.courseEnroll.length; i++) {
    //วนซ้ำเงื่อนไขที่ semester.courseEnroll[i].grade ให้แปลงจาก string เป็น numeric
    //แล้วเอาไปต่อกับ list ที่ index นั้น
    gradeNumber[i] =
      semester.courseEnroll[i].grade == "A"
        ? 4
        : semester.courseEnroll[i].grade == "B+"
        ? 3.5
        : semester.courseEnroll[i].grade == "B"
        ? 3
        : semester.courseEnroll[i].grade == "C+"
        ? 2.5
        : semester.courseEnroll[i].grade == "C"
        ? 2
        : semester.courseEnroll[i].grade == "D+"
        ? 1.5
        : semester.courseEnroll[i].grade == "D"
        ? 1
        : semester.courseEnroll[i].grade == "F"
        ? 0
        : "error";
  }
  return gradeNumber;
}
console.log(gradeNumberbyFor(semester1)); //[2,3.5,3.5,4,3.5,3.5,2]
console.log(gradeNumberbyFor(semester2)); //[3,3.5,4,3.5,4,3.5,3.5]

//2 map Array
function gradeNumberbyMap(semester) {
  //ทำการ mapping x.grade ของ array ให้ทำการ return array ที่แปลงเงื่อนไขจาก string เป็น number
  let gradeNumber = semester.courseEnroll.map((x) =>
    x.grade == "A"
      ? 4
      : x.grade == "B+"
      ? 3.5
      : x.grade == "B"
      ? 3
      : x.grade == "C+"
      ? 2.5
      : x.grade == "C"
      ? 2
      : x.grade == "D+"
      ? 1.5
      : x.grade == "D"
      ? 1
      : x.grade == "F"
      ? 0
      : "error"
  );
  return gradeNumber;
}
console.log(gradeNumberbyMap(semester1)); //[2,3.5,3.5,4,3.5,3.5,2]
console.log(gradeNumberbyMap(semester2)); //[3,3.5,4,3.5,4,3.5,3.5]
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.4");
//หาคะแนนจากการรวมกันระหว่างผลคูณของจำนวนหน่วยกิจกับค่าตัวเลขเกรดของเรา
//ก่อนจะบวกให้เช็คค่าว่าจะใช้ว่ามีอะไรแตกต่างกันไหม
console.log(semester1.courseEnroll[0].credit); //3
console.log(gradeNumberbyMap(semester1)[0]); //2
console.log(semester1.courseEnroll[2].credit); //1
console.log(gradeNumberbyMap(semester1)[2]); //3.5

function getSemesterScore(semester) {
  let sumscore = 0; //กำหนดค่าเริ่มต้น
  for (let i = 0; i < semester.courseEnroll.length; i++) {
    //เรียก parameter ของ array ไปคูณกับ array ที่เป็น function grade number ก่อนหน้านั้น
    sumscore += semester.courseEnroll[i].credit * gradeNumberbyMap(semester)[i];
  }
  return sumscore;
}
console.log(getSemesterScore(semester1)); //52
console.log(getSemesterScore(semester2)); //59
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.5");
//หาเกรดเฉลี่ยจากการนำ คะแนนรวมมาหารกับจำนวนข้อมูลใน course
function gpa(semester) {
  return (
    Math.trunc(
      (getSemesterScore(semester) / sumOfcreditbyFor(semester)) * 100
    ) / 100
  );
}
//trunc ทำหน้าที่ปัดเศษ แล้วทำให้คำตอบเป็นทศนิยม 2 ตำแหน่ง
console.log(gpa(semester1)); // 3.05
console.log(gpa(semester2)); // 3.47
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.6");
//ก่อนจะทำอะไรให้เช็คค่าว่าจะใช้ว่ามีอะไรแตกต่างกันไหม
//หาหน่วยกิจรวม
console.log(semester[0].result.sumcredit); //17
console.log(semester[1].result.sumcredit); //17
//หา gpa
console.log(semester[0].result.gpa); //3.05
console.log(semester[1].result.gpa); //3.47

//หาคะแนนจากการรวมกันระหว่างผลคูณของจำนวนหน่วยกิจกับค่าตัวเลขเกรดของเรา
//ในแต่ละเทอมแล้วเอาไปหารกับผลรวมในหน่วยกิจซึ่งอยู่ในข้อ 2.7
function gpax(semester) {
  let sumscore = 0; //กำหนดค่าเริ่มต้น
  for (let i = 0; i < semester.length; i++) {
    //เรียก parameter ของ array ไปคูณกับ array ที่เป็น function grade number ก่อนหน้านั้น
    sumscore += semester[i].result.sumcredit * semester[i].result.gpa;
  }
  return Math.round((sumscore * 100) / totalcredit(semester)) / 100;
}
console.log(gpax(semester)); // 3.26
//หาเกรดเฉลี่ยจากการนำ คะแนนรวมมาหารกับจำนวนข้อมูลใน course ของแต่ละเทอม
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.7");
//หาหน่วยกิจรวม
console.log(semester[0].result.sumcredit); //17
console.log(semester[1].result.sumcredit); //17
function totalcredit(semester) {
  //หาผลรวมของหน่วยกิจทั้งหมดที่เราเคยลงทะเบียนไปทั้งหมด
  sumcredit = 0; //กำหนดค่าเริ่มต้น
  for (let i = 0; i < semester.length; i++) {
    sumcredit += semester[i].result.sumcredit;
  }
  return sumcredit;
}
console.log(totalcredit(semester)); //34
console.log("End of my Answer");

console.log("The following are my source codes answer for 2.8");
//ข้อนี้ต้องมีระบบบันทึกประวัติของ gpax จะได้
let semester11 = [semester1];
let semester12 = [...semester];
let gpaxList = [gpax(semester11), gpax(semester12), 0.5, 1.5, 1.75, 1.56];
//นับจำนวน gpax ใน list โดยใช้เงื่อนไขที่มากกว่าหรือเท่ากับ 2
//มากกว่าหรือเท่ากับ 1.75 มากกว่าหรือเท่ากับ 1.5 และน้อยกว่า 1.5
//โดย return เป็น object ที่เพิ่ม 1 จำนวนของจาก array ที่กำหนด
function countGpaxList(gpaxList) {
  let countedGpax = gpaxList.reduce(
    function (allGpax, current) {
      if (current >= 2) {
        allGpax[">=2"]++;
      } else if (current >= 1.75) {
        allGpax["<2"]++;
      } else if (current >= 1.5) {
        allGpax["<1.75"]++;
      } else {
        allGpax["<1.5"]++;
      }
      return allGpax;
    },
    { ">=2": 0, "<2": 0, "<1.75": 0, "<1.5": 0 } //ค่าเริ่มต้นของ object ที่เก็บจำนวนนับ
  );
  return countedGpax;
}
console.log(countGpaxList(gpaxList));

function getstatus(gpaxList) {
  // เช็คสถานะของนักศึกษาจาก gpax ที่ได้ ให้ countGpaxList(gpaxList) ในการทดสอบ
  let checknumber = countGpaxList(gpaxList)
  console.log(checknumber)
  // ถ้า gpa < 2.00 4 ครั้ง หรือ gpa < 1.75 2 ครั้ง หรือ gpa < 1.5 1 ครั้ง status = retired
  // ถ้า gpa < 2.00 1 ครั้ง status = probation นอกนั้นเป็น normal
  return checknumber['<1.5'] >=1 || checknumber['<1.75'] >=2 || checknumber['<2'] >= 4 ? 'Retried' :
  checknumber['<1.75'] >=1 || checknumber['<2'] >= 1 ? 'Probation' : 'Normal'
}
console.log(getstatus(gpaxList)) //Retried
let gpaxList1 = [2.22, 2.22, 2.5, 2.5, 1.75, 2.56];
console.log(getstatus(gpaxList1)) //Probation
let gpaxList2 = [2.22, 2.22, 2.5, 1.5, 1.74, 2.56];
console.log(getstatus(gpaxList2)) //Retried
let gpaxList3 = [2.22, 2.22, 1.75, 1.75, 1.75, 1.75];
console.log(getstatus(gpaxList3)) //Retried
console.log("End of my Answer");
