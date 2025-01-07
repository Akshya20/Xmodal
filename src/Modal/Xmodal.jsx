import Form2 from "../Form1/Form";
import { useState } from "react";
// import "./Xmodal.module.css";
import {Link} from "react-router-dom";



function Modal1({ onOpenModal }) {


    return (
        <div className="modal1-container">
            <h1>User Details Modal</h1>
            <button onClick={onOpenModal} className="open-modal-button">
                Open Form
            </button>
        </div>
    );
}

export default Modal1;