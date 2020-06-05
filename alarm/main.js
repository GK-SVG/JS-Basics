// var d = new Date();
// console.log(d.getHours())
// console.log(d.getMinutes())
// var n = d.getTime();
// console.log(n);
let audio= new Audio('mj.mp3')
function alarm(){
    let hour=document.getElementById('hour');
    let minute=document.getElementById('minute');
    let d=new Date()
    while(true){
        if(d.getHours()==hour.value && d.getMinutes()==minute.value){  
              audio.play(); 
              break;
        }
    }
   
    hour.value="";
    minute.value="";
}