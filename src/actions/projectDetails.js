import axios from "axios";
import { PROJECT_EXTENSION_FAIL, PROJECT_EXTENSION_REQUEST, PROJECT_EXTENSION_SUCCESS } from "../constants/projectDetails";

const BaseUrl = import.meta.env.VITE_BASE_URL; 


 export const ProjectExtension = (ProjTitle,DueDate,ReasonType,FileName,FilePath,Description,ExtensionDays,CourseId,ModuleId) => async (dispatch, getState) => {
    const {
      studentLogin: { studentInfo },
      userSignin: { userInfo }
    } = getState();
    
    dispatch({ type: PROJECT_EXTENSION_REQUEST });

    let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
    const token = userInfo && userInfo?.token;

  
    try {
      const { data } = await axios.post(`${BaseUrl}/Project/CreateProjExtnRequest`, {
        Parameter: JSON.stringify({ LeadId,ProjTitle,DueDate,ReasonType,FileName,FilePath,Description,ExtensionDays, CourseId, ModuleId,CreatedBy:LeadId}),
        Type: "INSERT",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
    });
      
      const parsedData = JSON.parse(data.map((data) => data.result));
      
      dispatch({ type: PROJECT_EXTENSION_SUCCESS, payload: parsedData });
    } catch (error) {
      dispatch({
        type: PROJECT_EXTENSION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };