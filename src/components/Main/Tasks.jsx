import TaskMenu from '../Menu/TaskMenu';
import TaskList from './TaskList';

function Tasks() {
  return (
    <div className="tasks">
      <TaskMenu />
      <TaskList />
      <div className="tasks__shadow"></div>
    </div>
  );
}

export default Tasks;
