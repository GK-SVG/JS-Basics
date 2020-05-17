let ele1=document.createElement('a')
ele1.setAttribute('href','https://www.facebook.com')
ele1.innerHTML="<h3>MySite</h3>";
let element=document.querySelector('div.no')
element.appendChild(ele1)
console.log(element);
