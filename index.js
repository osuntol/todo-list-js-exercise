// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];
// taskTitles.push(title);
// taskDescriptions.push(description);
// taskComplete.push(false);

function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(){
      task.complete = true;
    }
  }

  return task;
}


// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task task1
const task2 = newTask("Do Laundry","😨" ); // task 1
const tasks = [task1, task2]


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task2.markCompleted()
task1.logState(); // Clean Cat Litter has been completed

console.log("TASKS:" , tasks);
