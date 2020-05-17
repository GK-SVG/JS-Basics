document.getElementById('head3').addEventListener
('click',function(e){
    console.log('you clicked on head3 ');
    let var1=e.target;
    //location='//gautamkumar-devloper.herokuapp.com'
    var1=e.offsetX;
    var1=e.offsetYl;
    var1=e.target.className;
    var1=e.target.classList
    console.log(var1);
})
//1.Event=click
//2.Event=mouseover