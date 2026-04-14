import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

type Enrollment = {
  
    _id: string,
    course: string,
    user: string,
    grade: number,
    letterGrade: string,
    enrollmentDate: Date,
    status: string,

}
  type Enrollments = Enrollment[];
  type EnrollmentsState = {
    enrollments: Enrollments | null;

  }
const initialState: EnrollmentsState= {
 enrollments: null
};
const enrollmentsSlice = createSlice({
 name: "enrollments",
 initialState,
 reducers: {
   addNewEnrollment: (state, { payload: enrollment }) => {
     const newEnrollment = { ...enrollment, _id: uuidv4() };
     state.enrollments = [...state.enrollments!, newEnrollment] as any;
   },
   deleteEnrollment: (state, {payload: data}) => {
      const {courseId, userId} = data
     state.enrollments = state.enrollments!.filter(
       (enrollment: any) => !(enrollment.course === courseId && enrollment.user === userId)
     );
   },
   setEnrollments: (state, { payload: enrollments }) => {
     state.enrollments = enrollments;
   },
 },
});
export const { addNewEnrollment, deleteEnrollment, setEnrollments } =
 enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;