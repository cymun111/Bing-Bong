$(document).ready(function(){

$("#myButton").click(function(){
   var myArr = [];
              for (i = 1; i < 101; ++i){

                if (i%3 === 0 && i%5 === 0){
                  myArr.push("bing bong");}

                 else if (i%3 === 0){
                   myArr.push("bing");}

                 else if (i%5 === 0){
                   myArr.push("bong");}

                 else if( ( i % 3 !== 0 ) && ( i % 5 !== 0 ) ){
                       myArr.push(i);}
                 }
document.getElementById("myId1").innerHTML = myArr;

   });
});
