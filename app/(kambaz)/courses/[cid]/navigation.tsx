"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({cid}: {cid: string }) {
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const pathName = usePathname();
  
  const displayLink = (link: string) => {
    return (
    <Link href = {`/courses/${cid}/${link.toLowerCase()}${link.toLowerCase()==="people" ? "/table" : ""}`} id="wd-course-modules-link" 
    className={`list-group-item ${pathName.includes(link.toLowerCase()) ? "active" : "text-danger"} border-0`}>
      {link}
    </Link>
    );
  };
  return (

    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => displayLink(link))}
    </div>
  );
}

