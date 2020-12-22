var count = 0
var time = 1000

var intervalId = setInterval(function(){
console.log(count);
count++

if(count == 900){
    clearInterval(intervalId)
}
},time)
