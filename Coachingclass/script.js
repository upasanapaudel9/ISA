/*let attendence=80%;
let academic=70;
let grade="A";
let attitude=70;
if(attendence>=80% && academic>=70||grade=="A" && attitude>70){
    console.log("eligible for scholarship");
}
    else{
        console.log("You are not eligible for scholarship");
    }*/
    let number=[1,2,3,4,5,6,7,8,9];
    number.forEach((num)=>{
        //console.log(num*2);
    })

    let newarrat=number.map((num)=>{
        return num*2;
    })

    //console.log(newarray);

    let evenarray=number.filter((num)=>{
        return num%2==0;
    })
    //console.log(evenarray)

    let array1=newarray.filter((num)=>{
        return num%3==0;
    })
    //console.log(array1)
    
    let sumofarray=array1.reduce((a,b)=>{
        return a+b;
    })
    console.log(sumofarray)
    