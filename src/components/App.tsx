import React, { useState } from "react";
import { nanoid } from "nanoid";
import Context from "../helpers/context";
import "./App.scss";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import TodoListItemForm from "./TodoListItemForm";
import ItemStatusCounters from "./ItemStatusCounters";

function App() {
  const createItem = (label: any) => {
    return {
      id: nanoid(),
      label,
      important: false,
      done: false,
    };
  };

  let todosData = [
    createItem("Learn React"),
    createItem("Create an App"),
    createItem("Drink Coffee"),
    createItem("Go to the Cinema"),
  ];

  const [todos, setTodos] = useState(todosData);

  const handleDeleteItem = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAddItem = (title: any) => {
    setTodos(todos.concat(createItem(title)));
  };
  const onToggleDone = (id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.done = !todo.done;
        return todo;
      })
    );
  };
  const onToggleImportant = (id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.important = !todo.important;
        return todo;
      })
    );
  };
  const handleFilterAll = () => {
    console.log("todosAll");
  };
  const handleFilterActive = () => {
    console.log("todosAll");
  };
  const handleFilterDone = () => {
    console.log("todosAll");
  };

  let doneCount = todos.filter((todo) => todo.done).length;
  let activeCount = todos.length - doneCount;

  return (
    <Context.Provider
      value={{ handleDeleteItem, onToggleDone, onToggleImportant }}
    >
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="main__item-status-counters">
            <ItemStatusCounters
              doneCount={doneCount}
              activeCount={activeCount}
            />
          </div>
          <div className="main__search-filter">
            <SearchPanel />
            <FilterButtons
              onAll={handleFilterAll}
              onActive={handleFilterActive}
              onDone={handleFilterDone}
            />
          </div>
          <div className="main__todos">
            {todos.length > 0 ? <TodoList todos={todos} /> : <p>No todo</p>}
          </div>
          <div className="main__add-item">
            <TodoListItemForm onCreate={handleAddItem} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
