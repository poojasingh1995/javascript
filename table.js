let n=require("readline-sync");
let num=n.questionInt("enter number:");
k=[]
for(let a=1;a<=num;a++){
    l=[]
    for(let b=1;b<=10;b++){
        // console.log(a+"*"+b+"="+a*b)
        c=(a*b)
        l.push(c)
    }
    k.push(l)
}
console.log(k)