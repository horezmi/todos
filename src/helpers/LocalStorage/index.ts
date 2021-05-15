import { TodosType } from 'types/interfaces';

export const getTodosFromStorage = (): TodosType[] => {
  const data: string | any = localStorage.getItem('todos');
  const todos = JSON.parse(data);
  return todos;
};

export const setTodosToStorage = (todos: TodosType[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
