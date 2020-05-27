console.log('error handling in js')
let a=undefined;
if(a!=undefined){
    throw new Error('This is undefined');
}
else{
    console.log('This is not undefined');
}
try{
    console.log('we are inside try block');
    //functionh();
}catch(error){
    console.log(error)
    console.log('this is your error')
}finally{
    console.log('finally we will run this');
}