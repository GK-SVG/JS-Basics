console.log('welcome')
let a= document;
a=document.all;
// a=document.body;
// a=document.forms[1];
//console.log(a);
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a=document.links[0].href;
// console.log(a);
a=document.scripts;
Array.from(a).forEach(function(element){
        console.log(element);
     })