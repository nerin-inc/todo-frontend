import styles from './styles.module.sass';

function TaskContainer() {
  return (
    <div className={styles.TaskContainer}>
      <ul>
        <li>task</li>
        <li>task</li>
      </ul>
      <div>add task</div>
    </div>
  );
}

export default TaskContainer;
