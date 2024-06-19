// let num1=Number(prompt("pick the number",""));
// alert("your number is square root of"+ num1*num1);


//ARRAY
// const myarr= [0,1,2,3,4,5];
// const myheroes=['spiderman','supperman'];


// const myarr2 = new Array(1,2,3,4)
// console.log(myarr[1]);

let myarr2=[0,1,2,3,4];
myarr2.push(5); //adding new elements in the last
// console.log(myarr2);
myarr2.pop();//removing elements in the last 

myarr2.unshift(0);//adding elements in the starts.


myarr2.shift();//removing elements in the starts
// console.log(myarr2);

//for asking value is in arry or not,
// console.log(myarr2.includes());

// find index
// console.log(myarr2.indexOf(3));

//change array into string.
const newarr=myarr2.join();
// console.log(myarr2);
// console.log(typeof newarr);

// slice, splice

// console.log("a",myarr2);

const mn1=myarr2.slice(1,4);
//  console.log(mn1);
// console.log("B",mn1);


// console.log("a",myarr2);

const mn2=myarr2.splice(1,2);
// console.log(mn2);
// console.log("c",myarr2);

let myarr3= [1,2,3,4];
const myarr4=[5,6,7,8];

//array take an arry.
// myarr3.push(myarr4);
// console.log(myarr3);

myarr3.concat(myarr4)
console.log(myarr3);


const { simple } = require("init");

 const myarry = [1,2,3,4,5]

   myarry.slice();
   myarry.splice()
// console.log(myarry);

      myarry.forEach((Element)=>console.log(Element));

    let arr=[1,2,3,4];
// console[1,2,3],
   
// let Element= arr[2][2]
// console.log(Element);

// arr[1][2]=10;
// console.log(arr[1][2]);

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }
// let narr=[10,11,12]

// arr.push(narr)
// let allarr= arr.concat(narr)
// console.log(allarr);
// let allarr=[...arr,...narr];
// console.log(allarr);

// let another_arr=[1,2,3,4,[5,6,7],8,[9,10,[11,12,13]]];
// let real_array=another_arr.flat(Infinity);
// console.log(real_array);
// console.log(Array.isArray("raj surmeda"));
// console.log(Array.from("raj surmeda"));
// console.log(Array.from({name:"raj surmeda"}));

// let m1=12;
// let m2=13;
// let m3=14;
// console.log(Array.of(m1,m2,m3
// ));

// let num2 = Number(prompt('pick the number',''));
// alert('your number is square root of '+ num2*num2);
// let num1=[1,2,3,4,5];
// let num2=num1.splice(1,2,10,11)
// console.log(num2);
// console.log(num1);


// const name="raj surmeda"
// let age =24;
// var city= 'umerkot'
// streetnumbwer =12;
// console.table([name,age,city,streetnumbwer])

//CONVERSION
let score ="rajesh"
// console.log(score);
// console.log(typeof score);

let valuenumber= Number(score)
// console.log(valuenumber);
// console.log(typeof valuenumber);

//"22"=>22
//"123abc"=NaN
//true =>1; false=>0


//permitive data type
// string, number, boolean, bigInt,null, undefined;


let isLoggedIn = "rajesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

 //1=>true; 0=>false
 //""=>false 
 //rajesh => true

//  let somenumber = 33;
//  let stringnumber= String(somenumber)
//  console.log(stringnumber);
//  console.log(typeof stringnumber);




//++++++++++++Operations++++++++++++++++

let value =3;
 let negvalue = -value
// console.log(negvalue);


// console.log(4-1);
// console.log(2*3);
// console.log(4/2);
// console.log(2*3);
// console.log(2**2);

let str1 ="hello"
let str =" Rajesh"
let newstr= str1+str;
// console.log(newstr);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log((3+4)* 5 % 3);

let num1,num2,num3
num1=num2=num3=2+2+3;

let gamecount = 100;
// ++gamecount;
// gamecount++
// --gamecount
gamecount--
// console.log(gamecount);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 


let name ='rajesh '
let number =40
// console.log(name +number);
// console.log(`hello my name is ${name},and my number is${number}`);

const newname= new String('rajeshkumar');
    // console.log(newname.__proto__);
//  console.log(newname.toUpperCase());
// console.log([0]);
// console.log(newname.charAt(6));
//check position

// console.log(newname.indexOf("k"));
//check number of position.

let personname= newname.substring(0,6);
//divide string when we write length

// console.log(personname);
let gamename= personname.slice(-8,4);
// console.log(gamename);

let str4='  rajesh   '
// console.log(str4);
// console.log(str4.trim());
//trim remove space.

let url= "https//helloworld.com%rajeshkumar"
// console.log(url.replace('%', '#'));
//replacing any elements

// console.log(url.includes('rajesh'));
//and u asking any words includes.

// console.log(url.includes('bee'));

// let hello= 'rajesh-kumar-surmeda';
// console.log(hello.split('-'));
//change string to in array,and finding a value...


let score1 = 400;
// console.log(score1);

let balance =new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 123.7837;
// console.log(othernumber.toPrecision(3));
//to roundoff

const hundreds= 1000000;
// console.log(hundreds.toLocaleString('en-PK'));

//---------------------MATH--------------------------


// console.log(Math);
// console.log(Math.abs(-4));

//roundoff
// console.log(Math.round(4.6));
//FOR UPPER AND LOWER VALUES
//CEIL=TOP
// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.9));

//find the lowest & heigst value in array.
// console.log(Math.min(1,2,5,3,1));
// console.log(Math.max(1,32,4,5,2));

//give value from 0,01,0.434...
// Math.random()

//for avoiding 0
// console.log(Math.random() *10+1);

//give value uper then 1 and lower tnen 9,
// console.log(Math.floor(Math.random() *10)+1);

//if we want min & max value,
const min=10;
const max=20;

//use math.random multiply 10 and add 1 for avoiding 0 and again add min,,
// console.log(Math.floor(Math.random()*(max-min+1))+min);



                     //OBJECTS
//represents object two type litrel and conscutor
//singleton made conscutor
//Object.create for singleton

//    object literals

//declare symbols
let mysym=Symbol('key1')

let jsuser={
  name:"rajesh",
  "full name":'Rajesh Surmeda',
  mysym:"key1",//use []for declare symbol. otherwise string
  age:20,
  location:"samaro",
  email:'@rajeshgmail,com',
  inloggedin:false,
  lastloggeninday:['monday','sunday']
};
// console.log(jsuser.email);
// console.log(jsuser['email']);
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[mysym]);
//change values
jsuser.email="@helloworld.com"

//for lock values
// Object.freeze(jsuser)
// console.log(jsuser);

//add greeting
jsuser.greeting=function(){
   console.log("hello js user");
};

jsuser.greetingtwo =function(){
  console.log(`hello js user, ${this["full name"]}`);
};

// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());




//////////object  2//////////////
//const tinderuser= new object(
  const tinderuser={};

    tinderuser.id="abc123"
    tinderuser.name="summy"
    tinderuser.isLoggedIn=false
    // console.log(tinderuser);
    
    
    let regularuser={
      name:"rajesh",
      fullname:{
        userfullname:{
          firstname:"raj",
          lastname:"surmeda"
        }
      }
    };

    //console.log(regularuser.fullname.userfullname);

    let obj1={1:'a', 2:'b'};
    let obj2={3:'a', 4:'b'};
    let obj3={5:'a', 6:'b'};


    // let obj3={...obj1,...obj2}//or {obj1,obj2}
     let obj4=Object.assign({}, obj1, obj2, obj3)
    // console.log(obj4);

    //database Object
    let user=[
      {
        id:1,
        email:"@rajsurmeda2323gmail.com"
      },
      {
        id:1,
        email:"@rajsurmeda2323gmail.com"
      },
      {
        id:1,
        email:"@rajsurmeda2323gmail.com"
      }
    ];
    user[1].email
    // console.log(tinderuser);

    //for want all keys,
    // console.log(Object.keys(tinderuser));
    // console.log(Object.values(tinderuser));
    
// make key values an array,
// console.log(Object.entries(tinderuser));



//destructuring in object//////

const course={
  coursename:"javascript",
  price:"2000",
courseinstructor:"rajesh"
}
// course.courseinstructor

const {courseinstructor:hello} = course
// console.log(hello);

/////////JSON////////

// {
//   name:"rajesh",
//   coursename:"javascript",
//   "price":"free"
// }
//api http//random userme.com

////FUNCTION  AND  PARAMETER///////
 //pakge ofmultiple elements

function saymyname(){
 console.log("r");
console.log("a");
console.log("j");
console.log("e");
console.log("s");
console.log("h");
}

// saymyname()//reference ()excuite

//difference b/w parameter & argument
//when we make defination of function called parameter
//when call function function and pass value called argument
// function twonumbers(num1, num2){
//   console.log(num1+num2);
// }


function twonumbers(num1, num2){
//  let result= num1+ num2
//  return result
return num1+num2
//  console.log("rajesh");//after return anyother value no excuite
}


// twonumbers(4,8)
//if
twonumbers(4 ,"8")
// const result=twonumbers(4,8)
// console.log("result:", result);

function Loginusermessage(username)//or (username="rajesh")
{
  if(username===undefined)//or (!username)
    {
      console.log("please enter a username");
      return
  }
  
return `${username} just isLogged in`
}
// console.log(Loginusermessage("rajesh"))
// console.log(Loginusermessage(""))//pass just string,
//  console.log(Loginusermessage())//when pass nothing then its undefined.


    ////////////FUNCTIONS WITH OBJECTS AND ARRAY //////////////

    function calculatorprice(...num4){ //(...num4)called sprade or rest operator
     return num4
    }
    // console.log(calculatorprice(200,300,400));

    //object in function
    const userh={
      username:"rajesh",
      prices :199
    }

    function  handleobject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    }
    // handleobject(userh)
    // handleobject({
    //   username:"raj",
    //   price:99
    // });

    ///arrays in function.
    
    const mynewarray=[200,300,400,500];
    function mysecondarray(getarray){
      return getarray[3]
    };
    // console.log(mysecondarray(mynewarray)); or
    // console.log(mysecondarray([200,300,400,500]));


           /////////////SCOPE////////
        
        //write in block scope


     let a=300
        if(true){
          let a=10
          const b=20
          var c=30
          // console.log("INNER :",a);
        } 
        //  console.log(a);  
        // console.log(b); 
        //console.log(c); 


        //////////scope and mini hoisting///////////

   //chota badhe se ice-cream lesakta hai badha chote se nai
               function one(){  
          const username="rajesh"


          function two(){
            const website="youtube"
            console.log(username);
          }
         // console.log(website);

           two()
        }
        // one()

        if (true) {
          let username="rajesh"
          if (username==="rajesh") {
            let website=" youtube "
            // console.log(username+website);
          }
          // console.log(website);
        }
        // console.log(username);






        //+++++++++++++++++++intresting++++++++++++++++++
        // addone(5) we can declare there
        function addone(num){
          return num +1
        }
        addone(5)

        // addtwo(5)but this we can't declare there
        const addtwo= function (num){
          return +1
        }
        
// addtwo(5)


//////////////////ARROW FUNCTIONS///////////////////
//=+++++++++++++++++++++++++THIS+++++++++++++++++++++//correct content

let usert ={
  username:"rajesh",
  price:299,
  welcomemesssage: function () {
    console.log(`${this.username}, welcome to website`);
    //  console.log(this);
  }

}

// usert.welcomemesssage()
usert.username="syam"
// usert.welcomemesssage()
// console.log(this)

// function book() {//con't work this operator in function
//   let username= "rajesh"
//   console.log(this);
// }
// book()

///////arrow function
let book=()=>{////work  this in arrow function
  let username="rajesh"
  console.log(this);
}
// book()
// let books=(num1,num2)=>{   explicit means when we use return key word
// return num1+num2  
// }

// let books=(num1,num2)=> num1+num2  //implicit return
// let books=(num1,num2)=> (num1+num2)
// let books=(num1,num2)=> ({username: "rajesh"})  

// console.log(books(4,8))

//++++++++IMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE++++++++++++

// (function books(){ 
//   //named iife
//   console.log("hello world");
// })();
//many times problem for globle scope polution 
///iife use in arrow function
// (()=>{
//   console.log("hello world");
// })();

// ((name)=>{
//   //unnamed iife
//   console.log(`hello world ${name}`);
// })("rajesh")


let val1=10
let val2=5
function addnum(num1,num2){
  let total= num1+num2
  return total
}
let result1= addnum(val1,val2)
let result=addnum(10,2)
console.log(result1,result);

//1 global execution->this

// memory phase
//val1-->undefined
//val2-->undefined
//addnum-->defination
//result1-->undefined
//result2 -->undefined

//execuation phase
//val1<--10
//val2<--5
//addnum--->new environment+ execution thread


// let val = "hello world"
//  function hello2(username="raj surmeda") 
// {
//   console.log(`hi this is ${username},from samaro`);
// };
// hello2("raj surmeda")


// let valu1=4;
// let valu2=5;
// function fds(num1,num2) {
//   let total = num1+num2
// return total  
// }
// let results1=addnum(num1,num2);
// let results2= addnum(4,8);
// fds();

  // const scor= 200;
  // if (scor>100){
  //   var power ='fly'//const
  //   console.log(`user power: ${power}`);
  // }

  // console.log(`user power: ${power}`);

  // const balance1 =1000;
  // if (balance1>500) console.log("test");// implicit scope

  //Nesting

  // if (balance1<500) {
  //   console.log("less than 500");
    
  // }else if (balance1<750) {
  //   console.log("less than 750");

  // } else if (balance1<900) {
  //   console.log("less than 900");
    
  // } else {
  //   console.log("less than 1200");
  // }

  // const userloggeedin = true
  // const debitcard = true;
  // const isLoggedInformgoogle= false;
  // const isLoggedInformemail= true;
  // if (userloggeedin && debitcard && 2==2) {
  //   console.log("allow to buy course");
  // }
  // if (isLoggedInformgoogle || isLoggedInformemail) {
  //   console.log("user logged in");
  // }


  //CONTROL FLOW

  // const month = 1;
  // switch (month) {
  //   case 1:
  //     console.log("january");
  //     break;
  //   case 2:
  //     console.log("feb");
  //     break;
  //   case 3:
  //     console.log("march");
  //     break;
  //   case 4:
  //     console.log("apr");
  //     break;

  //   default:
  //     console.log("default case match");
  //     break;
  // }

  // TRUTHY OR FALSE

  const useremail = ""//h@rajesh.ai
  if (useremail) {
    console.log("got user email");
    
  }else{
    console.log("don't have user email");
  }

  //////falsy value 
  // false ,0 -0, BigInt, 0n, "", null, undefined, NaN

///////truthy value
//"0", 'false', " ", [], {}, function(){}

// if (useremail.length===0) {
//   console.log("arry is empty");
// }
// const emptyobj={}
// if (Object.keys(emptyobj).length===0) {
//   console.log("object is empty");git add README.md
// }

// nullish coalescing operator (??): null undefined

let value1;
// value1= 5??10
// value1= null ?? 10
value1= undefined?? 15



console.log(value1);

//terniary operator
// condition ? true : false

const iceteaprice= 100;
// iceteaprice<=80? console.log("less than 80") : console.log("more than 80");

  ////////////////////////// LOOPS || iteration\\\\\\\\\\\\\\\\\\\\\\\\\


  //for loop
   
  for (let index = 0; index <= 10; index++) {
    let element = index;
    if (element==5) {
      // console.log("5 is best number");
    }else{
      // console.log("5 is bad number");
    }
    // console.log(element);
    
  }
  for (let i= 0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
  for(let j=0; j<=10; j++ ){
    // console.log(`Inner loop value ${j} & inner loop ${i}`);
    // console.log(i + '*'+j + '='+ i*j);
  }
 
  }

  // let myarray=["flash", "batman", "superman"]
  // for (let index = 0; index < myarray.length; index++) {
  //   const element = myarray[index];
    // console.log(element);
    
  // }

  //  break and continue
  for(let i=1; i<=20; i++){
    if (i==5) {
      //  console.log("this 5 is best number");
      // continue || break
    }
    // console.log(`value of i is ${i}`);
  }

  /////////while loop//////////////
  let index= 10;
  while (index<=10) {
    // console.log(`value of index is ${index}`);
    index=index+2
  }

  let world=["flash", "batman","superman"]


  let arre=0
  while (arre<world.length) {
    // console.log(` value is ${world[arre]}`);
    arre = arre + 1
  }
    
  let scor=1
  do {
    // console.log(`score is ${scor}`);
    scor++
  } while (scor<=10);

  // for of loop////////
let array =[1,2 ,3,4,5,6,7,8];
for (const num of array) {
  // console.log(num);
}
   
let greetings= "hello world"
for (const greet of greetings) {
  // console.log(`each char is ${greet} `);
}

//MAPS//// object, hold key value pairs


// const map = new Map()
// map.set('PK',"pakistan")

// map.set('PK',"pakistan")
// map.set('IN', "india")
// console.log(map);
 
// for (const [key,value] of map){
//   // console.log(key, ':-',value);
// }

// const myobject={
//   'game1': 'NFS',
//   'game2': 'spiderman'
// }

// for (const [key, value]of myobject) {
// //  console.log(key, ':-',value);
  
// }

const myobject={
  js:'javascript',
  cpp:'c++',
  rb: 'ruby',
  swift:'swift by apple'
};
for (const key in myobject) {
  // console.log(`${key} shortcut is for ${myobject[key]}`)
};


const programming=['js', 'rb','py','cpp'];
for (const key in programming) {
  // console.log(programming[key]);
}

// const coding=['js', 'ruby','java','py','cpp'];

// coding.forEach( function (item) {
//   console.log(item);
// })

// coding.forEach((item)=>{
//   console.log(item);
// })
// function printMe(item){
//   console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item)=>{
//   console.log(item);
// })


const mycoding=[
  {
    languagename:"javascript",
    languagefilename:"js"
  },
  {
    languagename:"java",
    languagefilename:"java"
  },
  {
    languagename:"python",
    languagefilename:"py"
  }
];
// mycoding.forEach((item)=>{
//   console.log(item.languagename);
// })

// const coding=['js', 'ruby','java','py','cpp'];
// const values = coding.forEach((item)=>{
//   //console.log(item);// for each cant return value
//   return item
// });
// console.log(values);

const mynum=[1,2,3,4,5,6,7,8,9,10];

// let newnums=mynum.filter((num)=> num > 4)
// console.log(newnums);
// let newnums= mynum.filter((num)=>{
//  return num>4
// });

// const newnums=[]
// mynum.forEach((num)=>{
//   if (num>4) {
//     newnums.push(num)
//   }
// })
// console.log(newnums);

let books=[
  {
    title:'book one', genre: 'fiction', publish:1981,edition:2004
  },
  {
    title:'book two', genre: 'non-fiction', publish:1992,edition:2005
  },
  {
    title:'book three', genre: 'history', publish:1999,edition:2006
  },
  {
    title:'book four', genre: 'non-fiction', publish:1980,edition:2009
  },
  {
    title:'book five', genre: 'science', publish:1970,edition:2012
  },
  {
    title:'book six', genre: 'fiction', publish:1985,edition:2000
  },
  {
    title:'book seven', genre: 'history', publish:1988,edition:2007
  },
  {
    title:'book eight', genre: 'science', publish:1978,edition:2010
  },
  {
    title:'book nine', genre: 'non-fiction', publish:1967,edition:2002
  }

];

//  let userbooks = books.filter((bk)=> bk.genre ==="science")


// userbooks = books.filter((bk) => {
//      return bk.publish>=2002
//   })

// console.log(userbooks);

const mynumbers=[1,2,3,4,5,6,7,8,9,10];
// let newnums=mynumbers.map((num)=>+10);
const newnums=mynumbers
                 .map((num)=>num*10)
                 .map((num)=>num +1)
                 .filter((num)=>num>=40)
                 
console.log(newnums);
