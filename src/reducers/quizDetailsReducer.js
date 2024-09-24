import {
  GETQUESTION_DETAILS_FAIL,
  GETQUESTION_DETAILS_REQUEST,
  GETQUESTION_DETAILS_SUCCESS,
  GETSTUDENT_SCORE_FAIL,
  GETSTUDENT_SCORE_REQUEST,
  GETSTUDENT_SCORE_SUCCESS,
  STUDENTTEST_SUBMIT_FAIL,
  STUDENTTEST_SUBMIT_REQUEST,
  STUDENTTEST_SUBMIT_SUCCESS,
} from "../constants/quizDetails";

export const GetQuestionDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GETQUESTION_DETAILS_REQUEST:
      return { loading: true };
    case GETQUESTION_DETAILS_SUCCESS:
      return { loading: false, questionDetail: action.payload };
    case GETQUESTION_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetStudentScoreReducer = (state = {}, action) => {
  switch (action.type) {
    case GETSTUDENT_SCORE_REQUEST:
      return { loading: true };
    case GETSTUDENT_SCORE_SUCCESS:
      return { loading: false, studentScore: action.payload };
    case GETSTUDENT_SCORE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SubmitStudentTestReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENTTEST_SUBMIT_REQUEST:
      return { loading: true };
    case STUDENTTEST_SUBMIT_SUCCESS:
      return { loading: false, studentSubmit: action.payload };
    case STUDENTTEST_SUBMIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};