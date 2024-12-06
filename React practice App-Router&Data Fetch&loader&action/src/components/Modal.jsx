import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function onClose() {
    navigate("/");
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open={true} className={classes.modal} onClick={stopPropagation}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
