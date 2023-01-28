const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todo_lane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) {
        /* when nothing to add */
        return;
    }

    console.log(value);

    /* add new task which has been submitted */
    const new_task = document.createElement("p");
    new_task.classList.add("task");
    new_task.setAttribute("draggable", "true");
    new_task.innerText = value;

    /* add is-dragging class to draggables when gragging happens */
    new_task.addEventListener("dragstart", () => {
        new_task.classList.add("is-dragging");
    });
    /* remove is-draggin class when drag ends */
    new_task.addEventListener("dragend", () => {
        new_task.classList.remove("is-dragging");
    });

    todo_lane.appendChild(new_task);

    input.value = "";

});