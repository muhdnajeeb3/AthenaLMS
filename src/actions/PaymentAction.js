import axios from "axios";
import {
  STUDENT_PAYMENT_REQUEST,
  STUDENT_PAYMENT_SUCCESS,
  STUDENT_PAYMENT_FAIL,
} from "../constants/PaymentConstant";

const BaseUrl = import.meta.env.VITE_BASE_URL;

export const GetStudentPayments = (CourseId) => async (dispatch, getState) => {
  const {
    studentLogin: { studentInfo },
    userSignin: { userInfo },
    // studentEnrollment: { studentenrollment },
  } = getState();

  // if (studentenrollment && studentenrollment.length > 0) {
  //   console.log("studentenrollment already there, skipping fetch.");
  //   return;
  // }

  dispatch({ type: STUDENT_PAYMENT_REQUEST });
  // console.log(studentInfo);

  let LeadId = (studentInfo && studentInfo[0].LeadId) || null;
  const token = userInfo && userInfo?.token;

  try {
    const { data } = await axios.post(
      `${BaseUrl}/Payment/GetStudentPayments`,
      {
        Parameter: JSON.stringify({ LeadId: LeadId, CourseId: CourseId }),
        Type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const parsedData = JSON.parse(data.map((data) => data.result));

    dispatch({ type: STUDENT_PAYMENT_SUCCESS, payload: parsedData });
  } catch (error) {
    dispatch({
      type: STUDENT_PAYMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
