import { Button, Container } from "react-bootstrap"

const Banner = () => {
  return (
    <Container fluid className="bg-light">
        <div className="moduledetailwrap">
          <div className="text-dark pt-4 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Machine Learning</b>
              </h2>
              <p>
                <b>Postgraduate Certificate In Machine Learning</b>
              </p>
              <p style={{color:'#007bff'}}>
                Dashboard / Module Details
              </p>
            </div>
            <div>
              <Button
                className="dreadmore-btn"
                style={{
                  borderRadius: "0",
                  margin: "0 0 0 auto",
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  width: "191px",
                  height: "44px",
                }}
              >
                Connect Personal Tutor
              </Button>
            </div>
          </div>
        </div>
      </Container>
  )
}

export default Banner