// Referenciing all the necessary Elements.

let ourInput = document.querySelector(".our-input");
let ourTodoList = document.querySelector(".our-todolist");

// console.log(ourInput, ourBtn, ourTodoList);

function AddTodo() {
  if (ourInput.value.length > 0) {
    console.log(ourInput.value);
    // Creating our 'li' dynamically using Javascript.
    let ourLi = document.createElement("li");
    // set the innetHTML to the input value.

    // concatenating the value to an html button
    // ourLi.innerHTML = ourInput.value+"<button> delete</button>"
    ourLi.innerHTML = `${ourInput.value}<button class='del-btn'> x </button>`;

    // This adds the li from line 13 to the ol which is in our html
    ourTodoList.appendChild(ourLi);

    ourInput.value = "";
    RemoveTodo();
    FinishTodo()
  } else {
    alert("Please type something");
  }
}

ourInput.addEventListener("change", AddTodo);

// Remove Todo
function RemoveTodo() {
  let removeBtns = document.querySelectorAll(".del-btn");

  removeBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

// Finish Todo
function FinishTodo(){
    let ourtodos = document.querySelectorAll("li")
    ourtodos.forEach(function(li){
        li.addEventListener("click",function(){
          li.classList.toggle("finished")
          
        })
    })

}