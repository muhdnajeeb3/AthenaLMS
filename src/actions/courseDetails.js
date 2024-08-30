import axios from "axios";
import {
  GETCOURSE_MODULE_FAIL,
  GETCOURSE_MODULE_REQUEST,
  GETCOURSE_MODULE_SUCCESS,
  GETPROJECT_DETAILS_FAIL,
  GETPROJECT_DETAILS_REQUEST,
  GETPROJECT_DETAILS_SUCCESS,
  GETQUESTION_DETAILS_FAIL,
  GETQUESTION_DETAILS_REQUEST,
  GETQUESTION_DETAILS_SUCCESS,
  GETSTUDENT_ENROLLMENT_FAIL,
  GETSTUDENT_ENROLLMENT_REQUEST,
  GETSTUDENT_ENROLLMENT_SUCCESS,
  GETUNIT_DETAILS_FAIL,
  GETUNIT_DETAILS_REQUEST,
  GETUNIT_DETAILS_SUCCESS,
} from "../constants/courseDetails";

const BaseUrl = "https://ulearnapi.schneidestaging.in/api";

export const GetStudentEnrollment = () => async (dispatch, getState) => {
  dispatch({ type: GETSTUDENT_ENROLLMENT_REQUEST });
  const {
    studentLogin: { studentInfo },
  } = getState();
  // console.log(studentInfo);

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;

  try {
    const { data } = await axios.post(`${BaseUrl}/User/GetStudentEnrollment`, {
      Parameter: JSON.stringify({ LeadId: LeadId }),
      Type: "GET",
    });

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
  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;

  try {
    const { data } = await axios.post(`${BaseUrl}/Course/GetCourseModule`, {
      Parameter: JSON.stringify({ LeadId: LeadId, CourseId: courseId }),
      Type: "GET",
    });
    
    const parsedData = JSON.parse(data.map((data) => data.result));

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

export const GetUnitDetails =
  (unitId, unitversionid) => async (dispatch, getState) => {
    dispatch({ type: GETUNIT_DETAILS_REQUEST });
    const {
      studentLogin: { studentInfo },
    } = getState();
    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;

    try {
      const { data } = await axios.post(`${BaseUrl}/Course/GetUnitDetails`, {
        Parameter: JSON.stringify({
          LeadId: LeadId,
          UnitId: unitId,
          VersionId: unitversionid,
        }),
        Type: "GET",
      });
      const parsedData = JSON.parse(data.map((data) => data.result));

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

  // projectdetails
  export const GetProjectDetails = (courseId) => async (dispatch, getState) => {
    dispatch({ type: GETPROJECT_DETAILS_REQUEST });
    const {
      studentLogin: { studentInfo },
    } = getState();
    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/GetProjectDetails`, {
        Parameter: JSON.stringify({ LeadId: LeadId, CourseId: courseId }),
        Type: "GET",
      });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
  
      dispatch({ type: GETPROJECT_DETAILS_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: GETPROJECT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // getquestion
  export const GetQuestionDetails = (TestId) => async (dispatch, getState) => {
    dispatch({ type: GETQUESTION_DETAILS_REQUEST });
    const {
      studentLogin: { studentInfo },
    } = getState();
    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Course/GetQuestionnairesDetails`, {
        Parameter: JSON.stringify({ LeadId: LeadId, TestId: TestId }),
        Type: "GET",
      });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
  
      dispatch({ type: GETQUESTION_DETAILS_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: GETQUESTION_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };