import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import {
  studentLoginReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import { encrIptDecryptReducer } from "./reducers/ecriptDecriptReducers";
import { GetCourseModuleReducer, GetProjectDetailsReducer, GetQuestionDetailsReducer, GetStudentEnrollmentReducer, GetUnitDetailsReducer } from "./reducers/courseDetailsReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  studentLogin: {
    studentInfo: localStorage.getItem("studentLogin")
      ? JSON.parse(localStorage.getItem("studentLogin"))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  encriptDecrypt: encrIptDecryptReducer,
  studentLogin: studentLoginReducer,
  studentEnrollment : GetStudentEnrollmentReducer,
  courseModule: GetCourseModuleReducer,
  unitDetail: GetUnitDetailsReducer,
  projectDetail: GetProjectDetailsReducer,
  questionDetail: GetQuestionDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
