import logo from './logo.svg';
import './App.css';
import Modal1 from './Modal/Xmodal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form2 from './Form1/Form';
import { useState } from 'react';

function App() {
  
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div>
            <Modal1 onOpenModal={handleOpenModal} />
            {isModalOpen && <Form2  onCloseModal={handleCloseModal} />}
        </div>
    );

}

export default App;
