const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
    /* add is-dragging class to draggables when gragging happens */
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });
    /* remove is-draggin class when drag ends */
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
});

droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        
        /* check which task to move */
        const bottom_task = insertAboveTask(zone, e.clientY);
        const current_task = document.querySelector(".is-dragging");

        if (!bottom_task) {
            zone.appendChild(current_task);
        }
        else {
            zone.insertBefore(current_task, bottom_task);
        }
    });
});

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");
    let closest_task = null;
    let closest_offset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        /* calculate closest offset to choose the task to move*/
        const {top} = task.getBoundingClientRect();
        const offset = mouseY - top;
        if (offset < 0 && offset > closest_offset) {
            closest_offset = offset;
            closest_task = task;
        }
    });

    return closest_task;
};