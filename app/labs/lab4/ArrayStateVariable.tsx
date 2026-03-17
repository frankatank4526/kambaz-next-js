"use client"
import { useState } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "./styles.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  const { todos } = useSelector((state: RootState) => state.todosReducer);

  return (
    <div >
      <div id="wd-array-state-variables" >
        <Container id="array-buttons">
          <h2>Array State Variable</h2>
          <Button type="button" variant="success" onClick={addElement}>Add Element</Button>
          <ListGroup style={{ display: "flex", width: "300px" }}>
            {array.map((item, index) => (
              <ListGroupItem key={index}> {item}
                <Button style={{ float: "right" }} type="button" variant="danger" onClick={() => deleteElement(index)}>
                  Delete</Button>
              </ListGroupItem>))}
          </ListGroup>
        </Container></div><hr />
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />

    </div>
  );
}