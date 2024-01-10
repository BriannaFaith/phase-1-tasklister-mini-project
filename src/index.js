document.addEventListener("DOMContentLoaded", () => {
// inputField with id 'new-task-description'
  const inputField = document.getElementById("new-task-description");
  //form element
  const formElement = document.querySelector("form");
  //event listener for form submission
  formElement.addEventListener('submit', (e) => {
    //get the value of the input field
  let newtask =inputField.value;
    // prevents default form submission
    e.preventDefault();

    //checks if new task is empty
    if (newtask.length===0){
    alert('Task cannot be empty')
    }else{
      //call the function to handle new task
      handleToDo(newtask);
    }
    //reset after submission
    formElement.reset()
  });
});


//handleToDo to handle creation of a new item
function handleToDo (newtask) {
  //create a list item
  let listItem = document.createElement("li");
  //create a delete button
  let btn = document.createElement('button')

  //add a click event to delete button
  btn.addEventListener('click',handleDelete)
  btn.textContent='x'
  listItem.innerText = `${newtask}`;
  listItem.appendChild(btn) // btn will be within the list item
  document.querySelector("#tasks").appendChild(listItem);
}
//hanleDelete to handle the deletion of an item
function handleDelete(e){
e.target.parentNode.remove()
}