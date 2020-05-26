console.log('async and await');

async function getdata(){
    console.log("inside getdata");
    const response = await fetch('https://api.github.com/users');
    console.log('after response');
    const data= await response.json();
    console.log('data resolved');
    return data;
}
async function postdata(){
    console.log('inside postdata')
    let url='http://dummy.restapiexample.com/api/v1/create';
    mydata =`{"name":"test","salary":"123","age":"23"}`;
    params={
        method:'post',
        header:{
            'Content-Type':'application/json'
        },
        body:mydata
    };
    console.log('before response');
    const response= await fetch('http://dummy.restapiexample.com/api/v1/create',params)
    console.log('after response');
    const data=await response.json();
    console.log('after response');
    return data
}
// console.log('before calling getdata function');
// let promise=getdata();
// console.log('after calling getdata function');
// console.log(promise);
// promise.then(data=>console.log(data));
// console.log('last line');


console.log('before calling postdata function');
let promise=postdata();
console.log('after calling postdata function');
console.log(promise);
promise.then(data=>console.log(data));
console.log('last line');

