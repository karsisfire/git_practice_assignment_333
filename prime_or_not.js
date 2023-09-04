let num = 13;
let facto = 0;
for(let i = 0; i <= num; i++){
    if(num % i == 0){
        facto += 1;
    }
}
if(facto == 2){
    console.log("Prime");
}
else{
    console.log("Not_Prime");
}