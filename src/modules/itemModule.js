import createItemComponent from "../components/itemComponent";

export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  display() {
    return createItemComponent(this.title);
  }
}

const testTasks = [];
testTasks.push(new Task("Get dressed", "git gud", "1917", "high"));
testTasks.push(new Task("Git better", "git gud", "1917", "high"));

export { testTasks };
