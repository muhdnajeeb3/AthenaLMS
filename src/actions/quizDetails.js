import axios from "axios";
import {
  GETQUESTION_DETAILS_FAIL,
  GETQUESTION_DETAILS_REQUEST,
  GETQUESTION_DETAILS_SUCCESS,
  GETSTUDENT_SCORE_FAIL,
  GETSTUDENT_SCORE_REQUEST,
  GETSTUDENT_SCORE_SUCCESS,
} from "../constants/quizDetails";

const BaseUrl = "https://ulearnapi.schneidestaging.in/api";

// getquestion
export const GetQuestionDetails = (TestId) => async (dispatch, getState) => {
  const {
    studentLogin: { studentInfo },
    userSignin: { userInfo },
    questionDetail: { questionDetail },
  } = getState();

  if (
    questionDetail &&
    questionDetail.length > 0 &&
    questionDetail?.[0].TestId === Number(TestId)
  ) {
    // The courseId matches the one already stored, so don't fetch again
    console.log("CourseId matches, skipping fetch.");
    return;
  }

  dispatch({ type: GETQUESTION_DETAILS_REQUEST });

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  const token = userInfo && userInfo?.token;


  try {
    const { data } = await axios.post(
      `${BaseUrl}/Course/GetQuestionnairesDetails`,
      {
        Parameter: JSON.stringify({ LeadId: LeadId, TestId: TestId }),
        Type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
      }
    );

    const parsedData = JSON.parse(data.map((data) => data.result));

    dispatch({ type: GETQUESTION_DETAILS_SUCCESS, payload: parsedData });
  } catch (error) {
    dispatch({
      type: GETQUESTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// getstudent score
export const GetStudentScore = (TestId) => async (dispatch, getState) => {
  const {
    studentLogin: { studentInfo },
    userSignin: { userInfo },
    studentScore: { studentScore },
  } = getState();  

  if (
    studentScore &&
    studentScore.length > 0 &&
    studentScore?.[0].TestId === Number(TestId)
  ) {
    // The courseId matches the one already stored, so don't fetch again
    console.log("CourseId matches, skipping fetch.");
    return;
  }

  dispatch({ type: GETSTUDENT_SCORE_REQUEST });

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  const token = userInfo && userInfo?.token;


  try {
    const { data } = await axios.post(
      `${BaseUrl}/Course/GetStudentScore`,
      {
        Parameter: JSON.stringify({ LeadId: LeadId, TestId: TestId }),
        Type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        }
      }
    );

    const parsedData = JSON.parse(data.map((data) => data.result));

    dispatch({ type: GETSTUDENT_SCORE_SUCCESS, payload: parsedData });
  } catch (error) {
    dispatch({
      type: GETSTUDENT_SCORE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};