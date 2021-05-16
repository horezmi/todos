import React, { useState, useEffect, FC } from 'react';
import todosAppContext from 'helpers/Context';
import { createItem, todosData } from 'helpers/defaultTodosData';
import { getTodosFromStorage, setTodosToStorage } from 'helpers/LocalStorage';
import { TodosType } from 'types/interfaces';

import {
  Header,
  SearchPanel,
  TodoList,
  FilterButtons,
  TodoListItemForm,
  ItemStatusCounters,
} from 'components';

import './index.scss';

const App: FC = () => {
  const [todos, setTodos] = useState<TodosType[]>(getTodosFromStorage() || todosData);
  const [searchItem, setSearchItem] = useState<string>('');
  const [filterItem, setFilterItem] = useState<string>('all');

  useEffect(() => {
    setTodosToStorage(todos);
  }, [todos]);

  const handleDeleteItem = (todoId: string) => {
    const updated = todos.filter(({ id }) => id !== todoId);
    setTodos(updated);
  };
  const handleAddItem = (title: string) => {
    const updated = todos.concat(createItem(title));
    setTodos(updated);
  };
  const onToggleDone = (id: string) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(updated);
  };
  const onToggleImportant = (id: string) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.important = !todo.important;
      return todo;
    });
    setTodos(updated);
  };
  const search = (todos: TodosType[], searchLabel: string) => {
    if (!searchLabel) return todos;

    return todos.filter(
      ({ label }) => label.toLowerCase().indexOf(searchLabel.toLowerCase()) > -1
    );
  };
  const handleSearch = (item: string) => {
    setSearchItem(item);
  };
  const filter = (todos: TodosType[], item: string):TodosType[] => {
    if (item === 'All') return todos;
    if (item === 'Active') {
      return todos.filter((todo) => !todo.done);
    }
    if (item === 'Done') {
      return todos.filter((todo) => todo.done);
    }
    return todos;
  };
  const handleFilter = (item: string) => {
    setFilterItem(item);
  };
  const showTodos = (): JSX.Element => {
    const visibleTodos = filter(search(todos, searchItem), filterItem);
    return visibleTodos.length > 0 ? (
      <TodoList todos={visibleTodos} />
    ) : (
      <p>No todos. Add it via the form below.</p>
    );
  };
  const handleEditItem = (editedLabel: string, id: string) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.label = editedLabel;
      return todo;
    });
    setTodos(updated);
  };

  const visibleT: TodosType[] = filter(search(todos, searchItem), filterItem);
  const doneCount: number = visibleT.filter((todo) => todo.done).length;
  const activeCount: number = visibleT.length - doneCount;

  return (
    <todosAppContext.Provider
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
    </todosAppContext.Provider>
  );
};

export default App;
