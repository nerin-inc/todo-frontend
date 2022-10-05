const ADD = 'ADD';
const DEL = 'DEL';
const EDIT = 'EDIT';
const GET = 'GET';

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return action.payload ? [...state, action.payload] : state;
    case EDIT:
      return { ...state, num: state.num - 1 };
    case GET:
      return action.payload;
    case DEL:
      return action.payload ? state.filter((el) => el.id !== action.payload) : state;
    default:
      return state;
  }
};

export const addTask = (payload) => ({ type: ADD, payload });
export const delTask = (payload) => ({ type: DEL, payload });
export const editTask = (payload) => ({ type: EDIT, payload });
export const getTasks = (payload) => ({ type: GET, payload });
