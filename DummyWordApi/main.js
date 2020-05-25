console.log('you are in word dictionary')
let words=[
    {word:'example',def:'example mean related/real'},
    {word:'female',def:'Girls/women'},
    {word:'female',def:'aurat/nari'}
]

let Btn=document.getElementById('Btn');
Btn.addEventListener('click',addInput);
function addInput(){
    console.log('You clicked BTn');
    let input=document.getElementById('word');
    console.log(input.value)
    let div=document.getElementById('output')
    console.log(div)
    let str=[];
    words.forEach(function(index){
        console.log('This is in')
        
      if (words[index].word==input.value) {
          str.push(words[index]);
      }  
    });
    console.log(str);
}