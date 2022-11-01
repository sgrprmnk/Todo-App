document.querySelector("form").addEventListener("submit", todoApp);
let taskArr;
if (localStorage.getItem("todoList") == null) {
  taskArr = [];
} else {
  taskArr = JSON.parse(localStorage.getItem("todoList"));
}
display(taskArr);

function todoApp() {
  event.preventDefault();

  let tsk = document.getElementById("task").value;
  let prior = document.getElementById("priority").value;
  let obj = {
    task: tsk,
    prio: prior,
  };
  taskArr.push(obj);
  localStorage.setItem("todoList", JSON.stringify(taskArr));
  display(taskArr);
}

function display(taskArr) {
  document.querySelector("tbody").innerHTML = "";
  taskArr.forEach(function (e, index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = e.task;

    let col2 = document.createElement("td");
    col2.innerText = e.prio;
    col2.style.backgroundColor = "red";

    let col3 = document.createElement("td");
    col3.innerText = "Delete";

    col3.addEventListener("click", function () {
      deleteRow(e, index);
    });
    col3.style.color = "red";
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}

function deleteRow(e, index) {
  taskArr.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(taskArr));
  display(taskArr);
}
