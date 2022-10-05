import { useDispatch } from 'react-redux';
import fetchTasks from '../../store/asyncActions/fetchTasks';

function Task({ title, description, id, date, setEditable }) {
  let time = new Date(date);

  time = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(time);

  const dispatch = useDispatch();

  function deleleTask(id) {
    dispatch(fetchTasks.del(id));
  }

  return (
    <li className="task section-bg" onClick={() => setEditable(id)}>
      <div className="task__header">
        <div className="task__name">{title}</div>
        <div className="task__date">{time}</div>
      </div>
      <div className="task__description">{description}</div>
      <button onClick={() => deleleTask(id)}>delete</button>
    </li>
  );
}

export default Task;
