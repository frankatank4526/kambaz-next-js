"use client"
import { ReactNode } from "react";
import KambazNavigation from "./navigation";
import Session from "./account/Session";
import "./kambaz-styles.css"
import store from "./store";
import { Provider } from "react-redux";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
    <div id="wd-kambaz">
      <div className="d-flex"> 
        <div className="me-auto"> <KambazNavigation /> </div>
        <div className="wd-main-content-offset p-3 flex-fill"> {children}           </div>
      </div>
    </div>
    </Session>
    </Provider>
  );
}
