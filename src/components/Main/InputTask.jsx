import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import fetchTasks from '../../store/asyncActions/fetchTasks';

function InputTask({ setEditable }) {
  const title = useRef('');
  const description = useRef('');
  const dueDate = useRef('');
  const dueTime = useRef('');

  const dispatch = useDispatch();

  function saveTask() {
    try {
      dispatch(
        fetchTasks.add({
          title: title.current.value,
          description: description.current.value,
          start_date: new Date(),
          end_date: dueDate.current.value,
        }),
      );
      setEditable('');
    } catch (e) {
      console.log('error');
    }
  }
  return (
    <div className="task-input">
      <div className="task-input__container section-bg">
        <div className="task-input__body">
          <input
            className="task-input__name"
            type="text"
            placeholder="Title"
            ref={title}
          />
          <div className="task-input__description-container">
            <textarea
              className="task-input__description"
              type="text"
              placeholder="Description"
              ref={description}
            />
          </div>
          <div className="task-input__tags">
            <div className="task-input__tag">
              <span>Home</span>
            </div>
            <div className="task-input__tag">
              <span>Study</span>
            </div>
            <div className="task-input__tag">
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="task-input__side">
          <label htmlFor="date-input">date:</label>
          <input
            className="task-input__date-time"
            type="date"
            name="date"
            id="date-input"
            ref={dueDate}
          />
          <label htmlFor="time-input">time:</label>
          <input
            className="task-input__date-time"
            type="time"
            name="time"
            id="time-input"
            ref={dueTime}
          />
        </div>
      </div>
      <div className="task-input__actions">
        <div className="task-input__actions-container">
          <button
            className="task-input__action task-input__action-cancel"
            onClick={() => setEditable(0)}>
            Cancel
          </button>
          <button
            onClick={saveTask}
            className="task-input__action task-input__action-save">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
