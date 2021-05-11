import React, { useState, useEffect } from "react";
import Context from "helpers/context";
import { createItem, todosData, getTodosFromStorage } from "helpers/defaultTodosData";

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
  const [todos, setTodos] = useState(getTodosFromStorage() || todosData);
  const [searchItem, setSearchItem] = useState<String>("");
  const [filterItem, setFilterItem] = useState<String>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteItem = (todoId: string) => {
    const updated = todos.filter(({ id } : any) => id !== todoId);
    setTodos(updated);
  };
  const handleAddItem = (title: string) => {
    const updated = todos.concat(createItem(title));

    setTodos(updated);
  };
  const onToggleDone = (id: string) => {
    const updated = todos.map((todo : any) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(updated);
  };
  const onToggleImportant = (id: string) => {
    const updated = todos.map((todo : any) => {
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
  const handleSearch = (item: string) => {
    setSearchItem(item);
  };
  const filter = (todos: any, item: any) => {
    if (item === "All") return todos;
    else if (item === "Active")
      return todos.filter((todo: { done: any }) => !todo.done);
    else if (item === "Done")
      return todos.filter((todo: { done: any }) => todo.done);
    else return todos;
  };
  const handleFilter = (item: string) => {
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
  const handleEditItem = (editedLabel: any, id: any) => {
    const updated = todos.map((todo : any) => {
      if (todo.id === id) todo.label = editedLabel;
      return todo;
    });
    setTodos(updated);
  };

  const visibleT = filter(search(todos, searchItem), filterItem);
  const doneCount = visibleT.filter((todo: { done: any }) => todo.done).length;
  const activeCount = visibleT.length - doneCount;

  return (
    <Context.Provider
      value={{
        handleDeleteItem,
        handleEditItem,
        onToggleDone,
        onToggleImportant,
      }}
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
