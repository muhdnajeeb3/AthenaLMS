import axios from "axios";
import {
  GETCOURSE_MODULE_FAIL,
  GETCOURSE_MODULE_REQUEST,
  GETCOURSE_MODULE_SUCCESS,
  GETSTUDENT_ENROLLMENT_FAIL,
  GETSTUDENT_ENROLLMENT_REQUEST,
  GETSTUDENT_ENROLLMENT_SUCCESS,
  GETUNIT_DETAILS_FAIL,
  GETUNIT_DETAILS_REQUEST,
  GETUNIT_DETAILS_SUCCESS,
} from "../constants/courseDetails";

export const GetStudentEnrollment = () => async (dispatch, getState) => {
  dispatch({ type: GETSTUDENT_ENROLLMENT_REQUEST });
  const {
    studentLogin: { studentInfo },
  } = getState();
  // console.log(studentInfo);
  
  let userId =studentInfo && studentInfo[0].UserId || null;

  try {
    const { data } = await axios.post(
      "https://ulearnapi.schneidestaging.in/api/User/GetStudentEnrollment",
      { Parameter: JSON.stringify({ UserId: userId }), Type: "GET" }
    );
    // Parse JSON response data here
    const parsedData = JSON.parse(data.map((data) => data.result));

    dispatch({ type: GETSTUDENT_ENROLLMENT_SUCCESS, payload: parsedData });
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
  let userId =studentInfo && studentInfo[0].UserId || null;

  try {
    const { data } = await axios.post(
      "https://ulearnapi.schneidestaging.in/api/Course/GetCourseModule",
      {
        Parameter: JSON.stringify({ LeadId: userId, CourseId: courseId }),
        Type: "GET",
      }
    );
    const parsedData = JSON.parse(data.map(data =>data.result));

    dispatch({ type: GETCOURSE_MODULE_SUCCESS, payload: parsedData });
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

export const GetUnitDetails = (unitId,unitversionid) => async (dispatch, getState) => {
  dispatch({ type: GETUNIT_DETAILS_REQUEST });
  const {
    studentLogin: { studentInfo },
  } = getState();
  let userId =studentInfo && studentInfo[0].UserId || null;

  try {
    const { data } = await axios.post(
      "https://ulearnapi.schneidestaging.in/api/Course/GetUnitDetails",
      {
        Parameter: JSON.stringify({
          LeadId: userId,
          UnitId: unitId,
          VersionId: unitversionid,
        }),
        Type: "GET",
      }
    );
    const parsedData = JSON.parse(data.map(data =>data.result));

    dispatch({ type: GETUNIT_DETAILS_SUCCESS, payload: parsedData });
  } catch (error) {
    dispatch({
      type: GETUNIT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
