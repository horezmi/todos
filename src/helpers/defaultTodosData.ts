import { nanoid } from 'nanoid';
import { TodosType } from 'types/interfaces';

export const createItem = (label: string): TodosType => ({
  id: nanoid(),
  label,
  important: false,
  done: false,
});

export const todosData: TodosType[] = [
  createItem('Learn React'),
  createItem('Create an App'),
  createItem('Drink Coffee'),
  createItem('Go to the Cinema'),
];
