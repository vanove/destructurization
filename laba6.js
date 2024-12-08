//1
let[one,two,three]=[1,2,3];
console.log(one);
let array=[4,5,6];
let[y,c,v]=array;
console.log(y);
//2
const user={
    Name:"Ivan",
    Age:18,
    numbers:[1,2,3],
}
const admin={
    ...user,
    admin:true,
      
};
console.log(admin);
//3
let store={
    state:{
        profilepage:{
            posts:[
                {id:1, message:'Hi', likescount:12},
                {id:2, message:'by', likescount:1},
            ],
            newposttext:'About me', 
        },  
        
    }

   
}
//3.1
let {
    state:{
        profilepage:{
            posts:[
               first={id,message,likescount},
                second={id,message,likescount},

            ],
        },
    
    }
}=store;

alert(first.likescount);
alert(second.likescount);
//3.2
let dialogs = [
    {id: 1, name: 'Valera'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Viktor'},
];

let evenIdDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);

console.log(evenIdDialogs);
let messages=[
    {id:1, message:'hi'},
    {id:2, message:'hi, hi'},
    {id:3, message:'hi, hi, hi'},
]
const transformed=messages.map(function(){
    message='Hello user'
    return message
})
       console.log(transformed);
       //4
let tasks=[
    {id:1, title:"HTML&CSS", isDone:true},
    {id:2, title:"JS", isDone:true},
    {id:3, title:"REACTJS", isDone:false},
    {id:4, title:"REST API", isDone:false},
    {id:5, title:"Graph QL", isDone:false},
]
const tasks1={
    ...tasks,
    5:{id:6, title:"Vue JS", isDone:false}
};
const{id,title,isDone}=tasks1;
    


    

console.log(tasks1);
//5
function sumValues(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sumValues(...numbers));
  /*

  
   без остаточных
  function sum(a, b) {
    return a + b;
  }  
  console.log(sum(2, 3)); // 5
  console.log(sum(2, 3, 4)); // 5 (но мы потеряли 4, потому что функция принимает только два аргумента)


  с остаточными
  function sum(...numbers) {
  // numbers — это массив со всеми аргументами, которые передали
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(2, 3));        // 5
console.log(sum(2, 3, 4, 5));  // 14
console.log(sum(10));          // 10
console.log(sum());            // 0


  */
  
       