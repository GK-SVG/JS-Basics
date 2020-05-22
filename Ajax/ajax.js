console.log('this is ajax')
let fetchBtn=document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('You are clicked fetchBtn');
    
    //Instantiating the xhr object
    const xhr= new XMLHttpRequest();

    //open the object
    xhr.open('GET','test.txt',true);
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',false);
    // xhr.send();
    // console.log('we are done');
    
     //onprogress for loader or spinner
    xhr.onprogress=function(){
        console.log('On nprogress');
    }

    xhr.onload = function () {
        if (this.status===200) {
            console.log(this.responseText);  
        } 
        else{
            console.log('some error occured')
        }
    }
    xhr.send();
    console.log('we are done');
}