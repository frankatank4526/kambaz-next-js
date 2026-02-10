import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td></tr>
                    {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Naruto</span>{" "}
                        <span className="wd-last-name">Uzumaki</span></td>
                        <td className="wd-login-id">0011223344</td>
                        <td className="wd-section">C500</td>
                        <td className="wd-role">TEACHER</td>
                        <td className="wd-last-activity">2024-09-01</td>
                        <td className="wd-total-activity">4:10:33</td></tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Monkey</span>{" "}
                        <span className="wd-last-name">Luffy</span></td>
                        <td className="wd-login-id">99223344</td>
                        <td className="wd-section">P101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2026-01-01</td>
                        <td className="wd-total-activity">01:02:32</td></tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Doom</span>{" "}
                        <span className="wd-last-name">Guy</span></td>
                        <td className="wd-login-id">00022223333</td>
                        <td className="wd-section">D600</td>
                        <td className="wd-role">SLAYER</td>
                        <td className="wd-last-activity">2025-10-15</td>
                        <td className="wd-total-activity">100:34:31</td></tr>
                </tbody>
            </Table>
        </div>);
}