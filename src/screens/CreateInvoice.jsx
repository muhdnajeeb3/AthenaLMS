import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const CreateInvoice = () => {
  const [paymethode, setPaymethode] = useState("Create Invoice");
  const CreateInvoice = paymethode === "Create Invoice";
  const ViewInvoice = paymethode === "View Invoice";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  return (
    <Container fluid className="bg-light">
      <div className="moduledetailwrap">
        <div className="pt-5 pb-3 shadow my-5 bg-white">
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
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateInvoice;
