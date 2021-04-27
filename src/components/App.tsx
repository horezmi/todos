import React, { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import TodoListItemForm from "./TodoListItemForm";

import "./App.scss";

function App() {
  let todosData = [
    {
      id: nanoid(),
      label: "Learn React",
      important: true,
    },
    {
      id: nanoid(),
      label: "Create an App",
      important: false,
    },
    {
      id: nanoid(),
      label: "Drink Coffee",
      important: false,
    },
    {
      id: nanoid(),
      label: "Go to the Cinema",
      important: true,
    },
  ];

  const [todos, setTodos] = useState(todosData);
  const [value, setValue] = useState('');

  const handleDeleteItem = (id: any) => {
    setTodos(() => todos.filter((todo) => todo.id !== id))
  };
  const handleAddItem = () => {
    const newItem = {
      id: nanoid(),
      label: value,
      important: false,
    }
    setTodos(() => todos.concat(newItem))
    setValue('');
  };
  const handleChangeItem = (event : any) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="main__search-filter">
          <SearchPanel />
          <FilterButtons />
        </div>
        <div className="main__todos">
          <TodoList
            todos={todos}
            onDelete={handleDeleteItem}
          />
        </div>
        <div className="main__add-item">
          <TodoListItemForm
            value={value}
            onClick={handleAddItem}
            onChange={handleChangeItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
