function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const error=true;
            if(!error){
                console.log('function: your problem has been resolved');
                resolve();
            }
            else{
                console.log('function: you problem rejected');
                reject('Sorry conditions not fulfilled');
            }
        },2000)
    })
}
fun1().then(function(){
    console.log("Good bro");
}).catch(function(error){
    console.log("Bad bro " + error);
})