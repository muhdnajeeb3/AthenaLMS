import html2canvas from "html2canvas";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const IdCard = ({ showPopupED, handleClose }) => {
  const contentRef = useRef(null);

  const handleDownload = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current, { useCORS: true }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "id_card.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };
  
  return (
    <Modal
      show={showPopupED}
      onHide={handleClose}
      className="idcard-modal-wrap"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>ID CARD</Modal.Title>
      </Modal.Header>
      <Modal.Body ref={contentRef}>
        <div>
          <img
            src="https://ulearn.uniathena.com/images/ciq-idheader.png"
            alt=""
            className="w-100"
          />
        </div>
        <div className="idcard-content">
          <div className="col-2 idcard-athena">
            {/* <img src="https://ulearn.uniathena.com/Images/age-id.png" alt="" /> */}
            <span>Athena Global Education</span>
          </div>
          <div className="col-10 id-card-details">
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/06/39/82/56/360_F_639825617_M37Rtx5wggULiv1sa6HRYdlWGJhZ4yYw.jpg"
                alt=""
                width={130}
                className="profile-img"
              />
            </div>
            <div className="py-3">
              <strong>Muhd Najeeb</strong>
              <div className="flex gap-10 py-2">
                <span>Registration No</span>:<span>40820113680</span>
              </div>
              <div className="flex gap-10 py-2">
                <span>Course</span>:<span>PGCHRL</span>
              </div>
              <div className="flex gap-10 py-2">
                <span>Awarding Body</span>:<span>CIQ, UK</span>
              </div>
              <div className="flex gap-10 py-2">
                <span>Date of Birth</span>:<span>28/03/1982</span>
              </div>
              <div className="flex gap-10 py-2">
                <span>Email</span>:<span>najeeb@schneideit.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h6>
          www.uniathena.com 
          </h6>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDownload} className="default-btn text-white p-2 rounded">
          Download
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IdCard;
