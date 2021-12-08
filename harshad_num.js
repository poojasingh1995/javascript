let a=require("readline-sync")
let num=a.questionInt("enter the number")
    let sum = 0,
    temp = num;
    while(temp>0){
        sum+=temp % 10;
        // sum+=k;
        temp = Math.floor(temp/10);
    }
if(num % sum === 0){
    console.log(num,"is an harshad num")
}
else{
    console.log(num,"is not an harshad num")
}
