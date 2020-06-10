console.log('maps in js')

let myMap = new Map()

let key1='str',key2={},key3=function(){};

myMap.set(key1,'this is a string')
myMap.set(key2,'this is a obj')
myMap.set(key3,'this is a function')
console.log(myMap);

for(let key of myMap.keys())
{
    console.log(key);
}

for(let value of myMap.values())
{
    console.log(value);
}

let arr = Array.from(myMap);
console.log(arr)

let arrKeys = Array.from(myMap.keys());
console.log(arrKeys)

let arrValues = Array.from(myMap.values());
console.log(arrValues);