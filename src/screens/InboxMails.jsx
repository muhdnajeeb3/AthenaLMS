import { useEffect, useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";

const InboxMails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const [showPopup, setShowPopup] = useState(false);
    
      const handleClose = () => setShowPopup(false);
      const handleShow = () => setShowPopup(true);
    
      
  return (
    <>
      <Container fluid className="bg-light">
        <div className="moduledetailwrap">
          <div className="text-dark pt-4 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Inbox Mails</b>
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="bg-white">
      <Modal show={showPopup} onHide={handleClose} className="inboxmailpopup">
                <Modal.Header closeButton>
                  {/* <Modal.Title>New Mail</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Modal.Body>
              </Modal>
        <div className="inboxmailrow">
          <Table borderless className="my-2">
            <tbody>
              <tr>
                <td>notifications@uniathena.com</td>
                <td onClick={handleShow}>Letter of Admission: Mr. Joju Test Schneide</td>
                <td>Oct 17 2022 11:26AM</td>
              </tr>
              <tr>
                <td>notifications@uniathena.com</td>
                <td onClick={handleShow}>Letter of Admission: Mr. Joju Test Schneide</td>
                <td>Oct 17 2022 11:26AM</td>
              </tr>
              <tr>
                <td>notifications@uniathena.com</td>
                <td onClick={handleShow}>Letter of Admission: Mr. Joju Test Schneide</td>
                <td>Oct 17 2022 11:26AM</td>
              </tr>
              <tr>
                <td>notifications@uniathena.com</td>
                <td onClick={handleShow}>Letter of Admission: Mr. Joju Test Schneide</td>
                <td>Oct 17 2022 11:26AM</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default InboxMails;
