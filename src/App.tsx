import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
