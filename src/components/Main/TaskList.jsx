import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTasks from '../../store/asyncActions/fetchTasks';
import AddTask from './AddTask';
import InputTask from './InputTask';
import Task from './Task';

function TaskList() {
  const store = useSelector((state) => state.taskReducer);
  const [editable, setEditable] = useState('');

  return (
    <ol className="task-list">
      {store.length > 0
        ? store.map((obj) =>
            obj.id !== editable ? (
              <Task
                setEditable={setEditable}
                id={obj.id}
                key={obj.id}
                title={obj.title}
                date={obj.end_date}
                description={obj.description}
              />
            ) : (
              <InputTask
                setEditable={setEditable}
                id={obj.id}
                key={obj.id}
                title={obj.title}
                date={obj.end_date}
                description={obj.description}
              />
            ),
          )
        : ''}

      {editable === 'new' ? (
        <InputTask setEditable={setEditable} />
      ) : (
        <AddTask setEditable={setEditable} />
      )}
    </ol>
  );
}

export default TaskList;
