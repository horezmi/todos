export interface TodosType {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export interface ItemStatusCountersPropsType {
  doneCount: number;
  activeCount: number;
}

export interface SearchPanelPropsType {
  onSearch: (item: string) => void;
}

export interface FilterButtonsPropsType {
  onFilter: (item: string) => void,
}

export interface TodoListItemFormPropsType {
  onCreate: (title: string) => void,
}

export interface todosAppContextType {
  handleDeleteItem: (title: string) => void,
  handleEditItem: (editedLabel: string, id: string) => void,
  onToggleDone: (id: string) => void,
  onToggleImportant: (id: string) => void,
}
