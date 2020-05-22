console.log('this is ajax')
let fetchBtn=document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('You are clicked fetchBtn');
    
    //Instantiating the xhr object
    const xhr= new XMLHttpRequest();

    //open the object
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
    xhr.getResponseHeader('Content-type','application/json');
    mydata =`{"name":"gjjk999","salary":"123","age":"23"}`;
    xhr.send(mydata);

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
   // xhr.send();    
}