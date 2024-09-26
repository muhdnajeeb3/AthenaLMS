import {
STUDENT_PAYMENT_SUCCESS,
STUDENT_PAYMENT_FAIL,
STUDENT_PAYMENT_REQUEST,
  } from "../constants/PaymentConstant";
  
  export const StudentPaymentReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_PAYMENT_REQUEST:
        return { loading: true };
      case STUDENT_PAYMENT_SUCCESS:
        return { loading: false, PaymentInfo: action.payload };
      case STUDENT_PAYMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  