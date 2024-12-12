const textInput = document.getElementById('textIn');
const addTask = document.getElementById('add-btn');
const taskList = document.getElementById('taskList');

function addNewTask(){
 let newInput = textInput.value;

  if (newInput=== ""){
    alert('please insert new task');
    return;
  }
  
  const listItem = document.createElement('li');
  listItem.textContent= newInput;
  const newbtn = document.createElement('button');
  newbtn.textContent = 'Delete';
  
  newbtn.classList.add('newbtnn');
  newbtn.addEventListener('click',event=>{
    taskList.removeChild(listItem);
  });
  listItem.append(newbtn);
  taskList.append(listItem);
  textInput.value = '';
}

addTask.addEventListener('click',addNewTask);

textInput.addEventListener('keypress',event =>{
    if(event.key === 'Enter'){
        addNewTask();
    }
});