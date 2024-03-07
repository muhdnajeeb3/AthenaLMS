import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const PersonalBilling = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedPaymentTitle, setSelectedPaymentTitle] = useState(null);

  const handleTitleClick = (index) => {
    setSelectedTitle(index);
  };
  const handlePaymentTitleClick = (index) => {
    setSelectedPaymentTitle(index);
  };
  const invoiceData = [
    {
      title: "Master In Data Sciences",
      modules: [
        {
          moduleName: "S&B Sustainability And Business",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
        {
          moduleName:
            "SLAHRP Strategic Leadership And HR Practices In Organizations",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
        {
          moduleName: "Module Name",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
      ],
    },
    {
      title: "Master Of Business Administration - Blockchain Management",
      modules: [],
    },
    {
      title: "Master Of Business Administration - Blockchain Management",
      modules: [],
    },
    {
      title: "Master of International Business Administration",
      modules: [],
    },
  ];
  const Pendingpayment = [
    {
      title: "pMaster In Data Sciences",
      modules: [
        {
          moduleName: "S&B Sustainability And Business",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
        {
          moduleName:
            "SLAHRP Strategic Leadership And HR Practices In Organizations",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
        {
          moduleName: "Module Name",
          feeType: "Module Fee",
          amount: "400.00",
          paidOn: "October 17, 2023",
        },
      ],
    },
    {
      title: "pMaster Of Business Administration - Blockchain Management",
      modules: [],
    },
    {
      title: "pMaster Of Business Administration - Blockchain Management",
      modules: [],
    },
    {
      title: "pMaster of International Business Administration",
      modules: [],
    },
  ];
  return (
    <Container fluid className="bg-light py-2">
      <div className="memberprofilewrap">
        <h2 className="mptitle">My Private Profile</h2>
        <br />
        <div className="mpbox1">
          <div className="col-md-12">
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>INVOICES & RECEIPTS</b>
                </h5>
              </div>
              <div>
                {invoiceData.map((item, index) => (
                  <div key={index}>
                    <div
                      className="invoice-reciept-list"
                      onClick={() => handleTitleClick(index)}
                    >
                      <span className="">{index + 1 }.{item.title}</span>
                      {selectedTitle === index && (
                        <Table responsive="sm" bordered hover className="my-2">
                          <thead>
                            <tr className="invoice-thead">
                              <th>Module Name</th>
                              <th>Fee Type</th>
                              <th>Amount</th>
                              <th>Paid On</th>
                              <th>Print</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.modules.map((module, moduleIndex) => (
                              <tr key={moduleIndex}>
                                <th>{moduleIndex + 1 }.{module.moduleName}</th>
                                <th>{module.feeType}</th>
                                <th>{module.amount}</th>
                                <th>{module.paidOn}</th>
                                <th>
                                  <Button
                                    variant="danger"
                                    className="print-reciept-btn"
                                  >
                                    Print Receipt
                                  </Button>
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>PENDING PAYMENTS</b>
                </h5>
              </div>
              <div>
                {Pendingpayment.map((item, index) => (
                  <div key={index}>
                    <div
                      className="invoice-reciept-list"
                      onClick={() => handlePaymentTitleClick(index)}
                    >
                      <span className="">{index + 1 }.{item.title}</span>
                      {selectedPaymentTitle === index && (
                        <Table borderless hover className="my-2">
                          <tbody>
                            {item.modules.map((module, moduleIndex) => (
                              <tr key={moduleIndex}>
                                <th>{moduleIndex + 1 }.{module.moduleName}</th>
                                <th>
                                  <Button
                                    variant="danger"
                                    className="print-reciept-btn"
                                  >
                                    View / Pay
                                  </Button>
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Statement Of Accounts</b>
                </h5>
              </div>
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PersonalBilling;
