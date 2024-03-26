import { useEffect } from "react";
import { Breadcrumb, Button, Container, Table } from "react-bootstrap";

const FasttrackTestResult = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid>
      <div className="fasttrack-wrap">
        <div className="pt-4">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="breadcrumb">
              Course Home /
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="result-attempt-wrap mb-5">
          <div className="flex item-center row-col p-3">
            <strong className="text-center attempt-title">Attempt 1</strong>
            <div className="result-percentage text-center">4%</div>
          </div>
          <div className="question-answer-wrap pt-3">
            <div className="flex gap-10">
              <span>1.</span>
              <span>
                What arithmetic operators cannot be used with strings?
              </span>
            </div>
            <div className="selected-answer  py-3 my-3">
              <strong>Selected Answer :</strong>
            </div>
            <div className=" pb-3 my-3 flex content-sb gap-10 item-center">
              <strong>Answer here</strong>
              <img
                src="https://ulearn.uniathena.com/Images/correct.png"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className=" py-3 my-3">
              <strong style={{ textDecoration: "underline" }}>
                Correct Answer :
              </strong>
            </div>
            <div className=" pb-4 my-3">
              <strong>Answer here</strong>
              {/* <img src="https://ulearn.uniathena.com/Images/correct.png" alt="" width={30} height={30}/> */}
            </div>
            <div className="p-4 text-center">
              <strong>Test Results</strong>
            </div>
          </div>
        </div>
        <div className="m-auto py-3" style={{ maxWidth: "888px" }}>
          <Table responsive="md" bordered className="my-2">
            <thead>
              <tr className="attempt-table-tile">
                <th>Attempt</th>
                <th>Date</th>
                <th>Score</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Attempt 1</th>
                <th>3/28/2022 5:00:46 PM</th>
                <th>Your Score : 0.50 of 12.00</th>
                <th>View Result</th>
                <th>
                  <Button className="default-btn">
                    Submit For Final Evaluation
                  </Button>
                </th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default FasttrackTestResult;
