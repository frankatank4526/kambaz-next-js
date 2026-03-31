"use client"
import { useParams } from "next/navigation";
import { Button, Col, Container, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
//import { assignments } from "@/app/(kambaz)/database";
import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";
import { addAssignment, updateAssignment, setAssignments } from "../reducer";
import Link from "next/link";
import * as client from "../../../client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();

    const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
    const assignment = assignments.find((assignment: any) => assignment.course === cid && assignment._id === aid);
    const dispatch = useDispatch();
    const [description, setDescription] = useState(assignment ? assignment.description : "");
    const [title, setTitle] = useState(assignment ? assignment.title : "");
    const [points, setPoints] = useState(assignment ? assignment.points : 0);
    const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "");
    const [availDate, setAvailDate] = useState(assignment ? assignment.availDate : "");
    const onCreateAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = { description: description, title: title, points: points, dueDate: dueDate, availDate: availDate, course: cid };
        const assignment = await client.createAssignmentForCourse(cid as string, newAssignment);
        dispatch(setAssignments([...assignments, assignment]));
    };
    const onUpdateAssignment = async (assignment: any) => {
        await client.updateAssignment(assignment);
        const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a);
        dispatch(setAssignments(newAssignments));
    };
    return (


        <Form >
            <Row className="justify-content-md-center ">
                <Col>
                    <FormLabel>Assignment Name</FormLabel>
                    <FormControl onChange={(e) => setTitle(e.target.value)} className="mb-3" defaultValue={assignment?.title} />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>

                    <FormControl onChange={(e) => setDescription(e.target.value)} className="mb-3" as="textarea" rows={5} placeholder={assignment?.description} />
                </Col>

            </Row>
            <Form.Group as={Row} >
                <FormLabel sm="8" className="text-sm-end" column htmlFor="points">Points</FormLabel>
                <Col>
                    <FormControl onChange={(e) => setPoints(parseInt(e.target.value))} id="points" className="mb-3 input-field" type="number" defaultValue={assignment?.points} />
                </Col>
            </Form.Group>
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
                    <FormControl /></Col>

            </Row>
            <Row>
                <Col>
                    <FormLabel>Due</FormLabel>
                    <FormControl onChange={(e) => setDueDate(e.target.value)} className="mb-3" type="date" defaultValue={assignment?.dueDate} /></Col>
            </Row>
            <Row>
                <Col>
                    <FormLabel>Available from</FormLabel>
                    <FormControl onChange={(e) => setAvailDate(e.target.value)} className="mb-3" type="date" defaultValue={assignment?.availDate} /></Col>
            </Row>
            <Row>
                <Col>
                    <FormLabel>Until</FormLabel>
                    <FormControl className="mb-3" type="date" /></Col>
            </Row>

            <Row>
                <Col>
                    <Link href="../assignments">
                        <Button onClick={() => assignment ? onUpdateAssignment({ ...assignment, title: title, description: description, course: cid, points: points, dueDate: dueDate, availDate: availDate }) :
                           onCreateAssignmentForCourse()}
                            href="../assignments" variant="danger" className="me-1 float-end" >
                            Save
                        </Button></Link>
                    <Link href="../assignments">
                        <Button className="btn-secondary me-2 float-end" >

                            Cancel
                        </Button>
                    </Link></Col>
            </Row>

        </Form>
    );
}
