localStorage.setItem('name','gk');
localStorage.setItem('name2','uk');
let name3=localStorage.getItem('name');
console.log(name3)
//localStorage.removeItem('name')
//localStorage.clear();
let name={'Name':'Gautam',
       'Name2':'Ashu'      
}
let arr=['a','b','c']
localStorage.setItem('alpha',arr)
localStorage.setItem('alpha',name)
//localStorage.setItem('alpha',JSON.stringify(arr));
localStorage.setItem('alpha',JSON.stringify(name));
 let alf=JSON.parse(localStorage.getItem('alpha'));
 console.log(alf);