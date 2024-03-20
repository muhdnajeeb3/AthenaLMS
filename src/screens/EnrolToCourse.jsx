import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const EnrolToCourse = () => {
  const [checkboxStates, setCheckboxStates] = useState([]); // Initialize states for each checkbox

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

  // Sample data representing each row of the table
  const tableData = [
    {
      moduleName: "Instalment 7",
      
      actualAmount: 350.0,
      offerAmount: 0.0,
      netAmountUSD: 350.0,
    },
    {
      moduleName: "Instalment 8",
      actualAmount: 350.0,
      offerAmount: 0.0,
      netAmountUSD: 350.0,
    },
    {
      moduleName: "Instalment 9",
      actualAmount: 350.0,
      offerAmount: 0.0,
      netAmountUSD: 350.0,
    },
    {
      moduleName: "Degree Certification Fee",
      actualAmount: 700.0,
      offerAmount: 0.0,
      netAmountUSD: 700.0,
    },
  ];
  // Calculate total and net amounts based on checked checkboxes
  const calculateAmounts = () => {
    let totalAmount = 0;
    let netAmount = 0;

    checkboxStates.forEach((isChecked, index) => {
      if (isChecked) {
        totalAmount += tableData[index].actualAmount;
        netAmount += tableData[index].netAmountUSD;
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
        <div className="course-enrol-detail flex gap-10 pb-4">
          <div className="col-md-4">
            <b>Course Name: </b>

            <span>Master In Data Sciences</span>
          </div>
          <div className="col-md-5">
            <b>Univeristy: </b>
            <span>Guglielmo Marconi University, Italy</span>
          </div>
        </div>
      </Container>
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
      <Container>
        <div>
          <form action="">
            <div className="container body-content pt-5 text-center">
              <h3 className="text-center">
                <b>MODULE DETAILS</b>
              </h3>
              <span className="m-0 text-center">
              Please select appropriate modules for the payment. You can select single or multiple module together, however the access to the module resources will be provided based on the completion of the previous one. The below shown fee are the net module fees after any scholarship or discount offered to you.
              </span>
            </div>
            <div className="px-4 createinvoice-table my-5">
              <Table bordered hover responsive="md">
                <thead className="invoice-reciept-list">
                  <tr className="invoice-thead">
                    <th>Code</th>
                    <th>Module Name</th>
                    <th>Actual Amount (USD)</th>
                    <th>Offer Amount (USD)</th>
                    <th>Net Amount (USD)</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{row.moduleName}</td>
                      <td>{row.actualAmount}</td>
                      <td>{row.offerAmount}</td>
                      <td>{row.netAmountUSD}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={checkboxStates[index]}
                          onChange={() => handleCheckboxChange(index)}
                          disabled={!checkboxStates[index - 1] && index !== 0}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="flex text-center my-2 ">
              <h2 className="w-100 flex content-center gap-10 item-center">
                <span style={{ fontSize: "large" }}>
                  Total amount selected :{" "}
                </span>
                <span style={{ fontWeight: "700" }}>
                  USD {totalAmount.toFixed(2)}
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
