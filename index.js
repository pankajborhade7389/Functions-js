console.log("working");

// Que-1
function one(){
    console.log("Hello!! I am one!");
}
one();

// Que:-2
function sum(x,y){
    let z = x + y;
    console.log(z);
}
sum(3,4);

// Que-3
const arrowfunction = (Name) => {
    console.log(Name);
}
arrowfunction("My Name is Pankaj");

// Que-4
var x = 21;
var girl1 = function () {
    console.log(x);
    var x = 20;
};
girl1 ();//Undefined

// Que-5
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};// Undefined , 21

// Que-7
function factorial(a){
    let fact=1;
    if(a==0){
        console.log(0)
    }
    else if(a==1){
        console.log("1")
    }
    else{
        for(i=a; i>=1; i--){
            fact = fact*1;
            console.log(fact);
        }
    }
}
factorial(10);


// Que-6
var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
//Uncaught ReferenceError: a is not defined
