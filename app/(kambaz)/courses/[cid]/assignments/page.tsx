"use client"
import Link from "next/link";
import { Button, Col, Container, FormControl, InputGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LessonControlButtons from "../modules/LessonControlButtons";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import * as db from "../../../database";

export default function Assignments() {
      const { cid } = useParams();
      return (

            <Container>
                  <Row className="mb-3">
                        <Col >
                              <InputGroup id="search-bar" className="mb-3 float-start" >
                                    <InputGroupText className="bg-white"><HiMagnifyingGlass /></InputGroupText>
                                    <FormControl placeholder="Search..." />
                              </InputGroup>
                        </Col>
                        <Col>


                              <Button variant="danger" className="me-1 float-end" >
                                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                    Assignment
                              </Button>
                              <Button className="btn-secondary me-2 float-end" >
                                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                    Group
                              </Button></Col>


                        <div>
                              <ListGroup className="rounded-0" id="wd-modules">
                                    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                                          <div className="fw-bold p-3 ps-2 bg-secondary">
                                                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons /> </div>
                                          <ListGroup className="wd-lessons rounded-0">
                                                {db.assignments.filter((assignment: any) => assignment.course === cid)
                                                      .map((assignment: any) => (
                                                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                                                  <div>
                                                                        <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="text-success" />
                                                                        <Link href={`/courses/${assignment.course}/assignments/${assignment._id}`} className="assignment-title fw-bold">
                                                                              {assignment.title}</Link> <LessonControlButtons />
                                                                        <div className="description-margin"><span className="description1 fw-normal fs-6">Multiple Modules </span>|
                                                                              <span className="description2 fw-bold fs-6"> Not available until </span>
                                                                              <span className="description2 fs-6">May 6 at 12:00am | </span>
                                                                              <span className="description2 fw-bold fs-6">Due </span>
                                                                              <span className="description2 fs-6">May 13 at 11:59pm | 100 pts</span>

                                                                        </div> </div>
                                                            </ListGroupItem>
                                                      ))}




                                          </ListGroup>
                                    </ListGroupItem>
                              </ListGroup>
                        </div>

                  </Row>

            </Container>

      );
}
