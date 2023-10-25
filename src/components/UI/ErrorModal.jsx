import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
