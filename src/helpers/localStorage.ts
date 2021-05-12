export const getTodosFromStorage = () => {
  const data: string | any = localStorage.getItem("todos");
  const todos = JSON.parse(data);
  return todos;
};

export const setTodosToStorage = (todos: any) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
