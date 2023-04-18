document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
 addToDo(e.target.newtaskdescription.value);
 e.target.newtaskdescription.value.reset()
})
})

function addToDo(task){
  const li = document.createElement("li");
  li.className = "task-item"
  li.innerText = task;
  document.querySelector("#list").appendChild(li);

  const button = document.createElement("button");
  button.className = "delete-btn"
  button.innerText = "X";
  li.appendChild(button);
  button.addEventListener("click", e => e.target.parentElement.remove())
}

