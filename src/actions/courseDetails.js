import axios from "axios";
import {
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
} from "../constants/courseDetails";

const BaseUrl = "https://ulearnapi.schneidestaging.in/api";

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

    // console.log(viewProjectmatchedData,'view');
    // "Parameter": "{\"LeadId\":123,\"CourseId\":456,\"ProjectId\":789,\"StartDate\":\"2024-09-01\",\"DueDate\":\"2024-12-31\",\"ModuleId\":101,
    // \"CurrStatus\":\"Started\",\"CurSlNo\":1,\"CreatedBy\":\"1\",\"CreatedOn\":\"2024-09-05T10:00:00\",\"UpdatedBy\":\"1\",\
    // "UpdatedOn\":\"2024-09-05T10:00:00\",\"PersonalTutorId\":1001}",

    const {CourseId,DueDate,ModuleId,TutorDetails,ProjectId,ProjectStartDate} = viewProjectmatchedData[0];

    const TutorDetailsData = JSON.parse(TutorDetails);

    const { PersonalTutorId } = TutorDetailsData;
    
    
    
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/GetProjectModuleDetails`, {
        Parameter: JSON.stringify({ LeadId: LeadId, CourseId: CourseId,ProjectId: ProjectId,CreatedBy:LeadId,CurrStatus:null,ModuleId:ModuleId ,StartDate:ProjectStartDate,DueDate:DueDate,PersonalTutorId:PersonalTutorId}),
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

  export const SubmitProjectFile = (projectId,submitData,FileName) => async (dispatch, getState) => {
    console.log(projectId,'prroro');
    console.log('ssss',submitData);
    console.log('ssss',FileName);
    
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
    

    // console.log(viewProjectmatchedData,'view');
  //  "parameter": "{  \"FileID\": null, \"AssignID\": 123, \"BelongsTo\": \"student\", \"LeadId\": 456, \"FileName\": \"project_report.pdf\", \"FilePath\": \"/files/student_456/project_report.pdf\", \"IsActive\": 1, \"CreatedBy\": \"1\", \"CreatedOn\": \"2024-08-20T14:30:00\", \"Grade\": null, \"ReasonForChange\": null, \"TranRemarks\": \"Initial submission\" }",

    const {CourseId,ProjectId,AssignID} = viewProjectmatchedData[0];

    
    
    
  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/SubmitProjectFile`, {
        Parameter: JSON.stringify({ LeadId: LeadId,AssignID,BelongsTo:"student",FileName:FileName,FilePath:submitData?.fileData,CreatedBy:LeadId, CourseId: CourseId,ProjectId: ProjectId,TranRemarks:submitData?.remark}),
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