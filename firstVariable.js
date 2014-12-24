/**
 * Created by rajesh on 7/12/2014.
 */

console.log("this is statement from firstVariabe.js");
document.getElementById("myDiv").style.background = "yellow";
document.getElementById("myDiv").style.color="blue";

var myDivStyle = document.getElementById("myDiv");
myDivStyle.style.background="red";

var colors;
var car$;

var part1 = "Team ";

function bam() {
    var part2 = "Treehouse";
    function boom() {
        var part3 = "Go ";
        console.log(part3 + part1 + part2);

    }

    boom();
}

bam();
