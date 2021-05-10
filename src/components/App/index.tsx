import React, { useState } from "react";
import { nanoid } from "nanoid";
import Context from "helpers/context";

import "./index.scss";

import {
  Header,
  SearchPanel,
  TodoList,
  FilterButtons,
  TodoListItemForm,
  ItemStatusCounters,
} from "helpers/importComponents";

const App = () => {
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
  const [filterItem, setFilterItem] = useState<String>("all");

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
  const search = (todos: any, label: any) => {
    if (!label) return todos;

    return todos.filter((todo: { label: string | any }) => {
      return todo.label.toLowerCase().indexOf(label.toLowerCase()) > -1;
    });
  };
  const handleSearch = (item: String) => {
    setSearchItem(item);
  };
  const filter = (todos: any, item: any) => {
    if (item === "all") return todos;
    else if (item === "active")
      return todos.filter((todo: { done: any }) => todo.done);
    else if (item === "done")
      return todos.filter((todo: { done: any }) => !todo.done);
    else return todos;
  };
  const handleFilter = (item: any) => {
    setFilterItem(item);
  };
  const showTodos = () => {
    const visibleTodos = filter(search(todos, searchItem), filterItem);
    return visibleTodos.length > 0 ? (
      <TodoList todos={visibleTodos} />
    ) : (
      <p>No todos. Add it via the form below.</p>
    );
  };
  const handleEdit = (editedLabel: any, id: any) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.label = editedLabel;
      return todo;
    });
    setTodos(updated);
  };

  const visibleT = filter(search(todos, searchItem), filterItem);
  let doneCount = visibleT.filter((todo: { done: any }) => todo.done).length;
  let activeCount = visibleT.length - doneCount;

  return (
    <Context.Provider
      value={{ handleDeleteItem, onToggleDone, onToggleImportant, handleEdit }}
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
            <FilterButtons onFilter={handleFilter} />
          </div>
          <div className="main__todos">{showTodos()}</div>
          <div className="main__add-item-form">
            <TodoListItemForm onCreate={handleAddItem} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
