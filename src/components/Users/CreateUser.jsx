import styles from "./CreateUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import React from "react";


import { useState } from "react";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Error",
        message: "Please fill valid Name and Age",  
      })
      // if name or age is empty
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Error",
        message: "Please fill valid Age",  
      })
      // + Проверка на строку
      return;
    }
    props.onCreateUser(inputName, inputAge);
    setInputAge("");
    setInputName("");
  };
  const errorHandler = () => {
    setError(false);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler} action="">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}; 

export default CreateUser;
