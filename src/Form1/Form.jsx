// import "./App.css"

import { useState } from "react";




function Form2({onCloseModal}) {
    const [formdata,setformdata]=useState({
        username:"",
        email:"",
        phone:"",
        dob:""
    })
    const handleChange = (e) =>{
        const {id, value}=e.target;
        setformdata({...formdata,[id]:value});
    }
    const handleSubmit=(e)=>{
         e.preventDefault();

         let isValid = true; 
  
  
       if (!formdata.username) {
        alert("Please fill out this field for Username");
         isValid = false; 
       }

  
      if (!formdata.email.includes("@") || !formdata.email.includes(".")) {
         alert("Invalid email. Please check your email address.");
         isValid = false; 
         }

  
     if (formdata.phone.length !== 10 || isNaN(formdata.phone)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        isValid = false;
     }

  
      const selectedDate = new Date(formdata.dob);
      if (!formdata.dob) {
        alert("Invalid date of birth");
        isValid = false; 
      }else if (selectedDate > new Date()) {
       alert("Invalid date of birth");
        isValid = false; 
      }

 
     if (isValid) {
        alert("Form submitted successfully!");
     }
          
}
    const handleOverlayClick = (e) => {
        if (e.target.className.includes("modal")) {
          onCloseModal(); 
        }
      };
    return (
        <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit} noValidate>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              value={formdata.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
      
            <label>Email Address:</label>
            <input
              type="email"
              id="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
      
            <label>Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={formdata.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
      
            <label>Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={formdata.dob}
              onChange={handleChange}
            />
      
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default Form2;
