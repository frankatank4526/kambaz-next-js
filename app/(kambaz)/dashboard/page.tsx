import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
   <div id="wd-dashboard-courses">
    <div className="wd-dashboard-course">
     <Link href="/courses/1234" className="wd-dashboard-course-link">
      <Image src="/images/course1.jpg" width={200} height={150} alt="Course 1" />
      <div>
       <h5> CS1234 React JS </h5>
       <p className="wd-dashboard-course-title">
        Full Stack software developer
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/CS3500" className="wd-dashboard-course-link">
      <Image src="/images/course2.jpg" width={200} height={150} alt="Course 2" />
      <div>
       <h5> CS3500 Object Oriented Programming </h5>
       <p className="wd-dashboard-course-title">
        Object Oriented Programming
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/SCI1500" className="wd-dashboard-course-link">
      <Image src="/images/course3.jpg" width={200} height={150} alt="Course 3" />
      <div>
       <h5> SCI1500 Chemistry </h5>
       <p className="wd-dashboard-course-title">
        Chemistry Fundamentals
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/CS4000" className="wd-dashboard-course-link">
      <Image src="/images/course4.jpg" width={200} height={150} alt="Course 4" />
      <div>
       <h5> CS4000 Artificial Intelligence </h5>
       <p className="wd-dashboard-course-title">
        Machine Learning and AI
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/ENG2000" className="wd-dashboard-course-link">
      <Image src="/images/course5.jpg" width={200} height={150} alt="Course 5" />
      <div>
       <h5> ENG2000 Professional Writing </h5>
       <p className="wd-dashboard-course-title">
        Professional Writing
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/BS2500" className="wd-dashboard-course-link">
      <Image src="/images/course6.jpg" width={200} height={150} alt="Course 6" />
      <div>
       <h5> BS2500 Economics </h5>
       <p className="wd-dashboard-course-title">
        Basic Economics
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-course">
     <Link href="/courses/EE2800" className="wd-dashboard-course-link">
      <Image src="/images/course7.jpg" width={200} height={150} alt="Course 7" />
      <div>
       <h5> EE2800 Circuits </h5>
       <p className="wd-dashboard-course-title">
        Circuits and Signals
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    
   </div>
  </div>
);}
