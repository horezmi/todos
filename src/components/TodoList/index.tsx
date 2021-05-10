import React from "react";
import TodoListItem from "components/TodoListItem";

import "./index.scss";

const TodoList = ({ todos }: any) => {
  const lists: any = todos.map((todo: any) => {
    return (
      <li key={"id" + todo.id} className="list-group-item todo-list__li">
        <TodoListItem {...todo} />
      </li>
    );
  });

  return (
    <div className="todo-list">
      <ul className="list-group todo-list__ul">{lists}</ul>
    </div>
  );
};

export default TodoList;
