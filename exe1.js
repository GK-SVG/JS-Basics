let a='devloper';
let link=document.links.length;
for (let index = 0; index < link; index++) {
    if(document.links[index].href.match(a)){
        console.log(document.links[index].href);
    }   
}
