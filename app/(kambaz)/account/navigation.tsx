"use client"
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const links = currentUser ? ["profile"] : ["signin", "signup"];
    const pathname = usePathname();
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

            <Nav variant="pills">
                {links.map((link) => (
                    <NavItem key={link}>
                        <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
                            {link} </NavLink> </NavItem>
                ))}
                {currentUser && currentUser.role === "ADMIN" && (
                    <NavLink as={Link} href={`/account/users`} active={pathname.endsWith('users')}> Users </NavLink>)}
            </Nav>
            {/* 
            <Link href="signin" id="signin-link" className="list-group-item active border-0"> Signin </Link> <br />
            <Link href="signup" id="signup-link" className="list-group-item text-danger border-0"> Signup </Link> <br />
            <Link href="profile" id="profile-link" className="list-group-item text-danger border-0"> Profile </Link> <br />
            */}

        </div>
    );
}
