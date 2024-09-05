import axios from "axios";
import { DOWNLOAD_FILES_FAIL, DOWNLOAD_FILES_REQUEST, DOWNLOAD_FILES_SUCCESS, SUBMITPROJECT_FILE_FAIL, SUBMITPROJECT_FILE_REQUEST, SUBMITPROJECT_FILE_SUCCESS } from "../constants/aws";


export const SubmitProjectFile = (uploadFileEntity) => async (dispatch) => {

    dispatch({ type: SUBMITPROJECT_FILE_REQUEST });
  
    try {
      const { data } = await axios.post(`/api/S3_UPLOADFILES`,  uploadFileEntity);

      dispatch({ type: SUBMITPROJECT_FILE_SUCCESS, payload: data });

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