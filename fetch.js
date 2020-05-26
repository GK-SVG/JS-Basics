console.log('fetch at the place of xhr');
function getdata(){
    console.log('inside getdata')
    let url='https://api.github.com/users';
    fetch(url).then((response)=>{ 
        console.log('inside 1st then')  
        return response.json()
    }).then((data)=>{
        console.log('inside 2nd then') 
        console.log(data)}
    ).catch(function(){
        console.log("Some error");
    })
} 
function postdata(){
    console.log('inside getdata')
    let url='http://dummy.restapiexample.com/api/v1/create';
    mydata =`{"name":"test","salary":"123","age":"23"}`;
    params={
        method:'post',
        header:{
            'Content-Type':'application/json'
        },
        body:mydata
    };
    fetch(url,params).then(response=>response.json()
    ).then(data=>console.log(data)
    ).catch(function(){
        console.log("Some error");
    })
} 
// console.log("before getdata")
// getdata();
// console.log("after getdata")
postdata()