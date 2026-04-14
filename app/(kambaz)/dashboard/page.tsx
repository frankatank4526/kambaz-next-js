"use client"
import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import * as client from "../courses/client";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { enrollments } from "../database";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const router = useRouter();
    const [showAllCourses, setShowCourses] = useState(false);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState([{ _id: "default" }]);

    const fetchEnrolledCourses = async () => {
        setEnrolledCourses(await client.findMyCourses());

    }
    const fetchCourses = async () => {
        try {
            if (showAllCourses) {
                const courses = await client.fetchAllCourses();
                dispatch(setCourses(courses));
                return;
            }
            const courses = await client.findMyCourses();
            dispatch(setCourses(courses));


        } catch (error) {
            console.error(error);
            dispatch(setCourses([]));
        }
    };
    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([...courses, newCourse]));
    };

    const onDeleteCourse = async (courseId: string) => {
        const status = await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    };
    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })));
    };


    useEffect(() => {
        fetchCourses();
        fetchEnrolledCourses();
    }, [currentUser, showAllCourses]);




    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button className="btn btn-primary float-end"
                    id="wd-enrollments"
                    onClick={() => { setShowCourses(!showAllCourses) }} > Enrollments </button>
            </h1>

            <hr />
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={onAddNewCourse} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={onUpdateCourse} id="wd-update-course-click">
                    Update </button>
            </h5>
            <br />
            <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link href={`/courses/${course._id}/home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        try {
                                            if (await client.checkEnrollment(course._id) === 1) {
                                                router.push(`/courses/${course._id}/home`);

                                            }
                                        }
                                        catch (error: any) {
                                            if (error.response?.status === 401) {
                                                router.push("/login"); // session user was lost/unavailable

                                            }
                                        }

                                    }
                                    } >
                                    <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </CardText>
                                        <Button variant="primary"> Go </Button>

                                        <button onClick={async (event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            if (enrolledCourses.some((enrolledCourse) => enrolledCourse._id === course._id)) {
                                                await client.unenrollFromCourse("current", course._id);
                                                setEnrolledCourses(enrolledCourses.filter((enrolledCourse) => enrolledCourse._id !== course._id));
                                            } else {
                                                await client.enrollIntoCourse("current", course._id);
                                                setEnrolledCourses([...enrolledCourses, course]);
                                            }

                                        }} className={`btn btn-${enrolledCourses
                                            .some((enrolledCourse) => enrolledCourse._id === course._id) ? "danger" : "success"} mb-1 ms-3 float-end`}
                                            id="wd-enroll-course-click">
                                            {`${enrolledCourses.some((enrolledCourse) =>
                                                enrolledCourse._id === course._id
                                            ) ? "Unenroll" : "Enroll"}`}
                                        </button>
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            onDeleteCourse(course._id);
                                        }} className="btn btn-danger  float-end"
                                            id="wd-delete-course-click">
                                            Delete
                                        </button>
                                        <button id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning mt-2 float-end" >
                                            Edit
                                        </button>


                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>);
}