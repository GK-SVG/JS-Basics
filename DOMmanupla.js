let element=document.createElement('h5');
element.className='heading5';
console.log(element);
element.setAttribute('title','mytitle');
console.log(element);
element.innerText='kya kr bat h';
let head=document.querySelector('div.no')
head.appendChild(element);
console.log(head)
element.removeAttribute('title')
console.log(element)
let pr=element.hasAttribute('class')
console.log(pr);
pr=element.hasAttribute('title')
console.log(pr);
let ele1=document.createElement('p');
ele1.innerText='i am a para';
ele1.innerHTML='<b>i am a para</b>';
element.replaceWith(ele1);