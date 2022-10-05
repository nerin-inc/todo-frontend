import Icons from '../../img/icons/icons';

function AddTask({ setEditable }) {
  return (
    <div
      onClick={() => setEditable('new')}
      className="section-bg add-task">
      <div className="add-task__icon dfc">
        <Icons name="plus" color="#FFF" />
      </div>
      <div className="add-task__name">Add Task</div>
    </div>
  );
}

export default AddTask;
