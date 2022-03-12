import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay: React.FC = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalContainer = document.getElementById("overlays")!;

const Modal: React.FC<{}> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalContainer)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalContainer
      )}
    </Fragment>
  );
};

export default Modal;
