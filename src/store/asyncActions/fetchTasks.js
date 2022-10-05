import { addTask, getTasks, delTask } from '../reducers/taskReducer';
import Request from '../../services/RequestService';

export default class fetchTasks {
  static get() {
    return (dispatch) => {
      Request.get('/tasks/').then((json) => dispatch(getTasks(json)));
    };
  }
  static add(task) {
    try {
      const res = (dispatch) => {
        Request.post('/tasks/', task).then((json) =>
          dispatch(addTask(json)),
        );
      };
      return res;
    } catch (e) {
      return 0;
    }
  }

  static del(id) {
    try {
      const res = (dispatch) => {
        Request.del(`/tasks/${id}/`).then(dispatch(delTask(id)));
      };
      return res;
    } catch (e) {
      return 0;
    }
  }

  static edit(task, id) {
    try {
      const res = (dispatch) => {
        Request.post(`/tasks/${id}`, task).then((json) =>
          dispatch(addTask(json)),
        );
      };
      return res;
    } catch (e) {
      return 0;
    }
  }
}

// return (dispatch) => {
//   Request.post('/tasks/', task).then((json) => dispatch(addTask(json)));
// };
