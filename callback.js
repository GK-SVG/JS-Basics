console.log('This is callback');

let students=[
    {name:"Ashu",course:'Flutter'},
    {name:'Gautam',course:'Django'}          
]


//when a function take a function as an argument and call it inside self 
//This is called callback function
function setStudents(student,getStudents){
    setTimeout(function(){
     students.push(student);
     console.log('students endrolled');
     getStudents();
    },3000)
}
function getStudents(){
    setTimeout(function(){
        console.log(students);
        let str="";
        students.forEach(function(student){
            str +=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log('fetched students');
    },1000)
}
setStudents({name:'gaurav',course:'GoLang'},getStudents);
//getStudents();