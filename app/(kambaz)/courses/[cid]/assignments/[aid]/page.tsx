export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"> <h2>Assignment Name </h2></label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={30} rows={10}>Description of assignment</textarea>
            <br /> <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100} />
                   <br/> <br/> </td>
                </tr>
                <tr>
                    <label htmlFor="wd-select-assignment-type">Assignment Group </label>
                    <select id="wd-select-assignment-type">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS"> EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select> <br/> <br/> 
                </tr>
                <tr>
                    <label htmlFor="wd-select-display-type">Display Grade as </label>
                    <select id="wd-select-display-type">
                        <option selected value="Percentage">Percentage</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select> <br/> <br/> 
                </tr>
                <tr>
                    <label htmlFor="wd-select-submission-type">Submission Type </label>
                    <select id="wd-select-submission-type">
                        <option selected value="Online">Online</option>
                        <option value="In-person">In-person</option>
                    </select> <br/> <br/> 
                
                </tr>
                <tr>
                    Online Entry Options <br/>
                    <input type="checkbox" name="entry-options" id="entry-checkbox-text" />
                    <label htmlFor="entry-checkbox-text">Text Entry</label><br />

                    <input type="checkbox" name="entry-options" id="entry-checkbox-url" />
                    <label htmlFor="entry-checkbox-url">Website URL</label><br />

                    <input type="checkbox" name="entry-options" id="entry-checkbox-media" />
                    <label htmlFor="entry-checkbox-media">Media Recordings</label><br />

                    <input type="checkbox" name="entry-options" id="entry-checkbox-annotation" />
                    <label htmlFor="entry-checkbox-annotation">Student Annotation</label>

                    <input type="checkbox" name="entry-options" id="entry-checkbox-file" />
                    <label htmlFor="entry-checkbox-file">File Uploads</label> 
                </tr> <br/> <br/> 
                <tr>
                    Assign to <br/> 
                    <input id="entry-assign-to" defaultValue="Everyone" /><br /><br />
                </tr>
                <tr>
                    <label htmlFor="due-date">Due </label><br/>
                    <input type="date"
                        defaultValue="2000-01-21"
                        id="due-date" /><br />
                </tr>
                <tr>
                    <td>
                    <label htmlFor="due-date">Available From </label><br/>
                    <input type="date"
                        defaultValue="2000-01-21"
                        id="due-date" />
                        </td>
                        <td> <label htmlFor="due-date">Until </label> <br/>
                    <input type="date"
                        defaultValue="2000-01-21"
                        id="due-date" /></td>
                </tr>

                
            </table>
            <button>Cancel</button> <button> Save</button>
        </div>
    );
}
