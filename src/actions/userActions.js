import Axios from "axios";
import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";

export const signin = (Username, Password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { Username, Password } });
  try {
    const { data } = await Axios.post(
      "https://ulearnapi.schneidestaging.in/api/User/Authenticate",
      { Username, Password }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // localStorage.setItem("Authenticate", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const studentlogin = (Email) => async (dispatch, getState) => {
  dispatch({ type: STUDENT_LOGIN_REQUEST, payload: { Email } });
  const {
    userSignin: { userInfo },
    encriptDecrypt: { encrIptDecrypt },
  } = getState();
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const EmailPAssword = {
      Parameter: JSON.stringify({ Email, Password: encrIptDecrypt }),
    };
    const { data } = await Axios.post(
      "https://ulearnapi.schneidestaging.in/api/User/StudentLogin",
      EmailPAssword,
      config
    );
    const parsedData = JSON.parse(data.map(data =>data.result));

    dispatch({ type: STUDENT_LOGIN_SUCCESS, payload: parsedData });
    // const resultString = data[0]?.result;
    // const resultArray = JSON.parse(resultString);
    // const IsActive = resultArray?.[0]?.status;
    console.log(parsedData);
    localStorage.setItem("studentLogin", JSON.stringify(parsedData));
  } catch (error) {
    dispatch({
      type: STUDENT_LOGIN_FAIL,
      payload:
        'invalid email or password',
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("studentLogin");
  dispatch({ type: STUDENT_LOGOUT });
};
