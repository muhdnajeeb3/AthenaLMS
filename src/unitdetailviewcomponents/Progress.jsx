import { useEffect, useMemo, useState } from "react";
import { Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import EssentialReadings from "./EssentialReadings";
import Table from "react-bootstrap/Table";
import AdditionalResources from "./AdditionalResources";
import pdf from "./mn.pdf";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateNotes,
  CreateUnitCompletion,
  GetCourseModule,
  GetUnitDetails,
  GetUnitStatus,
  ViewNotes,
} from "../actions/courseDetails";

const Progress = () => {
  const [progressShow, setProgressShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [levels, setLevels] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [unitversionid, setUnitversionid] = useState(6);
  const [activeLesson, setActiveLesson] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevUnitName, setPrevUnitName] = useState(null);
  const [nextUnitName, setNextUnitName] = useState(null);
  const [notes, setNotes] = useState("");

  const lessonHandler = (lessonId) => {
    console.log(lessonId);

    // Find the lesson that matches the given lessonId
    const selectedLesson = matchedModule?.Lessons.find(
      (lesson) => lesson.LessonId === parseInt(lessonId)
    );

    if (selectedLesson) {
      // Update the LessonId and CurId in the searchParams
      searchParams.set("LessonId", lessonId);
      searchParams.set("CurId", selectedLesson.CurId); // Update CurId
      setSearchParams(searchParams);

      // Toggle the active lesson state
      setActiveLesson(lessonId === activeLesson ? null : lessonId);
    } else {
      console.error("Lesson not found");
    }
  };

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  const chapterHandler = (id) => {
    setChapter(id);
  };
  const levelHandler = (id) => {
    setLevels(id);
  };
  const ProgressShowHideHandler = () => {
    setProgressShow(!progressShow);
  };
  const sidebarShowHideHandler = () => {
    setSidebarShow(!sidebarShow);
  };
  const now = 60;
  const navigate = useNavigate();
  const viewAssignmentHandler = () => {
    navigate("/SubmitAssignments");
  };
  const takelessonHandler = (TestId) => {
    navigate(`/FasttrackQuiz?TestId=${TestId}`);
  };
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const dispatch = useDispatch();
  const query = useQuery();
  const courseId = query.get("CourseId");
  const moduleId = query.get("ModuleId");
  const lessonId = query.get("LessonId");
  const uid = query.get("UID");
  const curId = query.get("CurId");

  const coursemodule = useSelector((state) => state.courseModule);
  const { loading, error, courseModule } = coursemodule;

  const unitdetail = useSelector((state) => state.unitDetail);
  const { loading: unitLoading, error: unitError, unitDetail } = unitdetail;

  const UnitStatus = useSelector((state) => state.unitStatus);
  const { unitStatus } = UnitStatus;

  const CreateNote = useSelector((state) => state.createNotes);
  const { loading: createNotesoading } = CreateNote;

  const ViewNote = useSelector((state) => state.viewNotes);
  const { viewNotes } = ViewNote;

  const VIEWNOTESTEXT = viewNotes?.[0]?.Notes;

  const UNITSTATUS = unitStatus?.[0]?.Status;

  useEffect(() => {
    dispatch(GetCourseModule(courseId));
  }, [courseId, dispatch, courseModule]);

  useEffect(() => {
    dispatch(GetUnitStatus(uid));
  }, [uid, dispatch]);

  useEffect(() => {
    if (uid) {
      dispatch(GetUnitDetails(uid, unitversionid));
    }
  }, [uid, dispatch, unitversionid]);

  useEffect(() => {
    if (unitDetail) {
      try {
        setSelectedUnit(unitDetail[0]);
        setActiveLesson(lessonId);
      } catch (e) {
        console.error("Error parsing unitDetail:", e);
      }
    }
  }, [unitDetail, lessonId]);

  useEffect(() => {
    if (courseModule && courseModule.length > 0) {
      // Find the index of the current unit
      const currentIndex = courseModule.findIndex(
        (unit) => unit.UnitId === uid
      );

      if (currentIndex !== -1) {
        // Set previous unit name
        if (currentIndex > 0) {
          setPrevUnitName(courseModule[currentIndex - 1].UnitName);
        } else {
          setPrevUnitName(null); // No previous unit
        }

        // Set next unit name
        if (currentIndex < courseModule.length - 1) {
          setNextUnitName(courseModule[currentIndex + 1].UnitName);
        } else {
          setNextUnitName(null); // No next unit
        }
      }
    }
  }, [courseModule, uid]);

  const CourseModuleContent = useMemo(() => {
    return courseModule || [];
  }, [courseModule]);

  const matchedModule = useMemo(() => {
    return CourseModuleContent.flatMap((course) =>
      course.Modules.filter((module) => module.ModuleId === parseInt(moduleId))
    ).find((m) => m.ModuleId === parseInt(moduleId));
  }, [CourseModuleContent, moduleId]);

  const mergedUnits = useMemo(() => {
    return matchedModule
      ? matchedModule.Lessons.flatMap((lesson) => lesson.Units)
      : [];
  }, [matchedModule]);

  useEffect(() => {
    if (mergedUnits.length > 0) {
      const currentIndex = mergedUnits.findIndex(
        (unit) => unit?.UnitId === parseInt(uid)
      );

      if (currentIndex !== -1) {
        setPrevUnitName(
          currentIndex > 0 ? mergedUnits[currentIndex - 1].UnitName : null
        );
        setNextUnitName(
          currentIndex < mergedUnits.length - 1
            ? mergedUnits[currentIndex + 1].UnitName
            : null
        );
      }
    }
  }, [mergedUnits, uid]);

  const unitClickHandler = (uid, UnitVersionId) => {
    searchParams.set("UID", uid);
    setUnitversionid(UnitVersionId);
    setSearchParams(searchParams);
  };

  const handleNextUnit = () => {
    const currentIndex = mergedUnits.findIndex(
      (unit) => unit?.UnitId === parseInt(uid)
    );

    if (currentIndex !== -1 && currentIndex < mergedUnits.length - 1) {
      const nextUnit = mergedUnits[currentIndex + 1];

      // Find the lesson that contains the next unit
      const nextLesson = matchedModule?.Lessons.find((lesson) =>
        lesson.Units.some((unit) => unit.UnitId === nextUnit.UnitId)
      );

      if (nextUnit && nextLesson) {
        // Update both UID, LessonId, CurId, and set LessonActive
        searchParams.set("UID", nextUnit.UnitId);
        searchParams.set("LessonId", nextLesson.LessonId);
        searchParams.set("CurId", nextLesson.CurId); // Assuming `CurId` is available on lesson

        setSearchParams(searchParams);
      }
    }
  };

  const handlePrevUnit = () => {
    const currentIndex = mergedUnits.findIndex(
      (unit) => unit?.UnitId === parseInt(uid)
    );

    if (currentIndex > 0) {
      const prevUnit = mergedUnits[currentIndex - 1];

      // Find the lesson that contains the previous unit
      const prevLesson = matchedModule?.Lessons.find((lesson) =>
        lesson.Units.some((unit) => unit.UnitId === prevUnit.UnitId)
      );
      console.log(prevLesson, "perere");

      if (prevUnit && prevLesson) {
        // Update both UID, LessonId, CurId, and set LessonActive
        searchParams.set("UID", prevUnit.UnitId);
        searchParams.set("LessonId", prevLesson.LessonId);
        searchParams.set("CurId", prevLesson.CurId); // Assuming `CurId` is available on lesson

        setSearchParams(searchParams);
      }
    }
  };

  const movetomodulepage = () => {
    navigate(`/courseDetails?CourseId=${courseId}`);
  };

  const markasCompletedHandler = async () => {
    await dispatch(
      CreateUnitCompletion(uid, courseId, moduleId, lessonId, curId)
    );
    await dispatch(GetUnitStatus(uid));
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNotes = async () => {
    if (notes.trim()) {
      await dispatch(CreateNotes(uid, curId, notes)); // Dispatch action to save notes
      await handleClose();
      await dispatch(ViewNotes(uid)); // Dispatch action to save notes
    } else {
      console.error("Notes cannot be empty");
    }
  };

  useEffect(() => {
    dispatch(ViewNotes(uid));
  }, [uid, dispatch]);

  return (
    <>
      <Container
        fluid
        className="bg-white progrescontainer"
        style={{ padding: !progressShow && "1.5rem 0" }}
      >
        <Button
          className="arrow-showhide-btn shadow"
          variant=""
          onClick={ProgressShowHideHandler}
        >
          <span
            style={{
              transform: progressShow ? "rotate(270deg)" : "rotate(90deg)",
            }}
          >
            {">>"}
          </span>
        </Button>
        {!progressShow && (
          <>
            <div className="progresswrap px-3">
              <div className="col-md-4 vcpcirclewrap">
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>8</span>
                  </div>
                  <p>Viewed</p>
                </div>
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>8</span>
                  </div>
                  <p>Completed</p>
                </div>
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>44</span>
                  </div>
                  <p>Pending</p>
                </div>
              </div>
              <div
                className="col-md-8"
                style={{ maxWidth: "760px", paddingRight: "10px" }}
              >
                <div>
                  <ProgressBar now={now} label={`${now}% Completed`} />
                </div>
                <div className="overallstatus">
                  <span>Overall Status </span>
                  <span>{`${now}% Completed`}</span>
                </div>
              </div>
            </div>
            <div className="resumebtnwrap py-2">
              <Button className="resume-first-lesson-btn" variant="">
                Resume First Lesson
              </Button>
            </div>
          </>
        )}
      </Container>
      <Container fluid className="bg-light py-5">
        <div className="coursehomewrap">
          {!sidebarShow && (
            <div className="col-md-3" id="sidebar">
              <div className="shadow bg-white mb-4 w-100 p-3 pt-4">
                <h2 className="coursehometitle">
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/coursehome.svg"
                    alt=""
                  />
                  <Link to="">Course Home</Link>
                </h2>
                {matchedModule?.Lessons.map((lesson) => (
                  <div key={lesson.LessonId} className="mt-3">
                    <div
                      className="coursechapters"
                      onClick={() => lessonHandler(lesson.LessonId)}
                    >
                      <img
                        src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                        alt=""
                        width={13}
                        height={13}
                      />
                      <p>{lesson.LessonName}</p>
                    </div>

                    {Number(activeLesson) === lesson.LessonId && (
                      <>
                        <ul className="coursechaptersections">
                          {lesson.Units.map((unit) => (
                            <li
                              key={unit.UnitId}
                              onClick={() =>
                                unitClickHandler(
                                  unit.UnitId,
                                  unit.UnitVersionId
                                )
                              }
                            >
                              <span
                                className={
                                  unit?.UnitActive
                                    ? "clscompleted"
                                    : "clspending"
                                }
                              ></span>
                              <p>{unit.UnitName}</p>
                            </li>
                          ))}
                          {lesson?.Quz?.map((data, quzindex) => (
                            <li
                              key={quzindex}
                              className="d-flex mt-2 gap-3 "
                              style={{
                                justifyContent: "flex-start",
                                flexDirection: "column",
                                borderBottom: "none",
                              }}
                            >
                              <Button
                                className="quizz-assign-btn"
                                variant=""
                                onClick={() => takelessonHandler(data.TestId)}
                              >
                                Take Lesson Quiz
                              </Button>
                              <Button
                                className="quizz-assign-btn"
                                variant=""
                                onClick={viewAssignmentHandler}
                              >
                                View Assignment
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex">
                  <Button
                    className="dreadmore-btn"
                    style={{
                      borderRadius: "3px",
                      width: "165px",
                      height: "44px",
                    }}
                    onClick={movetomodulepage}
                  >
                    GO TO MODULE
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div
            className="col-md-9 chapterview"
            style={{ width: sidebarShow && "100%" }}
          >
            <Button
              className="arrow-showhide-coursehome-btn shadow"
              variant=""
              onClick={sidebarShowHideHandler}
            >
              <span
                style={{
                  transform: sidebarShow ? "rotate(360deg)" : "rotate(180deg)",
                }}
              >
                {">>"}
              </span>
            </Button>
            <div className="shadow bg-white p-4 pt-3 mb-4 w-100">
              <div className="mb-5">
                <h3>
                  <b>{selectedUnit?.UnitName}</b>
                </h3>
                <p>
                  Estimated time to complete:
                  <b>45 mins</b>
                </p>
              </div>
              <div className="col-md-12">
                <div className="flex">
                  <div className="col text-center">
                    <span onClick={() => levelHandler(1)}>Level 1</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(2)}>Level 2</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(3)}>Level 3</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(4)}>Level 4</span>
                  </div>
                </div>
              </div>
              <div className="arrow-steps mt-4 clearfix">
                <div className={`step ${levels === 1 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(1)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 2 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(2)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 3 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(3)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 4 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(4)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex pt-5 pb-1 level-section-btn-wrap">
                <Button
                  onClick={() => levelHandler(1)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 1 ? "current" : ""
                  }`}
                >
                  Video Lecture
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(2)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 2 ? "current" : ""
                  }`}
                >
                  Essential Readings
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(3)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 3 ? "current" : ""
                  }`}
                >
                  Reference Materials
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(4)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 4 ? "current" : ""
                  }`}
                >
                  Additional Resources
                  <div className="arrow-down" />
                </Button>
              </div>
              {/* video section */}
              <div
                className={`fadeanimation ${
                  levels === 1 ? "contentactive" : "contentnotactive"
                }`}
              >
                <Vimeo
                  // video="328808137"
                  video="285854272"
                  allowfullscreen="allowfullscreen"
                  height="514"
                  className="vp"
                  showTitle={false}
                  responsive={true}
                />
                {/* <div
                    dangerouslySetInnerHTML={{
                    __html: unitDetail?.[0]?.VideoURL,
                  }}
                /> */}
              </div>
              {levels === 2 && <EssentialReadings data={selectedUnit} />}
              {levels === 3 && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={2}>Description</th>
                      <th>File Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <span>
                          Sweeten to systems thinking and teamwork if you want
                          to stand out in sustainability. Here are the 8
                          attributes of successful sustainability leaders
                        </span>
                      </td>
                      <td>
                        <a href={pdf} download>
                          <img
                            src="https://ulearn.uniathena.com/images/icon-pdf.png"
                            alt=""
                            width="40"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
              {levels === 4 && <AdditionalResources />}
              <div className="prevnext-videobtn mt-4 mb-2 flex">
                <Button variant="" onClick={handlePrevUnit}>
                  {"<<"} Previous
                </Button>
                <Button variant="" onClick={handleNextUnit}>
                  Next {">>"}
                </Button>
              </div>
              <div className="addviewnote-btnwrap">
                <Button variant="" onClick={handleShow}>
                  {VIEWNOTESTEXT ? "View Notes" : "Add Notes"}
                </Button>
              </div>
              <Modal show={showPopup} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Notes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {viewNotes ? (
                    VIEWNOTESTEXT
                  ) : (
                    <textarea
                      type="text"
                      className="w-100"
                      placeholder="Add Your Notes"
                      value={notes} // Bind the state to textarea
                      onChange={handleNotesChange} // Update state when input changes
                    />
                  )}
                </Modal.Body>
                <Modal.Footer className="completed-btnwrap">
                  {!VIEWNOTESTEXT && (
                    <Button variant="primary" onClick={handleSaveNotes}>
                      {" "}
                      {createNotesoading ? "Saving..." : "Save"}
                    </Button>
                  )}
                </Modal.Footer>
              </Modal>
              <div className="completed-btnwrap mt-2 my-4">
                <Button
                  onClick={markasCompletedHandler}
                  disabled={UNITSTATUS === "Completed"}
                >
                  {UNITSTATUS === "Completed"
                    ? "Completed"
                    : "Mark as Completed"}
                </Button>
              </div>
              <hr className="my-2" />
              <div className="prevnext-videobtn mt-3 flex">
                {prevUnitName && (
                  <Button variant="" onClick={handlePrevUnit}>
                    {prevUnitName}
                  </Button>
                )}
                {nextUnitName && (
                  <Button variant="" onClick={handleNextUnit}>
                    {nextUnitName}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Progress;
