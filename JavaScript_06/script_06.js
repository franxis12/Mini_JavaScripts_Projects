const addBtn = document.getElementById("agregar")

const tasks = []

addBtn.addEventListener("click", () => {
    const newTask = document.getElementById("tarea").value.trim();
  

    if (tasks.includes(newTask)) {
    alert("La tarea ya existe");
    return;
    }
  
    if(newTask !== ""){
    tasks.push(newTask);

    displayList()
    }
})



const displayList = () => {
  const taskListUl = document.getElementById("lista-tareas")
  taskListUl.innerHTML = ""

  if(tasks.length === 0){
    const p = document.createElement("p")
    p.textContent = "No hay tareas aun"
    taskListUl.appendChild(p);
    
  }



  tasks.forEach((element, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = element;
    btn.textContent = "Eliminar"
    btn.classList.add(
      "bg-red-500", 
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-blue-600",
      "ms-5"
    );
    taskListUl.appendChild(li);
    li.appendChild(btn)

    btn.addEventListener("click", ()=> {
      tasks.splice(index, 1);
      displayList()
    })
  });

}
displayList();