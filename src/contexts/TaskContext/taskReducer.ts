import { TaskStateModel } from '../../models/TaskStateModels';
import { TaskActionModel, TaskActionTypes } from './taskAction';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
  }

  return state;
}
