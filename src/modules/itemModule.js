/* eslint-disable no-unused-vars */
import createItemComponent from "../components/itemComponent";

const tasks = [];

export default class Task {
  constructor(title, dueDate, description = " ", project = "none") {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
    // set the id to 0 if first, or to +1 of the last item
    this.id = tasks.length ? +tasks[tasks.length - 1].id + 1 : 0;
    this.add();
  }

  display() {
    return createItemComponent(this.title);
  }

  add() {
    tasks.push(this);
  }

  remove() {
    const taskIndex = tasks.findIndex((task) => task.id === this.id);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }
  }
}

const testTask1 = new Task("Get dressed", "1917");
const testTask2 = new Task("Git better", "1917");

export { tasks };
