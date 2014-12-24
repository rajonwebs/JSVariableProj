/**
 * Created by rajesh on 7/12/2014.
 */

var myColor ="blue";
console.log("Global scope - mycolor  --"+myColor);

function myFunc(){
        myColor = "yello";
    console.log("varaible with in function- myColor--" +myColor);

    myNumber =42;
    console.log(myNumber);

    //var myColor = "green"
    //console.log("declared within method with var keyword - myColor--"+myColor);

}


myFunc();
console.log("end of function at the end of class mycolor--"+myColor);
console.log(myNumber);


var $sd;
var _sdfs;
var 43;


var person = "Jim";

function whosGotTheFunc() {
    person = "Andrew";
}

console.log("1-accessing first time->"+person);


whosGotTheFunc();
person ="changedGlobal Value";
console.log("1-accessing second time DECLARING->"+person);

