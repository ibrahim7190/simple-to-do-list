let taskInput = document.getElementById('taskInput');
let btnCreate = document.getElementById('btnCreate');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let numberOfTasksSpan = document.getElementById('numberOfTasksSpan');
let h5NumberOfTasks = document.getElementById('h5NumberOfTasks');
let deleteAllBtn = document.getElementById('deleteAllBtn');
let rand1;
let rand2;
let rand3;
function gernrateRandom(){
    rand1=Math.floor(Math.random()*256);
    rand2=Math.floor(Math.random()*256);
    rand3=Math.floor(Math.random()*256);
}
let checkMessage = () => {
    if(allTasks.childElementCount == 0) {
        noTasks.classList.remove("none");
        h5NumberOfTasks.classList.add("none");
        deleteAllBtn.classList.add("none");
    } else {
    noTasks.classList.add("none");
    h5NumberOfTasks.classList.remove("none");
    deleteAllBtn.classList.remove("none");
}
};

let getTasksNumber = () => {
    numberOfTasksSpan.innerText = allTasks.children.length;
};

let addTask = () => {
    
    gernrateRandom();
    noTasks.classList.add('none');
    if(taskInput.value == '')
    {
        alert("Please Fill In The Input");
        checkMessage();
    }else{
  let taskValue = taskInput.value;

    allTasks.innerHTML += `
        <div style='background:rgb(${rand1},${rand2},${rand3})' class=' task alert'>${taskValue}
        <i class='deleteIcon fa-solid fa-trash-can'> </i>
        </div>
    `;
    taskInput.value='';
    checkMessage();
    getTasksNumber();
    }
};
btnCreate.addEventListener('click',addTask);

document.addEventListener('click',function(event)
{
    if(event.target.classList.contains('deleteIcon')) 
    {
      event.target.parentElement.remove();
        checkMessage();
        getTasksNumber();
    }
}
);

document.addEventListener('click',function(event)
{
    if(event.target.classList.contains('task'))
    {
        event.target.classList.add('checked')
    }
}
);

let deleteAll = () => {
    if(confirm("are you sure you want delete all tasks")){
        allTasks.innerText = "";   
        getTasksNumber();
        checkMessage();
    }
};
deleteAllBtn.addEventListener("click",deleteAll);

taskInput.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){addTask();}
});

// dark and light 
let body = document.querySelector("body");
let icon = document.querySelector(".bulb i");
let p=document.querySelector('p')
icon.onclick = () => {
    if(!body.classList.contains('dark')){
        body.classList.add('dark');
        icon.classList.add('light');
    }else{
        body.classList.remove('dark');
        icon.classList.remove('light');
    }
}