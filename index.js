const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn  = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load All Event Listeners
loadEventListeners();


//Load All Event Listeners
function loadEventListeners() {
    
    //Add Task Event
    form.addEventListener("submit", addTask);
    //Remove Task Events
    taskList.addEventListener('click', removeTask);
    //Clear Task Event
    clearBtn.addEventListener('click', clearList);
    //Filter Tasks
    filter.addEventListener("keyup", filterList);
}


// Add Task
function addTask(e)
{
    if(taskInput.value === "") {
        alert("Please Add a task");
    }

    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = "";
    e.preventDefault();
}

// Remove task


function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearList() {
   
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

// Filter Tasks
function filterList(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
