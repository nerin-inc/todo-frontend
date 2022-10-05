import { getTasks } from '../reducers/taskReducer';

export const fetchTasks = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => dispatch(getTasks(json)));
  };
};
