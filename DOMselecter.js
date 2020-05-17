let element=document.getElementById("first")
//element=element.className
//element=element.childNodes
//element=element.parentNode
//element.style.color='red';
//element.innerText='This is element selecter'
element.innerHTML="<h2>Welcome</h2>"
console.log(element);


// let sel=document.querySelector('#first');
// sel=document.querySelector('.child');
// sel.style.color='blue'
// sel=document.querySelector('h1')
// console.log(sel);

// let ele=document.getElementsByClassName('child');
// console.log(ele);
// console.log(ele[1]);
let elem=document.getElementsByTagName('div')
console.log(elem);
Array.from(elem).forEach(function(elements){
    elements.style.color='blue';

})
