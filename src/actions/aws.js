import axios from "axios";
import { DOWNLOAD_FILES_FAIL, DOWNLOAD_FILES_REQUEST, DOWNLOAD_FILES_SUCCESS, UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "../constants/aws";


export const UploadFile = (uploadFileEntity) => async (dispatch) => {

    dispatch({ type: UPLOAD_FILE_REQUEST });
  
    try {
      const { data } = await axios.post(`/api/S3_UPLOADFILES`,  uploadFileEntity);

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