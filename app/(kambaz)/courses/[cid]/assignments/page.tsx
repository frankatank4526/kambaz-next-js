"use client"
import Link from "next/link";
import { Button, Col, Container, FormControl, InputGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LessonControlButtons from "../modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import * as db from "../../../database";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect, useState } from "react";
import DeleteModal from "./deleteModal";
import * as client from "../../client";
export default function Assignments() {

      const [show, setShow] = useState(false);
      const [assignmentId, setAssignmentId] = useState("");
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
      const { cid } = useParams();
      const dispatch = useDispatch();

      const onRemoveAssignment = async (assignmentId: string) => {
            await client.deleteAssignment(assignmentId);
            dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
      };
      const fetchAssignments = async () => {
            const assignments = await client.findAssignmentsForCourse(cid as string);
            dispatch(setAssignments(assignments));
      };
      useEffect(() => {
            fetchAssignments();
      }, []);
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

                              <Link href={`/courses/${cid}/assignments/-1`} >
                                    <Button variant="danger" className="me-1 float-end" >
                                          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                          Assignment
                                    </Button></Link>
                              <Button className="btn-secondary me-2 float-end" >
                                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                    Group
                              </Button></Col>


                        <div>
                              <ListGroup className="rounded-0" id="wd-modules">
                                    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                                          <div className="fw-bold p-3 ps-2 bg-secondary">
                                                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS {/*<ModuleControlButtons 
                                                moduleId={module._id} deleteModule={(moduleId) => {
                                                                  dispatch(deleteModule(moduleId)}}/>*/} </div>
                                          <ListGroup className="wd-lessons rounded-0">
                                                {assignments
                                                      .map((assignment: any) => (
                                                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                                                  <div>
                                                                        <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="text-success" />
                                                                        <Link href={`/courses/${assignment.course}/assignments/${assignment._id}`} className="assignment-title fw-bold">
                                                                              {assignment.title}</Link>
                                                                        <FaTrash style={{ float: "right", marginTop: 6 }} className="text-danger me-2 mb-1" onClick={() => {
                                                                              setAssignmentId(assignment._id);
                                                                              handleShow();
                                                                              {/*dispatch(deleteAssignment(assignment._id))*/ }
                                                                        }} /><LessonControlButtons />
                                                                        <div className="description-margin"><span className="description1 fw-normal fs-6">Multiple Modules </span>|
                                                                              <span className="description2 fw-bold fs-6"> Not available until </span>
                                                                              <span className="description2 fs-6">May 6 at 12:00am | </span>
                                                                              <span className="description2 fw-bold fs-6">Due </span>
                                                                              <span className="description2 fs-6">May 13 at 11:59pm | {assignment.points} pts</span>

                                                                        </div> </div>
                                                            </ListGroupItem>
                                                      ))}




                                          </ListGroup>
                                    </ListGroupItem>
                              </ListGroup>
                        </div>

                  </Row>
                  <DeleteModal show={show} handleClose={handleClose} dialogTitle="Are you sure you want to delete the assignment?"
                        deleteAssignment={() => onRemoveAssignment(assignmentId)} />
            </Container>

      );
}
