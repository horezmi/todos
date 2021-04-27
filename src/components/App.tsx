import React, { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";

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

  const handleDelete = (id: any) => {
    setTodos(() => todos.filter((elem) => elem.id !== id))
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
            onDelete={handleDelete}
            todos={todos} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
