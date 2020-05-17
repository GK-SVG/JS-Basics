console.log('this is function')
function welcome(name='User'){
    console.log(`welcome ${name}`);
};

welcome('gautam')

var a=123;
console.log(a);
function local(){
    console.log(a);
    a=234;
    let b=1234;
    console.log(a,b);
};
local();
console.log(a);