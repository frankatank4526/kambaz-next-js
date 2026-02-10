import { ReactNode } from "react";
import KambazNavigation from "./navigation";
import "./kambaz-styles.css"
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex"> <div className="me-auto"> <KambazNavigation /> </div>
        <div className="wd-main-content-offset p-3 flex-fill"> {children}           </div>
      </div>
    </div>
  );
}
