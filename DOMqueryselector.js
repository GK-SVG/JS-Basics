let cons=document.querySelector('.container');
// console.log(cons);
// console.log(cons.children)
// console.log(cons.childNodes)
let nodeName=cons.childNodes[3].nodeName;
let nodetype=cons.childNodes[3].nodeType;
// console.log(nodeName);
 console.log(nodetype);
// 1:Element
// 2:Attribute
// 3:Text
// 8:Comment
// 9:Document
// 10:Doctype
let contain=document.querySelector('div.container')
console.log(contain.children[1].children);