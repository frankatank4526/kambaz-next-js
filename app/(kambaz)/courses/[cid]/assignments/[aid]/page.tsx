import { Button, Col, Container, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentEditor() {
    return (

        <Container>
            <Row className="justify-content-md-center ">
                <Col>
                    <FormLabel>Assignment Name</FormLabel>
                    <FormControl className="mb-3" defaultValue="A1 - ENV + HTML" />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>

                    <FormControl className="mb-3" as="textarea" rows={5} placeholder="Description of assignment" />
                </Col>

            </Row>
            <Row className="justify-content-md-center">
                <Col> <FormLabel className="float-end">Points</FormLabel> </Col>
                <Col>
                    <FormControl className="mb-3" type="number" />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <FormLabel className="float-end">Assignment Group</FormLabel></Col>
                <Col>
                    <FormSelect className="mb-3">
                        <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </FormSelect>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col>
                    <FormLabel className="float-end">Display Grade as</FormLabel></Col>
                <Col>
                    <FormSelect className="mb-3">
                        <option value="Percentage" defaultChecked>Percentage</option>
                        <option value="Letter Grade">Letter Grade</option>

                    </FormSelect>
                </Col>
            </Row>


            <Row className="justify-content-md-center">

                <Col>

                    <FormLabel className="float-end">Submission Type</FormLabel></Col>
                <Col>
                    <FormSelect className=" mb-3">
                        <option value="Online" defaultChecked>Online</option>
                        <option className="mb-3" value="In-person">In-person</option>

                    </FormSelect>
                    <FormLabel as="legend" column sm={2} className="fw-bold"> Online Entry Options </FormLabel>
                    <Col sm={10}>
                        <FormCheck type="checkbox" label="Text Entry" defaultChecked />
                        <FormCheck type="checkbox" label="Website URL" />
                        <FormCheck type="checkbox" label="Media Recordings" />
                        <FormCheck type="checkbox" label="Student Annotation" />
                        <FormCheck className="mb-3" type="checkbox" label="File Uploads" />

                    </Col>

                </Col>
            </Row>
            {/*
            for some reason getting error on Form.Group
            <Form.Group>
                <FormLabel>Assign to</FormLabel>
                <FormControl/>
            </Form.Group>
            */}
            <Row>
                <Col>
                <FormLabel className="float-end">Assign to</FormLabel></Col><Col>
                <FormControl/></Col>
                
            </Row>
            <Row>
                <Col>
                <FormLabel>Due</FormLabel>
                <FormControl className="mb-3"type="date"/></Col>
            </Row>
             <Row>
                <Col>
                <FormLabel>Available from</FormLabel>
                <FormControl className="mb-3" type="date"/></Col>
            </Row>
             <Row>
                <Col>
                <FormLabel>Until</FormLabel>
                <FormControl className="mb-3" type="date"/></Col>
            </Row>
           
            <Row>
<Col>
<Button variant="danger" className="me-1 float-end" >
                                   Save
                              </Button>
                              <Button className="btn-secondary me-2 float-end" >
                                    
                                    Cancel
                              </Button></Col>
            </Row>

        </Container>
    );
}
