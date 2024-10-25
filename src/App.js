import React, { useState } from 'react';
import './App.css';
import Bg_video from './assets/background.mp4';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: 'math',
    resume: null,
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
   
    
  };

  const handleReset = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      gender: '',
      subject: 'math',
      resume: null,
      about: '',
    });
  };

  return (
    <div className="app">
      <video className="bg-video" autoPlay muted loop>
        <source src={Bg_video} type="video/mp4" />
      </video>

      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' placeholder='Enter First Name' name='firstname' value={formData.firstname} onChange={handleChange} />

          <label htmlFor='lastname'>Last Name</label>
          <input type='text' placeholder='Enter Last Name' name='lastname' value={formData.lastname} onChange={handleChange} />

          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' name='email' value={formData.email} onChange={handleChange} />

          <label htmlFor='contact'>Contact</label>
          <input type='text' placeholder='Enter Phone #' name='contact' value={formData.contact} onChange={handleChange} />

          <label htmlFor='gender'>Gender</label>
          <div onChange={handleChange}>
            <input type='radio' id='male' name='gender' value='male' checked={formData.gender === 'male'} />
            <label htmlFor='male'>Male</label>
            
            <input type='radio' id='female' name='gender' value='female' checked={formData.gender === 'female'} />
            <label htmlFor='female'>Female</label>
            
            <input type='radio' id='animal' name='gender' value='animal' checked={formData.gender === 'animal'} />
            <label htmlFor='animal'>Animal</label>
          </div>

          <label htmlFor="subject">Subject</label>
          <select name='subject' id='subject' value={formData.subject} onChange={handleChange}>
            <option value="math">Math</option>
            <option value="physic">Physic</option>
            <option value="english">English</option>
          </select>

          <label htmlFor="resume">Resume</label>
          <input type="file" name='resume' onChange={handleFileChange} />

          <label htmlFor="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" value={formData.about} onChange={handleChange} placeholder='Enter Description'></textarea>

          <div className="form-buttons">
            <button type="button" onClick={handleReset}>Reset</button>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
