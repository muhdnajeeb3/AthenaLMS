import axios from "axios";
import {
  GETCOURSE_MODULE_FAIL,
  GETCOURSE_MODULE_REQUEST,
  GETCOURSE_MODULE_SUCCESS,
  GETPROJECT_DETAILS_FAIL,
  GETPROJECT_DETAILS_REQUEST,
  GETPROJECT_DETAILS_SUCCESS,
  GETSTUDENT_ENROLLMENT_FAIL,
  GETSTUDENT_ENROLLMENT_REQUEST,
  GETSTUDENT_ENROLLMENT_SUCCESS,
  GETUNIT_DETAILS_FAIL,
  GETUNIT_DETAILS_REQUEST,
  GETUNIT_DETAILS_SUCCESS,
} from "../constants/courseDetails";

const BaseUrl = "https://ulearnapi.schneidestaging.in/api";

export const GetStudentEnrollment = () => async (dispatch, getState) => {
  const {
    studentLogin: { studentInfo },
    studentEnrollment: { studentenrollment}
  } = getState();

  if (studentenrollment && studentenrollment.length > 0 ) {
    
    console.log("studentenrollment already there, skipping fetch.");
    return;
  }
  

  dispatch({ type: GETSTUDENT_ENROLLMENT_REQUEST });
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
  const {
    studentLogin: { studentInfo },
    courseModule: { courseModule }
  } = getState();

  if (courseModule && courseModule.length > 0 && courseModule?.[0].CourseId === Number(courseId)) {
    // The courseId matches the one already stored, so don't fetch again
    console.log("CourseId matches, skipping fetch.");
    return;
  }
  

  dispatch({ type: GETCOURSE_MODULE_REQUEST });

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

export const GetUnitDetails = (unitId, unitversionid) => async (dispatch, getState) => {
    const {
      studentLogin: { studentInfo },
      unitDetail: { unitDetail }
    } = getState();

    console.log(unitDetail);

    if (unitDetail && unitDetail.length > 0 && unitDetail?.[0].UnitId === Number(unitId)) {
      // The unitDetail matches the one already stored, so don't fetch again
      console.log("unitDetail matches, skipping fetch.");
      return;
    }

    console.log('runnnung');
    
    

    dispatch({ type: GETUNIT_DETAILS_REQUEST });

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
    const {
      studentLogin: { studentInfo },
      projectDetail: { projectDetail },
    } = getState();

    console.log(studentInfo);
    
    if (projectDetail && projectDetail.length > 0 && projectDetail[0].CourseId === courseId) {
      // The courseId matches the one already stored, so don't fetch again
      console.log("CourseId matches, skipping fetch.");
      return;
    }
    
    dispatch({ type: GETPROJECT_DETAILS_REQUEST });
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
