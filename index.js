'use strict';

// Enter your js code Here


var myPickles = new Array;
var myPickles = [Math.floor((Math.random() * 6)+1), Math.floor((Math.random() * 6)+1), Math.floor((Math.random() * 6)+1),
Math.floor((Math.random() * 6)+1),Math.floor((Math.random() * 6)+1),Math.floor((Math.random() * 6)+1),Math.floor((Math.random() * 7)+1)];

var j;
var i;



for(j = 0; j < myPickles.length-1; j++)

for(i = 0; i < myPickles.length-1; i++)
if(myPickles[i] > myPickles[i+1])
  {
  var x = myPickles[i];
    myPickles[i] = myPickles[i + 1]
        myPickles[i + 1] = x




}
alert(myPickles)
alert(myPickles)
