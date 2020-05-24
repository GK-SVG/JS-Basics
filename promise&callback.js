console.log('This is callback');

let students=[
    {name:"Ashu",course:'Flutter'},
    {name:'Gautam',course:'Django'}          
]


//when a function take a function as an argument and call it inside self 
//This is called callback function
function setStudents(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log('students endrolled');
            let error=false;
            if(!error){
                resolve()
            }
            else{
                reject()
            }
           },1000);
    });  
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
    },3000)
}
setStudents({name:'gaurav',course:'GoLang'}).then(getStudents).catch(function(){
    console.log("Some error occured");
});
//getStudents();