import { PROJECT_EXTENSION_FAIL, PROJECT_EXTENSION_REQUEST, PROJECT_EXTENSION_SUCCESS } from "../constants/projectDetails";


export const ProjectExtensionReducer = (state = { }, action) => {
    switch (action.type) {
      case PROJECT_EXTENSION_SUCCESS:
        return { loading: true };
      case PROJECT_EXTENSION_REQUEST:
        return { loading: false, projectExtension: action.payload };
      case PROJECT_EXTENSION_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };