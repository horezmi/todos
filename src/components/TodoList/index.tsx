import React from 'react';
import { TodoListItem } from 'components';
import { TodosType } from 'types/interfaces';

import './index.scss';

const TodoList = ({ todos }: {todos: TodosType[]}) => {
  const lists = todos.map((todo) => (
    <li
      className="list-group-item todo-list__li"
      key={`id${todo.id}`}
    >
      <TodoListItem {...todo} />
    </li>
  ));

  return (
    <div className="todo-list">
      <ul className="list-group todo-list__ul">{lists}</ul>
    </div>
  );
};

export default TodoList;
