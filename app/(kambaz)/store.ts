import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/reducer";
import modulesReducer from "./courses/[cid]/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentReducer from "./courses/[cid]/assignments/reducer";
import enrollmentsReducer from "./courses/enrollments/reducer";
const store = configureStore({
 reducer: { enrollmentsReducer, coursesReducer, modulesReducer, accountReducer,  assignmentReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export default store;