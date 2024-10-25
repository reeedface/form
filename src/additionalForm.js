import React from 'react';
import { useLocation } from 'react-router-dom';

function AdditionalForm() {
  const location = useLocation();
  const { formData } = location.state || { formData: {} }; // Get form data from the state

  return (
    <div className="container">
      <h1>Collected Data</h1>
      <h2>First Name: {formData.firstname}</h2>
      <h2>Last Name: {formData.lastname}</h2>
      <h2>Email: {formData.email}</h2>
      <h2>Contact: {formData.contact}</h2>
      <h2>Gender: {formData.gender}</h2>
      <h2>Subject: {formData.subject}</h2>
      <h2>About: {formData.about}</h2>
      {formData.resume && <h2>Resume: {formData.resume.name}</h2>}
    </div>
  );
}

export default AdditionalForm;
