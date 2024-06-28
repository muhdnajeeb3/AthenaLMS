import axios from "axios";
import {
  GETCOURSE_MODULE_FAIL,
  GETCOURSE_MODULE_REQUEST,
  GETCOURSE_MODULE_SUCCESS,
  GETSTUDENT_ENROLLMENT_FAIL,
  GETSTUDENT_ENROLLMENT_REQUEST,
  GETSTUDENT_ENROLLMENT_SUCCESS,
} from "../constants/courseDetails";

export const GetStudentEnrollment = () => async (dispatch, getState) => {
  dispatch({ type: GETSTUDENT_ENROLLMENT_REQUEST });
  const {
    studentLogin: { studentInfo },
  } = getState();
  let userId = null;
  if (studentInfo && studentInfo.length > 0 && studentInfo[0]?.result) {
    try {
      const resultArray = JSON.parse(studentInfo[0].result);
      if (resultArray && resultArray.length > 0) {
        userId = resultArray[0].UserId;
      }
    } catch (error) {
      console.error("Error parsing studentInfo result:", error);
    }
  }
  try {
    const { data } = await axios.post(
      "https://ulearnapi.schneidestaging.in/api/User/GetStudentEnrollment",
      { Parameter: JSON.stringify({ UserId: userId }), Type: "GET" }
    );
    dispatch({ type: GETSTUDENT_ENROLLMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GETSTUDENT_ENROLLMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetCourseModule = (courseId) => async (dispatch, getState) => {
  dispatch({ type: GETCOURSE_MODULE_REQUEST });
  const {
    studentLogin: { studentInfo },
  } = getState();
  let userId = null;
  if (studentInfo && studentInfo.length > 0 && studentInfo[0]?.result) {
    try {
      const resultArray = JSON.parse(studentInfo[0].result);
      if (resultArray && resultArray.length > 0) {
        userId = resultArray[0].UserId;
      }
    } catch (error) {
      console.error("Error parsing studentInfo result:", error);
    }
  }
  try {
    const { data } = await axios.post(
      "https://ulearnapi.schneidestaging.in/api/Course/GetCourseModule",
      { Parameter: JSON.stringify({ UserId: userId,CourseId:courseId }), Type: "GET" }
    );
    dispatch({ type: GETCOURSE_MODULE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GETCOURSE_MODULE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
