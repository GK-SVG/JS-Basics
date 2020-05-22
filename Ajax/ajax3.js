let popBtn =  document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler);
function popHandler(){
    console.log('You clicked pop handler');
    const xhr= new XMLHttpRequest();

    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    xhr.send();
    xhr.onload=function(){
        if (this.status===200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str="";
            for(key in obj.data){
                str+=`<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML=str;
        }
        else{
            console.log(' Some eroor occured');
        }
    }
}