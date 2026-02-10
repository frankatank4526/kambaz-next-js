import Link from "next/link";
import Image from "next/image";
import "./style-dash.css";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course1.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/CS3500/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course2.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3500 OOD</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Object-oriented programming</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>

          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/SCI1500/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course3.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">SCI1500 Chemistry</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Chemistry fundamentals</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/CS4000/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course4.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4000 AI</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Machine learning and AI</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/ENG2000/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course5.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ENG2000</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Professional writing</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/BS2500/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course6.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">BS2500 Economics</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Basic economics</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/EE2800/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/course7.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">EE2800 Circuits</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Circuits and signals</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
     

      </div>
    </div>
  );
}
