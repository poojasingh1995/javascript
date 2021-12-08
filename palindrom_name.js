var array=["M","O","M"];
var new_array=[]
for(var i=array.length-1;i>=0;i--){
   new_array.push(array[i])  
}
var count=0;
for(var j=0;j<array.length;j++){
    if (new_array[j]===(array[j])){
        count++;
    }
}
if (count===array.length){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}
