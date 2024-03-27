import { Container } from "react-bootstrap";

const AboutAdmissionFee = () => {
  return (
    <Container fluid className="bg-white">
      <div className="m-auto" style={{ maxWidth: "1200px" }}>
        <div className="flex content-center py-5">
          <h2>
            <strong>ABOUT ADMISSION, FEE & OTHER CHARGES</strong>
          </h2>
        </div>
        <div className="practicalinfo pb-2 mb-3">
          <div className="practicalinfo-title w-100 mb-3">
            <h5>
              <b>What is the admission process for GMU’s MBA program?</b>
            </h5>
            <h6 className="mb-3 mt-2">Follow these steps to formally enrol into the Master of Business Administration program by GMU</h6>
            <p className="flex gap-10"><span>1.</span><span> Register on Athena Global Education for a free 7-day trial.</span></p>
            <p className="flex gap-10"><span>2.</span><span>Upload all the documents as required under the ‘Eligibility Criteria’ to the learning portal by clicking on ‘Enroll Now’ on the learning dashboard.</span></p>
            <p className="flex gap-10"><span>3.</span><span>The academic panel will then review your documents and if found to be eligible, send you an ‘Admission Offer Letter’.</span></p>
            <p className="flex gap-10"><span>4.</span><span>On receiving the ‘Admission Offer Letter’, you can pay for one module (or one “course” if you are an American).</span></p>
            <p className="flex gap-10"><span>5.</span><span>You can pay for multiple modules together if you like. However, you will be given access to subsequent module content only after completing the previous module.</span></p>
            <p className="flex gap-10"><span>6.</span><span>Once your payment is confirmed, you will be sent an official ‘Admission Letter’ along with a receipt for the amount paid. You will also get access to the Assignment related documents in the ‘Project Details’ section.</span></p>
          </div>
        </div>
        <div className="practicalinfo pb-2 mb-3">
          <div className="practicalinfo-title w-100 mb-3">
            <h5>
              <b>What are the documents required for admission to GMU’s MBA?</b>
            </h5>
            <h6 className="mb-3 mt-2">All applicants are required to upload the following documents in order to be eligible for admissions:</h6>
            <p className="flex gap-10"><span>1.</span><span> Proof of having earned a Bachelor’s Degree - such as a Degree Certificate. If the documents are not in English, official translations should be submitted.</span></p>
            <p className="flex gap-10"><span>2.</span><span>The final transcript of Bachelor’s Degree.</span></p>
            <p className="flex gap-10"><span>3.</span><span>A copy of the government-issued photo identity card.</span></p>
            <p className="flex gap-10"><span>4.</span><span>If you do not have a Bachelor’s degree, you can still apply through the mature entry route. You will have to upload an updated resume along with the relevant work experience letters issued by your employer/s. You may also be contacted by our faculty for a telephone interview in order to ascertain your eligibility for the program.</span></p>
               </div>
        </div>
        <div className="practicalinfo pb-2 mb-3">
          <div className="practicalinfo-title w-100 mb-3">
            <h5>
              <b>Are there any extension fees?</b>
            </h5>
            <p>Once you have registered for the MBA program, the maximum time allowed to complete the program is 36 months. If you are unable to complete the course within 36 months, you may apply for an extension of 12 months by paying a Course Extension fee of USD 500.00 ($500).</p>
            <p>The minimum duration of the course is defined as 9 months though some exceptions may apply.</p>
            <p>Each module must be completed within 90 days of the enrollment date. The shortest time allowed for submission of the assignment is 21 days from the date of enrollment.</p>
            <p>If you fail to submit the assignment within 90 days of the enrollment date, you can request an extension of not more than 30 days and pay a fee of USD 100.00 ($100)</p>
            <p>If you do not resubmit the failed assignment within 21 days of the published results, you may request an extension of not more than 30 days by paying USD 100.00 ($100).</p>
            <p>If you fail again on your RE-submission, you may apply for a Re-Take by paying USD 150 ($150). You will have another 90 days of access to the resources and will need to submit the assignment within these 90 days from the retake date. The process then restarts as mentioned above.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutAdmissionFee;
