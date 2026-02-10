"use client"
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./kambaz-styles.css"
import { MdAllInbox, MdOutlineLibraryBooks } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
export default function KambazNavigation() {
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
      id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
        target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.svg" width="75px" alt="Northeastern University" />
      </ListGroupItem><br />
      <ListGroupItem  className="border-0 bg-black text-center">
        <Link href="/account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem><br />
      <ListGroupItem  className="border-0 bg-white text-center" >
        <Link href="/dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard  className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem  className="border-0 bg-black text-center" >
        <Link href="/courses" id="wd-courses-link" className="text-white text-decoration-none">
          <MdOutlineLibraryBooks className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <ListGroupItem  className="border-0 bg-black text-center" >
        <Link href="/calendar" id="wd-dashboard-link" className="text-white text-decoration-none">
          <FaCalendarAlt className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem  className="border-0 bg-black text-center" >
        <Link href="/inbox" id="wd-dashboard-link" className="text-white text-decoration-none">
          <MdAllInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem  className="border-0 bg-black text-center" >
        <Link href="/labs" id="wd-dashboard-link" className="text-white text-decoration-none">
          <SlChemistry className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>

    </ListGroup>
  );
}
