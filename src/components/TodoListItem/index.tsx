import React, { useState, useContext } from 'react';
import todosAppContext from 'helpers/Context';
import cn from 'classnames';
import useInputValue from 'helpers/Hooks/useInputValue';
import { TodosType, todosAppContextType } from 'types/interfaces';

import './index.scss';

const TodoListItem = ({ label, id, important, done }: TodosType) => {
  const { handleDeleteItem, onToggleImportant,
    onToggleDone, handleEditItem } = useContext<todosAppContextType>(todosAppContext);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { bindValue } = useInputValue(label);

  const { value } = bindValue;
  value.trim();

  const updateValue = (value: string) => {
    if (value) {
      handleEditItem(value, id);
      setIsEdit(false);
    }
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    updateValue(value);
  };

  const onClickEdit = () => {
    updateValue(value);
  };

  const onEdit = () => setIsEdit((s) => !s);
  const onDelete = (id: string) => () => handleDeleteItem(id);
  const onDone = (id: string) => () => onToggleDone(id);
  const onImportant = (id: string) => () => onToggleImportant(id);

  const showItem = (): JSX.Element => (isEdit ? (
    <form onSubmit={onSubmit}>
      <input
        className="form-control-sm"
        type="text"
        {...bindValue}
        autoFocus
      />
    </form>
  ) : (
    <div className="todo-list-item__label-wrap">
      <span
        className={cn({ 'todo-list-item__label-span': true, important, done })}
        onClick={onDone(id)}
      >
        {label}
      </span>
    </div>
  ));

  return (
    <div className="todo-list-item">
      {showItem()}
      <div className="todo-list-item__btns">
        <button className="btn btn-success" onClick={isEdit ? onClickEdit : onEdit}>
          <i className="fas fa-edit" />
        </button>
        <button className="btn btn-danger" onClick={onDelete(id)}>
          <i className="fas fa-trash" />
        </button>
        <button className="btn btn-info" onClick={onImportant(id)}>
          <i className="fas fa-exclamation" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
