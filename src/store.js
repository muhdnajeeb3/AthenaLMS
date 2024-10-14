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
import { CreateUnitCompletionReducer, GetCourseModuleReducer, GetProjectDetailsReducer, GetProjectModuleDetailsReducer, GetStudentEnrollmentReducer, GetUnitDetailsReducer, SubmitFileReducer,GetUnitStatusReducer,CreateNotesReducer ,ViewNotesReducer} from "./reducers/courseDetailsReducer";
import { GetQuestionDetailsReducer, GetStudentScoreReducer, SubmitStudentTestReducer } from "./reducers/quizDetailsReducer";
import { DownloadFileReducer, UploadFileReducer } from "./reducers/awsReducer";
import { StudentPaymentReducer } from "./reducers/PaymentReducer";
import { ProjectExtensionReducer } from "./reducers/projectDetails";

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
  projectModuleDetail: GetProjectModuleDetailsReducer,
  questionDetail: GetQuestionDetailsReducer,
  studentScore:GetStudentScoreReducer,
  uploadFileResponse:UploadFileReducer,
  downloadFileResponse:DownloadFileReducer,
  submitFile:SubmitFileReducer,
  studentSubmit:SubmitStudentTestReducer,
  studentPayment:StudentPaymentReducer,
  createUnitCompletion:CreateUnitCompletionReducer,
  unitStatus:GetUnitStatusReducer,
  createNotes:CreateNotesReducer,
  viewNotes:ViewNotesReducer,
  projectExtension:ProjectExtensionReducer

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
