/* eslint-disable no-unused-vars */
import createItemComponent from "../components/itemComponent";

export default class Task {
  constructor(title, dueDate, description = " ", project = "none") {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
    this.done = false;
    // set the id to 0 if first, or to +1 of the last item
    this.id = tasks.length ? +tasks[tasks.length - 1].id + 1 : 0;
    this.add();
  }

  static display(task) {
    return createItemComponent(task);
  }

  add() {
    tasks.push(this);
    Task.storeAllItems();
  }

  static remove(id) {
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }
    Task.storeAllItems();
  }

  static edit(id, newTitle) {
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex > -1) {
      tasks[taskIndex].title = newTitle;
    }
    Task.storeAllItems();
  }

  static toggleDone(id) {
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex > -1) {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      Task.storeAllItems();
    }
  }

  static storeAllItems() {
    if (window.localStorage.getItem("localTasks")) {
      window.localStorage.removeItem("localTasks");
    }
    window.localStorage.setItem("localTasks", JSON.stringify(tasks));
  }

  static retrieveAllItems() {
    return JSON.parse(window.localStorage.getItem("localTasks"));
  }
}

const tasks = Task.retrieveAllItems() || [];

export { tasks };
