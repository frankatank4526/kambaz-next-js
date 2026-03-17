"use client"
import Link from "next/link";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import UrlEncoding from "./query-parameters";
import StringStateVariables from "./StringStateVariables";
import store from "./store";
import { Provider } from "react-redux";
import { Suspense } from "react";
//import QueryCalculator from "./url-encoding/query-params/page";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <Provider store={store}>
            <div id="wd-lab4">


                <h3> Managing State in React Applications </h3>
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello} />
                <Counter />
                <BooleanStateVariables />
                <StringStateVariables />
                <DateStateVariable />
                <ObjectStateVariable />
                <ArrayStateVariable />
                <ParentStateComponent />
                {/* <QueryCalculator/> */}
                
                <UrlEncoding />
                
                <Link style={{ fontSize: "30px" }} href="/labs/lab4/redux">Redux Examples</Link> <hr />
                <Link style={{ fontSize: "30px" }} href="./lab4/react-context">React Context Examples</Link> <hr/>
                 <Link style={{ fontSize: "30px" }} href="./lab4/zustand">Zustand Examples</Link>
            </div>
        </Provider>

    );

}