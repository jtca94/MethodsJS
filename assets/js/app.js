const addTask = document.getElementById("addForm")
const task = document.getElementById("taskInp")
const taskPrint = document.getElementById("taskPrint")
const totalTask = document.getElementById("total")
const taskDone = document.getElementById("done")
const render = () => {
    taskPrint.innerHTML = ""
    totalTask.innerHTML = "0"
    taskList.forEach((tarea) => {
        // realizar en bs html y luego traspasar aqui en responsive
        taskPrint.innerHTML += `<div class="d-flex"><p class="col-3 my-auto">${tarea.id}</p>
        <p class="col-4 my-0">${tarea.task}</p>
        <div class="my-0 col-5 d-flex">
            <input oncheck="checkboxes()" id="checkeado" class="mx-3" type="checkbox">
            <i onclick="eliminar(${tarea.id}) id="eliminar" class="fa-solid fa-trash my-auto"></i>
        </div></div><hr>`
        totalTask.innerHTML = taskList.length
    })
}
let taskList = []

 function checkboxes()
       {
        const inputElems = document.getElementsByTagName("input")
        let count = 0;
         taskDone.innerHTML = count
         for (var i=0; i<inputElems.length; i++) {       
            if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
               count++;
            }
         }
         render()
      }


render()







addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    if(task.value == ""){
        alert("Debes ingresar alguna tarea")
        return
    }
    taskList.push({
        id: taskList.length + 1,
        task: task.value 
    })
    render()
    task.value = ""
})
console.log(taskList)