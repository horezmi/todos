import { createContext } from 'react';
import { todosAppContextType } from 'types/interfaces';

const todosAppContext = createContext<todosAppContextType>({
  handleDeleteItem: (title) => {},
  handleEditItem: (editedLabel, id) => {},
  onToggleDone: (id) => {},
  onToggleImportant: (id) => {},
});

export default todosAppContext;
