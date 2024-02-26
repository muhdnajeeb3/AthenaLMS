import { Breadcrumb, Button, Container } from "react-bootstrap"

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
              <Breadcrumb>
      <Breadcrumb.Item href="/" className="breadcrumb">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="/ModuleDetails">
      Module Details
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item active>UnitDetailsView</Breadcrumb.Item> */}
    </Breadcrumb>
            </div>
            <div>
              <Button
                className="dreadmore-btn"
                style={{
                  borderRadius: "0",
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