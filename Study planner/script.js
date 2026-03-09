let total = 0;
let completed = 0;

function addTask(){

let subject = document.getElementById("subject").value;
let task = document.getElementById("task").value;
let deadline = document.getElementById("deadline").value;

if(subject=="" || task==""){
alert("Please enter subject and task");
return;
}

let li = document.createElement("li");

li.innerHTML = subject + " - " + task + " (Deadline: " + deadline + ")";

let completeBtn = document.createElement("button");
completeBtn.innerText="✓";

completeBtn.onclick=function(){
li.classList.toggle("completed");

if(li.classList.contains("completed"))
completed++;
else
completed--;

updateCounter();
}

let deleteBtn = document.createElement("button");
deleteBtn.innerText="X";
deleteBtn.className="delete";

deleteBtn.onclick=function(){
li.remove();
total--;

if(li.classList.contains("completed"))
completed--;

updateCounter();
}

li.appendChild(completeBtn);
li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

total++;
updateCounter();

document.getElementById("subject").value="";
document.getElementById("task").value="";
document.getElementById("deadline").value="";
}

function updateCounter(){

document.getElementById("total").innerText=total;
document.getElementById("completed").innerText=completed;
document.getElementById("remaining").innerText=total-completed;

}