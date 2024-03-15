import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const CreateInvoice = () => {
  const [paymethode, setPaymethode] = useState("Create Invoice");
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
      moduleName: "Instalment 10",
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

  const CreateInvoice = paymethode === "Create Invoice";
  const ViewInvoice = paymethode === "View Invoice";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="bg-light">
      <div className="moduledetailwrap">
        <div className="pt-5 pb-3 shadow my-5 bg-white w-100">
          <div className="flex-fast-btn-wrap createinvoice px-4">
            <Button
              className={`flex-fast-btn ${CreateInvoice ? "btn-active" : ""}`}
              onClick={() => setPaymethode("Create Invoice")}
            >
              Create Invoice
            </Button>
            <Button
              className={`flex-fast-btn ${ViewInvoice ? "btn-active" : ""}`}
              onClick={() => setPaymethode("View Invoice")}
            >
              View Invoice
            </Button>
          </div>
          {CreateInvoice && (
            <div>
              <form action="">
                <div className="create-invoice-form px-2">
                  <div className="cpform-group">
                    <label>Course</label>
                    <select
                      placeholder="Qualification Level..."
                      className="cpform-control"
                    >
                      <option value="">Select</option>
                      <option value="Higher Diploma/Diploma">Course</option>
                    </select>
                  </div>
                  <div className="cpform-group">
                    <label>Student Name</label>
                    <input
                      className="cpform-control"
                      type="text"
                      placeholder="Student Name"
                    />
                  </div>
                  <div className="cpform-group">
                    <label>Email</label>
                    <input
                      className="cpform-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="cpform-group">
                    <label>Address</label>
                    <input
                      className="cpform-control"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div className="cpform-group">
                    <label>City</label>
                    <input
                      className="cpform-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="cpform-group">
                    <label>State/Province</label>
                    <input
                      className="cpform-control"
                      type="text"
                      placeholder="State/Province"
                    />
                  </div>
                  <div className="cpform-group">
                    <label>Postal Code</label>
                    <input
                      className="cpform-control"
                      type="number"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div className="px-4 createinvoice-table">
                  <Table bordered hover responsive="sm">
                    <thead>
                      <tr>
                        <th>Module Name</th>
                        <th>Actual Amount</th>
                        <th>Offer Amount</th>
                        <th>Net Amount (USD)</th>
                        <th>Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.moduleName}</td>
                          <td>{row.actualAmount}</td>
                          <td>{row.offerAmount}</td>
                          <td>{row.netAmountUSD}</td>
                          <td>
                            <input
                              type="checkbox"
                              checked={checkboxStates[index]}
                              onChange={() => handleCheckboxChange(index)}
                              disabled={
                                !checkboxStates[index - 1] && index !== 0
                              }
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <b>Total Amount:</b>
                        </td>
                        <td>
                          <b>{totalAmount.toFixed(2)} USD</b>
                        </td>
                        <td></td>
                        <td>
                          <b>{netAmount.toFixed(2)} USD</b>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="p-4">
                  <Button className="default-btn">Generate Invoice</Button>
                </div>
              </form>
            </div>
          )}
          {ViewInvoice && (
            <div className="px-4 createinvoice-table my-5">
              <Table bordered responsive="md">
                <thead>
                  <tr>
                    <th colSpan={2}>Course Name</th>
                    <th>Awarding Body</th>
                    <th>Date & Time Of Creation</th>
                    <th>Invoice Name</th>
                    <th>View</th>
                    <th>Download</th>
                    <th>Mail</th>
                  </tr>
                </thead>
                <tbody>

                    <tr>
                      <td colSpan={2}>Master In Data Sciences</td>
                     <td>Guglielmo Marconi University, Italy</td>
                     <td>	15/03/2024, 15:03</td>
                     <td>1952-23617-PaymentInvoice.pdf</td>
                     <td>
                     <i className="fa fa-eye" />
                     </td>
                     <td>
                     <i className="fa fa-download" />

                     </td>
                     <td>
                     <i className="fa fa-envelope-o" />

                     </td>
                     
                    </tr>
                    <tr>
                      <td colSpan={2}>Master In Data Sciences</td>
                     <td>Guglielmo Marconi University, Italy</td>
                     <td>	15/03/2024, 15:03</td>
                     <td>1952-23617-PaymentInvoice.pdf</td>
                     <td>
                     <i className="fa fa-eye" />
                     </td>
                     <td>
                     <i className="fa fa-download" />

                     </td>
                     <td>
                     <i className="fa fa-envelope-o" />

                     </td>
                     
                    </tr>
                    <tr>
                      <td colSpan={2}>Master In Data Sciences</td>
                     <td>Guglielmo Marconi University, Italy</td>
                     <td>	15/03/2024, 15:03</td>
                     <td>1952-23617-PaymentInvoice.pdf</td>
                     <td>
                     <i className="fa fa-eye" />
                     </td>
                     <td>
                     <i className="fa fa-download" />

                     </td>
                     <td>
                     <i className="fa fa-envelope-o" />

                     </td>
                     
                    </tr>
                    <tr>
                      <td colSpan={2}>Master In Data Sciences</td>
                     <td>Guglielmo Marconi University, Italy</td>
                     <td>	15/03/2024, 15:03</td>
                     <td>1952-23617-PaymentInvoice.pdf</td>
                     <td>
                     <i className="fa fa-eye" />
                     </td>
                     <td>
                     <i className="fa fa-download" />

                     </td>
                     <td>
                     <i className="fa fa-envelope-o" />

                     </td>
                     
                    </tr>
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CreateInvoice;
