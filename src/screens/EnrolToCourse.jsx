import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GetStudentPayments } from "../actions/PaymentAction";
import Loader from "../reusablecomponents/Loader";
import { GetCourseModule } from "../actions/courseDetails";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const EnrolToCourse = () => {
  const [checkboxStates, setCheckboxStates] = useState([]); 

  // Function to handle the change of a checkbox
  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];

    // Uncheck checkboxes below if the current checkbox is unchecked
    if (!newCheckboxStates[index]) {
      for (let i = index + 1; i < newCheckboxStates.length; i++) {
        newCheckboxStates[i] = false;
      }
    }

    setCheckboxStates(newCheckboxStates);
  };
  const dispatch = useDispatch();
  const query = useQuery();
  const courseId = query.get("CourseId");
  useEffect(() => {
    dispatch(GetStudentPayments(courseId));
  }, [courseId, dispatch]);

  const StudentPayments = useSelector((state) => state.studentPayment);
  const { loading, error, PaymentInfo } = StudentPayments;
  console.log(PaymentInfo);
  // Sample data representing each row of the table
  useEffect(() => {
    dispatch(GetCourseModule(courseId));
  }, [courseId, dispatch]);

  const coursemodule = useSelector((state) => state.courseModule);
  const {
    loading: courseLoading,
    error: courseError,
    courseModule,
  } = coursemodule;

  const CourseName = courseModule?.[0]?.CourseName || "Course Name";

  const tableData = PaymentInfo;

  const calculateAmounts = () => {
    let totalAmount = 0;
    let netAmount = 0;

    checkboxStates.forEach((isChecked, index) => {
      if (isChecked) {
        totalAmount += tableData[index].Payable;
        netAmount += tableData[index].Amount;
      }
    });

    return { totalAmount, netAmount };
  };

  const { totalAmount, netAmount } = calculateAmounts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="bg-light">
        <div className="moduledetailwrap">
          <div className="text-dark pt-4 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Payment Initiation</b>
              </h2>
            </div>
          </div>
        </div>
        {tableData?.[0]?.IsModule && (
          <>
            <div className="course-enrol-detail flex gap-10 pb-4">
              <div className="col-md-4">
                <b>Course Name: </b>

                <span>{CourseName}</span>
              </div>
              <div className="col-md-5">
                <b>Univeristy: </b>
                <span>Guglielmo Marconi University, Italy</span>
              </div>
            </div>
          </>
        )}
      </Container>
      {!tableData?.[0]?.IsModule ? (
        <Container
          fluid
          style={{ minHeight: "2rem", background: "var(--defaultgradient)" }}
        ></Container>
      ) : (
        <Container fluid className="dash-module-wrap py-2">
          <Row className="dash-module-content py-4">
            <Col className="">
              <div className="dashcontent">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/duration.svg"
                    alt=""
                    width={24}
                  />
                </div>
                <div>
                  <h6 className="font-14">
                    <b>Duration</b>
                  </h6>
                  <p>Flexible (9 to 24 Months)</p>
                </div>
              </div>
            </Col>
            <Col className="">
              <div className="dashcontent">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/course-level.svg"
                    alt=""
                    width={32}
                  />
                </div>
                <div>
                  <h6 className="font-14">
                    <b>Course Level & Credits</b>
                  </h6>
                  <p>
                    <b>Master Degree</b>
                    <br />
                    Credits 60 (ECTS)
                  </p>
                  <Link to="/ECTS">
                    <Button className="ect-btn">What is ECTS?</Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col>
              <div className="dashcontent">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/total-learners.svg"
                    alt=""
                    width={31}
                  />
                </div>
                <div>
                  <h6 className="font-14">
                    <b>Total Learners</b>
                  </h6>
                  <p>6200+</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="dashcontent">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/total-learners.svg"
                    alt=""
                    width={31}
                  />
                </div>
                <div>
                  <h6 className="font-14">
                    <b>Delivery Model</b>
                  </h6>
                  <p>Online</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <Container>
        <div>
          <form action="">
            <div className="container body-content pt-5 text-center">
              <h3 className="text-center">
                {tableData?.[0]?.IsModule === false ? (
                  <b>FAST TRACK SCHEDULE DETAILS</b>
                ) : (
                  <b>MODULE DETAILS</b>
                )}
              </h3>
              {tableData?.[0]?.IsModule === false ? (
                <span className="m-0 text-center">
                  Please select appropriate Fee Schedules for the payment. You
                  can select single or multiple schedule together, however the
                  access to the module resources will be provided based on the
                  completion of the previous one. The below shown fee are the
                  net scheduled fees.
                </span>
              ) : (
                <span className="m-0 text-center">
                  Please select appropriate modules for the payment. You can
                  select single or multiple module together, however the access
                  to the module resources will be provided based on the
                  completion of the previous one. The below shown fee are the
                  net module fees after any scholarship or discount offered to
                  you.
                </span>
              )}
            </div>
            <div className="px-4 createinvoice-table my-5">
              <Table bordered hover responsive="md">
                <thead className="invoice-reciept-list">
                  <tr className="invoice-thead">
                    <th>Code</th>
                    {tableData?.[0]?.IsModule === false ? (
                      <th>Module / Fee Description</th>
                    ) : (
                      <th>Module Name</th>
                    )}
                    <th>Actual Amount (USD)</th>
                    <th>Offer Amount (USD)</th>
                    <th>Net Amount (USD)</th>
                    {tableData?.[0]?.IsModule === false && <th>DueDate</th>}
                    <th>Select</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData?.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{row.Installment}</td>
                      <td>{row.Amount}</td>
                      <td>{row.Discount}</td>
                      <td>{row.Payable}</td>
                      {tableData?.[0]?.IsModule === false && (
                        <td>{row.DuDate}</td>
                      )}
                      <td>
                        <input
                          type="checkbox"
                          checked={checkboxStates[index] || false}
                          onChange={() => handleCheckboxChange(index)}
                          disabled={!checkboxStates[index - 1] && index !== 0}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {loading && (
                <div className="my-3">
                  <Loader />
                </div>
              )}
              {error && (
                <div className="my-3">
                  <Alert variant="danger">error</Alert>
                </div>
              )}
            </div>
            <div className="flex text-center my-2 ">
              <h2 className="w-100 flex content-center gap-10 item-center">
                <span style={{ fontSize: "large" }}>
                  Total amount selected :{" "}
                </span>
                <span style={{ fontWeight: "700" }}>
                  USD {totalAmount?.toFixed(2)}
                </span>
              </h2>
            </div>
            <hr className="mb-4" />
            <div className="pb-2 flex content-center">
              <Form.Check // prettier-ignore
                type="checkbox"
                // id={`default-${type}`}
                label={
                  <span>
                    I accept the <Link to="/Terms">Terms And Conditions</Link>
                  </span>
                }
              />
            </div>
            <div className="pb-4 flex content-center">
              <Button className="default-btn">Proceed Payment</Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default EnrolToCourse;
