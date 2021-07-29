import axios from "axios";

const SET_LOGIN = "SET_LOGIN";
const SET_AUTH = "SET_AUTH";
const RESET_AUTH = "RESET_AUTH";
const SET_CHECK_FAILED = "SET_CHECK_FAILED";

const INITIAL_STATE = {
  auth: {},
  preCheck: false,
  loggedIn: false,
};

export const setLogin = (loggedIn) => {
  return {
    type: SET_LOGIN,
    loggedIn,
  };
};

export const fetchToken = (credentials) => {
  return async (dispatch) => {
    try {
      await axios.post("/api/auth", credentials);
      dispatch(setLogin(true));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    auth,
  };
};
export const setCheckFailed = () => {
  return {
    type: SET_CHECK_FAILED,
  };
};

export const fetchAuth = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/auth", {
        credentials: "include",
        headers: {
          authorization: "",
        },
      });
      dispatch(setAuth(data));
    } catch (e) {
      dispatch(setCheckFailed());
      console.log(e);
    }
  };
};

export const resetAuth = () => {
  return {
    type: RESET_AUTH,
  };
};
export const resetToken = () => {
  return async (dispatch) => {
    try {
      await axios.put("/api/auth");
      dispatch(resetAuth());
    } catch (e) {
      console.log(e);
    }
  };
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: action.loggedIn };
    case SET_AUTH:
      return { ...state, auth: action.auth, loggedIn: true, preCheck: true };
    case RESET_AUTH:
      return { auth: {}, loggedIn: false, preCheck: false };
    case SET_CHECK_FAILED:
      return { ...state, preCheck: true };
    default:
      return state;
  }
}
