import { DOWNLOAD_FILES_FAIL, DOWNLOAD_FILES_REQUEST, DOWNLOAD_FILES_SUCCESS, SUBMITPROJECT_FILE_FAIL, SUBMITPROJECT_FILE_REQUEST, SUBMITPROJECT_FILE_SUCCESS } from "../constants/aws";

export const SubmitFileReducer = (state = { }, action) => {
    switch (action.type) {
      case SUBMITPROJECT_FILE_REQUEST:
        return { loading: true };
      case SUBMITPROJECT_FILE_SUCCESS:
        return { loading: false, submitFileResponse: action.payload };
      case SUBMITPROJECT_FILE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const DownloadFileReducer = (state = { }, action) => {
    switch (action.type) {
      case DOWNLOAD_FILES_REQUEST:
        return { loading: true };
      case DOWNLOAD_FILES_SUCCESS:
        return { loading: false, downloadFileResponse: action.payload };
      case DOWNLOAD_FILES_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };