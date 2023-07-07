// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
