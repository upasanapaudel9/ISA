const data=[
    {
        "name":"John",
        "age":30,
        "isMarried":true
    },
    {
        "name":"Jone",
        "age":23,
        "isMarried":true
    },
    {
        "name":"Bob",
        "age":33,
        "isMarried":false
    }
];
const container=document.getElementById("container");
for(let i=0; i<data.length;i++){
const div =document.createElement("div");
const obj =data[i];
div.innerHTML =`Name: ${obj.name}, Age:${obj.age}, isMarried:${obj.isMarried}`;
div.classList.add("card");
container.appendChild(div);
}