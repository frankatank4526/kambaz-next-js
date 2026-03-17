"use client"
import { ReactNode, useState } from "react";
import CourseNavigation from "./navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./BreadCrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
export default function CoursesLayout(
  { children }: { children: ReactNode }) {
   const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);
 const [showNavigation, setShow] = useState(true);

 const displayNavigation = () => {
  return <CourseNavigation c_id={cid?.toString()}/>
  

 }
 //const navigationTest = <CourseNavigation c_id={cid?.toString()}/>;
  return (
    <div id="wd-courses">
        <h2 className="text-danger">
      <button id="show-navigation" style={{ background: 'none', border: 'none', color: "red" }} onClick={() => setShow(!showNavigation)}>
      <FaAlignJustify  className="me-4 fs-4 mb-1" />
      </button>
      {`${course?.name} `}
      <Breadcrumb  course={course}/> </h2> <hr /> {/*accesses .name if course exists */}
      <hr />
      <div className="d-flex">


        <div className="d-none d-md-block">{showNavigation? displayNavigation(): null} </div>
        <div className="flex-fill"> {children} </div>


      </div>
    </div>
  );
}
