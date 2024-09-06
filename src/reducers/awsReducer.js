import { DOWNLOAD_FILES_FAIL, DOWNLOAD_FILES_REQUEST, DOWNLOAD_FILES_SUCCESS, UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "../constants/aws";

export const UploadFileReducer = (state = { }, action) => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return { loading: true };
      case UPLOAD_FILE_SUCCESS:
        return { loading: false, uploadFileResponse: action.payload };
      case UPLOAD_FILE_FAIL:
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