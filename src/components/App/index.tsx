import React, { useState } from "react";
import { nanoid } from "nanoid";
import Context from "../../helpers/context";

import "./App.scss";

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
  const [filteredTodos, setfilteredTodos] = useState(todos);

  const updateFilteredTodos = (updated : any) => {
    setTodos(updated);
    setfilteredTodos(updated);
  }
  const handleDeleteItem = (id: any) => {
    const updated = todos.filter(todo => todo.id !== id);
    updateFilteredTodos(updated);
  };
  const handleAddItem = (title: any) => {
    const updated = todos.concat(createItem(title))
    updateFilteredTodos(updated);
  };
  const onToggleDone = (id: any) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    updateFilteredTodos(updated);
  };
  const onToggleImportant = (id: any) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.important = !todo.important;
      return todo;
    });
    updateFilteredTodos(updated);
  };
  // const handleSearch = (value : any) => {
  //   if (value) {
  //     const label = value.trim();
  //     console.log(label);
  //     const updated = filteredTodos.filter(todo => todo.label === label);
  //     setfilteredTodos(updated);
  //   }
  // }
  const filter = (name : String) => {
    switch(name) {
      case "all":
        setfilteredTodos(todos);
        break;
      case 'done':
        setfilteredTodos(todos.filter(todo => !todo.done));
        break;
      case 'active':
        setfilteredTodos(todos.filter(todo => todo.done));
        break;
    }
  }

  let doneCount = filteredTodos.filter((todo) => todo.done).length;
  let activeCount = filteredTodos.length - doneCount;

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
            <SearchPanel 
              // onSearch={handleSearch}
            />
            <FilterButtons
              onFilter={filter}
            />
          </div>
          <div className="main__todos">
            {todos.length > 0 ? (
              <TodoList todos={filteredTodos} />
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
