
const entry = document.getElementById("count-el");
const increase = document.getElementById("increment");
const save = document.getElementById("save");
const entries = document.getElementById("demo");
const sum = document.getElementById("sum")
const add = document.getElementById("add")

let count = 0;
let array = [];


increase.addEventListener("click", function (){
    count++;
   entry.textContent = count;
});

save.addEventListener("click", function (){
    var counter = " " + count + " " + "-" + " "
entries.innerHTML += counter;
array.push(count);
count = 0;
entry.innerHTML = 0;
})

sum.addEventListener("click", () => {
    let addition = 0
for (let i = 0; i < array.length; i++) {
    
    addition += array[i] 
}
 add.innerHTML = "Sum: " + " " + addition
 
})



