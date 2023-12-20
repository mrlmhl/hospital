import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointments }) => {
 
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
     
      {appointments?.map(({ id, patient, consulted, doctor, day }) => (
        <div key={id} className={consulted ? "appointments consulted" : "appointmenst"} role="button">
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString("tr")}</h5>
              <h5>Time: {new Date(day).toLocaleTimeString("tr")}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete className="text-danger fs-1" type="button" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
