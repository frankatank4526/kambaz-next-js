import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../database";
import { v4 as uuidv4 } from "uuid";

/* Pasting here for convenience
const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
*/

const initialState = {
    assignments: assignments


};
/*
Assignment fields:
- _id string
- title string
- course string
- description string
- points number
- dueDate Date
- availDate Date
*/
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // note: dereferencing *action*, renaming payload as assignment
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availDate: assignment.availDate
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        /*
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        }*/
    }
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;