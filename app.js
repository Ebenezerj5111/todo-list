
function add() {
    let result = document.getElementById("input").value;

    if (result == '') {
        alert("Enter the item")
    }

    else {

        let todolist = document.getElementById("todolist");
        let list = document.createElement("li");
        list.textContent = result;

        todolist.appendChild(list)
        document.getElementById("input").value = " ";
    }

}

function remove() {
    let del = document.getElementById("todolist");
    del.removeChild(del.lastElementChild)
}





// let input = document.getElementById("input");

// let button = document.getElementById("add");

// let button1 = document.getElementById("clear");

// let todolist = document.getElementById("todolist");

// let todos = [];

// button.addEventListener("click", () => {

//     todos.push(input.value);
//     addtodo(input.value);
//     input.value = "";
// })

// function addtodo(todo) {

//     let list = document.createElement("li");
//     list.textContent = todo;
//     todolist.appendChild(list);
// }
