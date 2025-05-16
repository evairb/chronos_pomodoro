import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModels';
import { inicialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskAction';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: inicialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
