
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
export default function HelloRedux() {
    /*
    As per the function's description, the "state" argument for useSelector receives the current state.
    Current state = store's state tree. The tree has values of {reducerName: stateValue}, where stateValue 
    is the result of running the reducer. 

    Here, we have no reducers, so the stateValue is returned by default. 
    */
    const { message } = useSelector((state: RootState) => state.helloReducer);
    return (

        <div id="wd-hello-redux">
            <h3>Hello Redux</h3>
            <h4>{message}</h4> <hr />
        </div>

    );
}
