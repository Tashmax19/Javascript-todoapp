// Referenciing all the necessary Elements.

let ourInput = document.querySelector(".our-input")
let ourBtn = document.querySelector(".our-btn")
let ourTodoList = document.querySelector(".our-todolist")

// console.log(ourInput, ourBtn, ourTodoList);

function AddTodo(){
    console.log(ourInput.value);
    // Creating our 'li' dynamically using Javascript.
    let ourLi = document.createElement("li")
    // set the innetHTML to the input value.

    // concatenating the value to an html button
     // ourLi.innerHTML = ourInput.value+"<button> delete</button>"
    ourLi.innerHTML = `${ourInput.value}<button class='del-btn'> x </button>`

    // This adds the li from line 13 to the ol which is in our html
    ourTodoList.appendChild(ourLi)

    ourInput.value = "";
    RemoveTodo()


}

ourBtn.addEventListener("click", AddTodo)


// Remove Todo
function RemoveTodo(){
    let removeBtns = document.querySelectorAll('.del-btn')

    removeBtns.forEach(function(button){
        button.addEventListener('click', function(){
            this.parentElement.remove()
        })

    })
}
