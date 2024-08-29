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

export const GetStudentEnrollmentReducer = (state = {}, action) => {
  switch (action.type) {
    case GETSTUDENT_ENROLLMENT_REQUEST:
      return { loading: true };
    case GETSTUDENT_ENROLLMENT_SUCCESS:
      return { loading: false, studentenrollment: action.payload };
    case GETSTUDENT_ENROLLMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetCourseModuleReducer = (state = {}, action) => {
  switch (action.type) {
    case GETCOURSE_MODULE_REQUEST:
      return { loading: true };
    case GETCOURSE_MODULE_SUCCESS:
      return { loading: false, courseModule: action.payload };
    case GETCOURSE_MODULE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetUnitDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GETUNIT_DETAILS_REQUEST:
      return { loading: true };
    case GETUNIT_DETAILS_SUCCESS:
      return { loading: false, unitDetail: action.payload };
    case GETUNIT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetProjectDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GETPROJECT_DETAILS_REQUEST:
      return { loading: true };
    case GETPROJECT_DETAILS_SUCCESS:
      return { loading: false, projectDetail: action.payload };
    case GETPROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};