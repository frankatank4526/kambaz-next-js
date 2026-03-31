import React, { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module", description: "Connecting client and server components", course: "CS4550"
    });

    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
    return (
        <div id="wd-working-with-objects" >
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br />
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name </a>
            <FormControl className="w-50" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <br />
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description?newDescription=${module.description}`}>
                Update Module Description </a>
            <FormControl as="textarea" rows={3} className="w-50" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
                    <br/>
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Assignment Score </a>
            <FormControl type="number" className="w-50" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <br />
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Assignment Completedness </a>
            <FormCheck label="Completed" type="checkbox" id="wd-assignment-completed"
                checked={assignment.completed} onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })} />
            <hr />

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary mb-2"
                href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a> <br />
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={MODULE_API_URL}>
                Get Module
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary mb-2"
                href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Title
            </a> <br />
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a><hr />
        </div>
    );
}
