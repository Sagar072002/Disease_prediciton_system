import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const Userprofile = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    age: Yup.number().required('Age is required'),
    gender: Yup.string().required('Gender is required'),
  });

  return (
    <div className='prof userprofile'>
      <div className="profile-div">
        <h2>Edit Profile</h2>
        {/* Wrap the form with Formik and utilize its props */}
        <Formik
          initialValues={{
            name: '',
            email: '',
            phoneNumber: '',
            age: '',
            gender: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission here
            console.log(values);
            // After form submission logic, you can reset form or perform other actions
            setSubmitting(false);
          }}
        >
          {/* Form content */}
          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="profile-container">
                {/* Input field for name */}
                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                {/* Input field for email */}
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
                {/* Input field for phone number */}
                <div className="input-field">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber && <div className="form-error">{errors.phoneNumber}</div>}
                </div>
                {/* Input field for age */}
                <div className="input-field">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    value={values.age}
                  />
                  {errors.age && <div className="form-error">{errors.age}</div>}
                </div>
                {/* Input field for gender */}
                <div className="input-field">
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    onChange={handleChange}
                    value={values.gender}
                  />
                  {errors.gender && <div className="form-error">{errors.gender}</div>}
                </div>
              </div>
              {/* Buttons for form submission */}
              <div>
                <button type="submit" className='submitbutton'>Submit</button>
                <button type="button" className='cancelbutton'>Cancel</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Userprofile;
