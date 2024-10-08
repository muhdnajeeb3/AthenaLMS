import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDetails from "./screens/ProjectDetails";
import ModuleDetails from "./screens/ModuleDetails";
import UnitDetailView from "./screens/UnitDetailView";
import FreeTrialHome from "./screens/FreeTrialHome";
import MyProfile from "./screens/MyProfile";
import ChangePassword from "./screens/ChangePassword";
import CourseMoreDetails from "./screens/CourseMoreDetails";
import MyOnlineClass from "./screens/MyOnlineClass";
import ExploreCourses from "./screens/ExploreCourses";
import CourseDetails from "./screens/CourseDetails";
import InboxMails from "./screens/InboxMails";
import CreateInvoice from "./screens/CreateInvoice";
import StudClaimCertificate from "./screens/StudClaimCertificate";
import BookaCall from "./screens/BookaCall";
import EnrollCourse from "./screens/EnrollCourse";
import EnrolToCourse from "./screens/EnrolToCourse";
import SubmitAssignments from "./screens/SubmitAssignments";
import ProjectSubmissionDetails from "./screens/ProjectSubmissionDetails";
import Terms from "./screens/Terms";
import FasttrackQuiz from "./screens/FasttrackQuiz";
import FasttrackTestResult from "./screens/FasttrackTestResult";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
          <Route path="/FreeTrialHome" element={<FreeTrialHome />} />
            <Route path="/EnrolledHome" element={<HomeScreen />} />
            <Route path="/ProjectandAssignments" element={<ProjectDetails />} />
            <Route path="/ModuleDetails" element={<ModuleDetails />} />
            <Route path="/CourseDetails" element={<CourseDetails />} />
            <Route path="/UnitDetailView" element={<UnitDetailView />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/CourseMoreDetails" element={<CourseMoreDetails />} />
            <Route path="/MyOnlineClass" element={<MyOnlineClass />} />
            <Route path="/ExploreCourses" element={<ExploreCourses />} />
            <Route path="/InboxMails" element={<InboxMails />} />
            <Route path="/CreateInvoice" element={<CreateInvoice />} />
            <Route path="/StudClaimCertificate" element={<StudClaimCertificate />} />
            <Route path="/bookaCall" element={<BookaCall />} />
            <Route path="/EnrollCourse" element={<EnrollCourse />} />
            <Route path="/EnrolToCourse" element={<EnrolToCourse />} />
            <Route path="/SubmitAssignments" element={<SubmitAssignments />} />
            <Route path="/ViewProject" element={<ProjectSubmissionDetails />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/FasttrackQuiz" element={<FasttrackQuiz />} />
            <Route path="/FasttrackTestResult" element={<FasttrackTestResult />} />
          </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
