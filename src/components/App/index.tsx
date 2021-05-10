import React, { useState } from "react";
import { nanoid } from "nanoid";
import Context from "../../helpers/context";

import "./index.scss";

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import FilterButtons from "../FilterButtons";
import TodoListItemForm from "../TodoListItemForm";
import ItemStatusCounters from "../ItemStatusCounters";

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
  const [searchItem, setSearchItem] = useState<String>("");

  const handleDeleteItem = (id: any) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };
  const handleAddItem = (title: any) => {
    const updated = todos.concat(createItem(title));
    setTodos(updated);
  };
  const onToggleDone = (id: any) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(updated);
  };
  const onToggleImportant = (id: any) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.important = !todo.important;
      return todo;
    });
    setTodos(updated);
  };
  const handleSearch = (item: String) => {
    setSearchItem(item);
  };
  const search = (todos: any, label: any) => {
    if (!label) return todos;

    return todos.filter((todo: { label: string | any }) => {
      return todo.label.toLowerCase().indexOf(label.toLowerCase()) > -1;
    });
  };

  let doneCount = todos.filter((todo) => todo.done).length;
  let activeCount = todos.length - doneCount;

  const visibleTodos = search(todos, searchItem);

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
            <SearchPanel onSearch={handleSearch} />
            <FilterButtons />
          </div>
          <div className="main__todos">
            {visibleTodos.length > 0 ? (
              <TodoList todos={visibleTodos} />
            ) : (
              <p>No todos. Add it via the form below.</p>
            )}
          </div>
          <div className="main__add-item-form">
            <TodoListItemForm onCreate={handleAddItem} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
