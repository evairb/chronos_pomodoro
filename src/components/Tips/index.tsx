import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime} min</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo e de {state.config.workTime} </span>,
    shortBreakTime: (
      <span>Proximo ciclo e de descanso {state.config.shortBreakTime}</span>
    ),
    longBreakTime: (
      <span>Proximo ciclo e de descanso {state.config.longBreakTime}</span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
