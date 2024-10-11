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

export const GetProjectDetailsReducer = (state = { projectDetail: null }, action) => {
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

// startproject
export const GetProjectModuleDetailsReducer = (state = { }, action) => {
  switch (action.type) {
    case GETPROJECTMODULE_DETAILS_REQUEST:
      return { loading: true };
    case GETPROJECTMODULE_DETAILS_SUCCESS:
      return { loading: false, projectModuleDetail: action.payload };
    case GETPROJECTMODULE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SubmitFileReducer = (state = { }, action) => {
  switch (action.type) {
    case SUBMITPROJECT_FILE_REQUEST:
      return { loading: true };
    case SUBMITPROJECT_FILE_SUCCESS:
      return { loading: false, submitFile: action.payload };
    case SUBMITPROJECT_FILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// createunitcompletion

export const CreateUnitCompletionReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATEUNIT_COMPLETION_REQUEST:
      return { loading: true };
    case CREATEUNIT_COMPLETION_SUCCESS:
      return { loading: false, createUnitCompletion: action.payload };
    case CREATEUNIT_COMPLETION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// get unit statusa

export const GetUnitStatusReducer = (state = { }, action) => {
  switch (action.type) {
    case UNIT_STATUS_REQUEST:
      return { loading: true };
    case UNIT_STATUS_SUCCESS:
      return { loading: false, unitStatus: action.payload };
    case UNIT_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// createnotes

export const CreateNotesReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_NOTES_REQUEST:
      return { loading: true };
    case CREATE_NOTES_SUCCESS:
      return { loading: false, createNotes: action.payload };
    case CREATE_NOTES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// viewnote

export const ViewNotesReducer = (state = { }, action) => {
  switch (action.type) {
    case VIEW_NOTES_REQUEST:
      return { loading: true };
    case VIEW_NOTES_SUCCESS:
      return { loading: false, viewNotes: action.payload };
    case VIEW_NOTES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};