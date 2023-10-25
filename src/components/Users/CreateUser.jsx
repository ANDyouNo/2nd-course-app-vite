import styles from "./CreateUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import React, { useRef } from "react";

import { useState } from "react";

const CreateUser = (props) => {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);


  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    const userInputName = inputNameRef.current.value;
    const userInputAge = inputAgeRef.current.value;
    if (userInputName.trim().length === 0 || userInputAge.trim().length === 0) {
      setError({
        title: "Error",
        message: "Please fill valid Name and Age",
      });
      // if name or age is empty
      return;
    }
    if (+userInputAge < 1) {
      setError({
        title: "Error",
        message: "Please fill valid Age",
      });
      // + Проверка на строку
      return;
    }
    props.onCreateUser(userInputName, userInputAge);
    inputNameRef.current.value = ''
    inputAgeRef.current.value = ''
  };
  const errorHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler} action="">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={inputNameRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={inputAgeRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default CreateUser;
