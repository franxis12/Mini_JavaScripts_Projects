const addBtn = document.getElementById("increment")
const redBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")
let h1number = document.getElementById("number")
let number = 0;
let historyArr = []

addBtn.addEventListener("click", function(){
    number = number + 1;
    historyArr.push(number)
    h1number.textContent = number;
        console.log(historyArr)
    updateList();

})

redBtn.addEventListener("click", function(){
    if(number === 0){
        return alert("Can't decrease more");
    }
    number = number - 1;
    historyArr.push(number)
    h1number.textContent = number;
    console.log(historyArr)
    updateList();


})

resetBtn.addEventListener("click", function(){
    number = 0;
    historyArr = [];
    h1number.textContent = number;
    console.log(historyArr)
    updateList();
})

function updateList(){
       const history = document.getElementById("history")
       history.innerHTML = "" 
       const ul = document.createElement("ul");

    historyArr.map(element => {

        const li = document.createElement("li")
        li.textContent = element;
        ul.appendChild(li)
        history.appendChild(ul)
        console.log(historyArr)

    })

}



