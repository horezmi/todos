import React from 'react';
import { nanoid } from 'nanoid'

import Header from './Header'
import SearchPanel from './SearchPanel'
import TodoList from './TodoList'
import FilterButtons from './FilterButtons'

import './App.scss';

function App() {

const todosData = [
    {
      id: nanoid(),
      label: 'Learn React',
      important: true,
    },
    {
      id: nanoid(),
      label: 'Create an App',
      important: false,
    },
    {
      id: nanoid(),
      label: 'Drink Coffee',
      important: false,
    },
    {
      label: 'Go to the Cinema',
      important: true,
    },
  ]

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
          <TodoList todos={todosData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
