import axios from "axios";
import {
  CREATE_NOTES_FAIL,
  CREATE_NOTES_REQUEST,
  CREATE_NOTES_SUCCESS,
  CREATEUNIT_COMPLETION_FAIL,
  CREATEUNIT_COMPLETION_REQUEST,
  CREATEUNIT_COMPLETION_SUCCESS,
  GETCOURSE_MODULE_FAIL,
  GETCOURSE_MODULE_REQUEST,
  GETCOURSE_MODULE_SUCCESS,
  GETPROJECT_DETAILS_FAIL,
  GETPROJECT_DETAILS_REQUEST,
  GETPROJECT_DETAILS_SUCCESS,
  GETPROJECTMODULE_DETAILS_FAIL,
  GETPROJECTMODULE_DETAILS_REQUEST,
  GETPROJECTMODULE_DETAILS_SUCCESS,
  GETSTUDENT_ENROLLMENT_FAIL,
  GETSTUDENT_ENROLLMENT_REQUEST,
  GETSTUDENT_ENROLLMENT_SUCCESS,
  GETUNIT_DETAILS_FAIL,
  GETUNIT_DETAILS_REQUEST,
  GETUNIT_DETAILS_SUCCESS,
  SUBMITPROJECT_FILE_FAIL,
  SUBMITPROJECT_FILE_REQUEST,
  SUBMITPROJECT_FILE_SUCCESS,
  UNIT_STATUS_FAIL,
  UNIT_STATUS_REQUEST,
  UNIT_STATUS_SUCCESS,
  VIEW_NOTES_FAIL,
  VIEW_NOTES_REQUEST,
  VIEW_NOTES_SUCCESS,
} from "../constants/courseDetails";

const BaseUrl = import.meta.env.VITE_BASE_URL; 

export const GetStudentEnrollment = () => async (dispatch, getState) => {
  const {
    studentLogin: { studentInfo },
    userSignin: { userInfo },
    studentEnrollment: { studentenrollment}
  } = getState();

  if (studentenrollment && studentenrollment.length > 0 ) {
    
    console.log("studentenrollment already there, skipping fetch.");
    return;
  }
  

  dispatch({ type: GETSTUDENT_ENROLLMENT_REQUEST });
  // console.log(studentInfo);

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  const token = userInfo && userInfo?.token;

  try {
    const { data } = await axios.post(`${BaseUrl}/User/GetStudentEnrollment`, {
      Parameter: JSON.stringify({ LeadId: LeadId }),
      Type: "GET",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      }
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
    userSignin: { userInfo },
    courseModule: { courseModule }
  } = getState();

  if (courseModule && courseModule.length > 0 && courseModule?.[0].CourseId === Number(courseId)) {
    // The courseId matches the one already stored, so don't fetch again
    console.log("CourseId matches, skipping fetch.");
    return;
  }

  dispatch({ type: GETCOURSE_MODULE_REQUEST });

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  const token = userInfo && userInfo?.token;

  try {
    const { data } = await axios.post(`${BaseUrl}/Course/GetCourseModule`, {
      Parameter: JSON.stringify({ LeadId: LeadId, CourseId: courseId }),
      Type: "GET",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      }
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
      userSignin: { userInfo },
      unitDetail: { unitDetail }
    } = getState();

    console.log(unitDetail);

    if (unitDetail && unitDetail.length > 0 && unitDetail?.[0].UnitId === Number(unitId)) {
      // The unitDetail matches the one already stored, so don't fetch again
      console.log("unitDetail matches, skipping fetch.");
      return;
    }

    dispatch({ type: GETUNIT_DETAILS_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

    try {
      const { data } = await axios.post(`${BaseUrl}/Course/GetUnitDetails`, {
        Parameter: JSON.stringify({
          LeadId: LeadId,
          UnitId: unitId,
          VersionId: unitversionid,
        }),
        Type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
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
  export const GetProjectDetails = (courseId,refresh = false) => async (dispatch, getState) => {
    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo },
      projectDetail: { projectDetail },
    } = getState();
    
    if (projectDetail && projectDetail.length > 0 && projectDetail[0].CourseId === Number(courseId) && !refresh) {
      console.log("CourseId matches, skipping fetch.");
      return;
    }
    
    dispatch({ type: GETPROJECT_DETAILS_REQUEST });
    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/GetProjectDetails`, {
        Parameter: JSON.stringify({ LeadId: LeadId, CourseId: courseId }),
        Type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
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

  // startproject

  export const GetProjectModuleDetails = (projectId) => async (dispatch, getState) => {
    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo },
      projectDetail: { projectDetail },
    } = getState();
    
    dispatch({ type: GETPROJECTMODULE_DETAILS_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

    const viewProjectmatchedData = projectDetail?.filter(
      (data) => data.ProjectId == projectId
    );

    const {CourseId,DueDate,ModuleId,TutorDetails,ProjectId,ProjectStartDate} = viewProjectmatchedData[0];

    const TutorDetailsData = JSON.parse(TutorDetails);

    const { PersonalTutorId } = TutorDetailsData;

    try {
      const { data } = await axios.post(`${BaseUrl}/Project/GetProjectModuleDetails`,
        {
          Parameter: JSON.stringify({
            LeadId, CourseId, ProjectId, CreatedBy: LeadId, CurrStatus: null, 
            ModuleId, StartDate: ProjectStartDate, DueDate, PersonalTutorId
          }),
          Type: "INSERT",
        },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
  
      dispatch({ type: GETPROJECTMODULE_DETAILS_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: GETPROJECTMODULE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // submit project

  export const SubmitProjectFile = (projectId,submitData,FileName) => async (dispatch, getState) => {

    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo },
      projectDetail: { projectDetail },
    } = getState();
    
    dispatch({ type: SUBMITPROJECT_FILE_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

    const viewProjectmatchedData = projectDetail?.filter(
      (data) => data.ProjectId == projectId
    );

    console.log(viewProjectmatchedData);
 
    const {CourseId,AssignID,Grade} = viewProjectmatchedData[0];
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/SubmitProjectFile`, {
        Parameter: JSON.stringify({ LeadId: LeadId,AssignID,BelongsTo:"student",Grade:Grade,RefID:projectId,FileName:FileName,FilePath:submitData?.fileData,CreatedBy:LeadId, CourseId: CourseId,TranRemarks:submitData?.remark}),
        Type: "INSERT",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      console.log('response',parsedData);
      
  
      dispatch({ type: SUBMITPROJECT_FILE_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: SUBMITPROJECT_FILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // CREATE UNIT COMPLETION
  export const CreateUnitCompletion = (UnitId,CourseId,ModuleId,LessonId,CurId) => async (dispatch, getState) => {

    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo }
    } = getState();
    
    dispatch({ type: CREATEUNIT_COMPLETION_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

  
    try {
      const { data } = await axios.post(`${BaseUrl}/Course/CreateUnitCompletion`, {
        Parameter: JSON.stringify({ LeadId, UnitId, CourseId, ModuleId, LessonId, CurId,CreatedBy:LeadId}),
        Type: "INSERT",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      
      dispatch({ type: CREATEUNIT_COMPLETION_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: CREATEUNIT_COMPLETION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // CREATE UNIT COMPLETION
  export const GetUnitStatus = (UnitId) => async (dispatch, getState) => {

    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo }
    } = getState();
    
    dispatch({ type: UNIT_STATUS_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

  
    try {
      const { data } = await axios.post(`${BaseUrl}/Course/CreateUnitCompletion`, {
        Parameter: JSON.stringify({ LeadId, UnitId}),
        Type: "GETBYID",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      
      dispatch({ type: UNIT_STATUS_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: UNIT_STATUS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

   // CREATE notes
   export const CreateNotes = (UnitId,CurId,Notes) => async (dispatch, getState) => {

    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo }
    } = getState();
    
    dispatch({ type: CREATE_NOTES_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

  
    try {
      const { data } = await axios.post(`${BaseUrl}/Course/CreateNotes`, {
        Parameter: JSON.stringify({ LeadId, UnitId, CurId,CreatedBy:LeadId,Notes:Notes}),
        Type: "INSERT",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      
      dispatch({ type: CREATE_NOTES_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: CREATE_NOTES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // VIEW NOTES

  export const ViewNotes = (UnitId) => async (dispatch, getState) => {

    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo }
    } = getState();
    
    dispatch({ type: VIEW_NOTES_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

  
    try {
      const { data } = await axios.post(`${BaseUrl}/Course/CreateNotes`, {
        Parameter: JSON.stringify({ LeadId, UnitId,}),
        Type: "GETBYID",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      
      dispatch({ type: VIEW_NOTES_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: VIEW_NOTES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

 