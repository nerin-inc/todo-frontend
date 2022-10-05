const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = true);
    case LOGOUT:
      return (state = false);
    default:
      return state;
  }
};

export const login = (payload) => ({ type: LOGIN, payload });
export const logout = (payload) => ({ type: LOGOUT, payload });
