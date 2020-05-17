// for(let i=0;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     if(i==9){
//         break;
//     }
//     console.log(i);
// }
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(function(ele){
//     console.log(ele);
// })
let obj={
    gautam:122,
    ashu:123,
    gaurav:124
}

for (let item in obj) {
    console.log(`${item} : ${obj[item]}`);
}