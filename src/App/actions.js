// actions.js
let nextTaskId = 1;

export const addTask = (description) => ({
  type: "ADD_TASK",
  payload: {
    id: nextTaskId++,
    description,
    isDone: false,
  },
});

export const updateTask = (updatedTask) => ({
  type: "UPDATE_TASK",
  payload: updatedTask,
});
