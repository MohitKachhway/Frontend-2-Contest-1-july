/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    let devWithMap=arr.map((srr)=>{
      if(srr.profession=="developer")
        return srr.name;
     })
    console.log(devWithMap);
}



function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((srr1)=>{
    if(srr1.profession=="developer")
    console.log(srr1.name);
  })
}



function addData() {
  //Write your code here, just console.log
  let obj={
    id:4,
    name:"susan",
    age:20,
    profession: "intern"
  }
  arr.push(obj);
  console.log(arr);
}


function removeAdmin() {
  //Write your code here, just console.log
  let removeObj=arr.filter((element)=>{
    return element.profession!=="admin"
      
  })
  console.log(removeObj)
}

 
function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 4, name: "rocky", age: "34", profession: "teacher" },
    { id: 5, name: "sam", age: "21", profession: "doctor" },
    { id: 6, name: "romeo", age: "26", profession: "tester" }
  ]
  let concatArray=arr.concat(arr2)
  console.log(concatArray)
}
