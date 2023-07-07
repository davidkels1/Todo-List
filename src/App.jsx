// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./App/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import './App.css'

const App = () => {
  return (
    <div className="App">
    <Provider store={store}>
      <div className="container">
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
    </div>
  );
};

export default App;
