import { nanoid } from 'nanoid';

export const createItem = (label: any) => ({
  id: nanoid(),
  label,
  important: false,
  done: false,
});

export const todosData = [
  createItem('Learn React'),
  createItem('Create an App'),
  createItem('Drink Coffee'),
  createItem('Go to the Cinema'),
];
