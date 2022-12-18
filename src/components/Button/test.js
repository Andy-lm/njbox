let arr = [1,2,3,3];

let arr2 = new Set(arr)
console.log([...arr2]);

console.log(Math.random().toString(36).substr(2));


const obj = {
  name:"andy",
  age:{
    a:1,
    b:2
  }
}

console.log(Object.keys(obj));


console.log(Object.values(obj));

Object.entries(obj).forEach(([key,value]) => {
  console.log(key,value);
})


let a = 0;

let b = a ?? "222"
console.log(b,"---b");

console.log(~~4.3);

console.log(Object.assign({a:123},{a:456},{c:789}));

const arr3 = [1,2,4,5];

console.log(arr3.sort((a,b) => {
  return Math.random() - 0.5 
}));

console.log(Array.from({length:4},() => {
  return ~~(Math.random() * 10) 
}));

console.log(new Array(4).map((item,index) => {
  return index
}));

console.log(+new Date())
console.log(Date.now())

console.log(Math.random().toString(36).substring(2))