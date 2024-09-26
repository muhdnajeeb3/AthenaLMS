import axios from "axios";
import { DOWNLOAD_FILES_FAIL, DOWNLOAD_FILES_REQUEST, DOWNLOAD_FILES_SUCCESS, UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "../constants/aws";

const BaseUrl = import.meta.env.VITE_BASE_URL; 


export const UploadFile = (formData) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();

  dispatch({ type: UPLOAD_FILE_REQUEST });

  try {
    const token = userInfo && userInfo.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,  // Pass the token here
        'Content-Type': 'multipart/form-data',  // Ensure correct content type
      },
    };
    
    // Send FormData with axios
    const { data } = await axios.post(
      `${BaseUrl}/UploadFile/FileUpload`,
      formData,  // Pass the FormData object here
      config
    );

    dispatch({ type: UPLOAD_FILE_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: UPLOAD_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


  export const DownloadProjectFile = (file) => async (dispatch) => {

    dispatch({ type: DOWNLOAD_FILES_REQUEST });
  
    try {
      const { data } = await axios.post(`/api/S3_DOWNLOAD_FILES`,  {
      BucketName:"westford-uc-bucket",
      FilePath: file
    
    } );

      dispatch({ type: DOWNLOAD_FILES_SUCCESS, payload: data });

    } catch (error) {
      dispatch({
        type: DOWNLOAD_FILES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };