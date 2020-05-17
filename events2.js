document.querySelector('.container').addEventListener
('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetY},${e.offsetY},122)`
    console.log('you moved your mouse');
})
//e.preventDefault
//dblclick
//mousedown
