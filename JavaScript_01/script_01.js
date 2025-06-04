const addBtn = document.getElementById("increment")
const redBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")
let h1number = document.getElementById("number")
let number = 0;

addBtn.addEventListener("click", function(){
    number = number + 1;
    h1number.textContent = number;
})

redBtn.addEventListener("click", function(){
    if(number === 0){
        return alert("Can't decrease more");
    }
    number = number - 1;
    h1number.textContent = number;
})

resetBtn.addEventListener("click", function(){
    number = 0;
    h1number.textContent = number;
})
