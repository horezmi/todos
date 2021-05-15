export interface TodosType {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export interface ItemStatusCountersType {
  doneCount: number;
  activeCount: number;
}

export interface SearchPanelType {
  onSearch: (item: string) => void;
}

export interface FilterButtonsType {
  onFilter: (todos: TodosType[], item: string) => TodosType[],
}

export interface TodoListItemFormType {
  onCreate: (title: string) => void,
}

export interface todosAppContextType {
  handleDeleteItem: (title: string) => void,
  handleEditItem: (editedLabel: string, id: string) => void,
  onToggleDone: (id: string) => void,
  onToggleImportant: (id: string) => void,
}
