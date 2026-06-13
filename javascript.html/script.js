var a; //Declaration
a = 10;//Initialization
var a = 10;//Re - declaration and re - Initialization
console.log(a);
let b;//Declaration
b = 20;//Initialization
b = 30;//Re - declaration and re - Initialization
console.log(b);
const c = 30;//declaration and re - Initialization
console.log(c);
var num =10;
var str ="apple";
var bool = true;
var undef;
var nll = null;
var symbol = symbol ('li');
var bigInt =12345678n;
var arr =[1,2,3,4,5,6,9,];
var obj ={ 
    name:"hari"
}
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof null);
console.log(typeof symbol);
console.log(typeof bigInt)
console.log(typeof arr);
console.log(typeof obj);
//conditional operator
var x =1;
var y ="1";
console.log (x > y);
console.log (x >= y);
console.log (x < y);
console.log (x <= y);
console.log (x == y);
console.log (x != y);
console.log (x !== y);
//logical(&&,!!,!)
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && false);

console.log(true|| true);
console.log(true|| false);
console.log(false|| true);
console.log(false|| false);

console.log(!true);
console.log(!false);

//assignment operator 
var x = 10;
var y = 20;
console.log(x);
x -= y;
console.log(x)

//conditional statement 
var x = 10;
if(x%2===0) {
    console.log("even")
}

if(x%2===0){
    console.log("even")
}
else{
    console.log("odd")
}
var mark = 90;
  if(mark>=90){
    console.log("o grade");
}
 else if(mark>=80) {
    console.log("A grade");
}
else if(mark>=70) {
    console.log("A+ grade");
}
else if(mark>=60){
    console.log("B grade");
}
else if(mark>=35){
    console.log("PASS")
}
else{
    console.log("FAIL")
}
var x = 2;
var result =x%2===0 ? "even" :"odd";
console.log(result)

var mark = 50;
var grade = mark>=90 ? "o grade":
            mark>=80 ? "A+ grade":
            mark>=70 ? "A grade" :
            mark>=60 ? "B+ grade" :
            mark>=50 ? "B grade" :
            mark>=35 ? "fail" : "fail";
  console.log(grade);


  var day = 1;
  switch(day){
    case 1 :{
        console.log("sunday");
        break;
    }
    switch(day){
    case 2 :{
        console.log("monday");
        break;
    }
    case 3 :{
        console.log("tueday");
        break;
    }
    case 4 :{
        console.log("wednesday");
        break;
    }
    case 5 :{
        console.log("thusday");
        break;
    }
    case 6 :{
        console.log("friday");
        break;
    }
    case 7 :{
        console.log("saturday");
        break;
    }
    default:{
        console.log("invalid input ");
    }
}
// for(initialization;condition;increment/decrement)
          //statement
//}
for(let i=10;i<=10;i++){
    console.log(i);

    //while(condition){
    //statement
    //}

var num = 10246;
var digit =0;
while(num>0){
    digit++;
    num=Math.floor(num/10);
}
//unary operator (i++,++i,i--,--i)

var x =1;
console.log(x++);
console.log(++x);


var x=1;
console.log(x--);
console.log(--x);

var a=1;
var b=2;
var c=3;
var result = a++ + --b+ ++c - ++a + ++b + c++ + b++ +a;
console.log(result);


//do{
//   //statement
//}while(condition);

do{
    console.log("do...while");
}while(false);

while(false){
    console.log("while example")
}

for(let i=1;i<=10;i++){
    // if(i>5){
    break;
    //}
    if (i==5){
        continue;
    }
    console.log(i);
}

function add(){
    console.log(10+20);
}
add();
add();
add();


function add(a=10, b=15){
    console.log(a+b);
}
add(10,20);
add(15,25);
add(20);
add();

var add = () =>{
    console.log(10+20);
}
add();

var sum = () => {
    console.log("arrow function");
}
sum();

var arr = [1,2,3,4,5];
var square = arr.map((val)=>(val**2))
console.log(square);

en = arr.filter((val)=>(val%2===));
else.log(even);

m = arr.reduce((total,val)=>(total+val),0);
console.log(sum);

    



  