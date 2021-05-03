import React, { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import TodoListItemForm from "./TodoListItemForm";
import ItemStatusCounters from "./ItemStatusCounters";

import "./App.scss";

function App() {
  const createItem = (label : any) => {
    return {
      id: nanoid(),
      label,
      important: false,
      done: false,
    }
  };

  let todosData = [
    createItem("Learn React"),
    createItem("Create an App"),
    createItem("Drink Coffee"),
    createItem("Go to the Cinema"),
  ];

  const [todos, setTodos] = useState(todosData);
  const [value, setValue] = useState('');

  const handleDeleteItem = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  const handleAddItem = () => {
    setTodos(todos.concat(createItem(value)));
    setValue('');
  };
  const handleChangeItem = (event : any) => {
    setValue(event.target.value);
  };
  const onToggleDone = (id : any) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) 
        todo.done = !todo.done
      return todo
    }))
  };
  const onToggleImportant = (id : any) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) 
        todo.important = !todo.important
      return todo
    }))
  };

  let doneCount = todos.filter(todo => todo.done).length;
  let activeCount = todos.length - doneCount;

  return (
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
          <FilterButtons />
        </div>
        <div className="main__todos">
          <TodoList
            todos={todos}
            onDelete={handleDeleteItem}
            onToggleImportant={onToggleImportant}
            onToggleDone={onToggleDone}
          />
        </div>
        <div className="main__add-item">
          <TodoListItemForm
            value={value}
            onSubmit={handleAddItem}
            onChange={handleChangeItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
