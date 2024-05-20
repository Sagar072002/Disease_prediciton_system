import React from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import doctorService from '../../services/doc_service'

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  price: "",
  qualifications: "",
  specialization: "",
  timeSlots: "",
  image: "",
  address: "",
  about: ""
};

const doctorSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(5, 'Name must be at least 5 characters')
    .max(20, 'Name must be at most 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Price is required'),
  qualifications: Yup.string().required('Qualifications are required'),
  specialization: Yup.string().required('Specialization is required'),
  timeSlots: Yup.string().required('Time slots are required'),
  image: Yup.string(),
  address: Yup.string().required('Address is required'),
  about: Yup.string().required('Introduction is required')
});


const DRegister = () => {
  const navigate = useNavigate();

  const showToastMessage = (msg) => {
    if (msg === "success") {
      toast.success('REGISTERED SUCCESSFULLY!', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        pauseOnHover: false,
      });
    } else {
      toast.warning(msg, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: doctorSchema,
      onSubmit: async (values, actions) => {
        try {
          const data = {
            username: values.name,
            email: values.email,
            phone: values.phone,
            password1: values.password,
            password2: values.confirm_password,
            price: values.price,
            qualifications: values.qualifications,
            specialization: values.specialization,
            timeSlots: values.timeSlots,
            image: values.image,
            address: values.address,
            about: values.about
          };
          console.log("Sent:",data)
          doctorService.register(data).then(async (res)=>{
            console.log("response: ",res)
            showToastMessage("success");
          }).catch((err)=>{
            console.log("Error: ",err)
          })
          actions.resetForm();
        } catch (error) {
          showToastMessage("An error occurred. Please try again later.");
          console.error(error);
        }
      },
    });


  return (
    <>
      <ToastContainer />
      <div className="doctor-register">
        <div className="doctor-container">
          <h2>Doctor Registration</h2>
          <div className="doctor-main">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="box">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <p className="form-error">{errors.name}</p>}
                </div>
                <div className="box">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <p className="form-error">{errors.email}</p>}
                </div>
                <div className="box">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && <p className="form-error">{errors.phone}</p>}
                </div>
                <div className="box">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && <p className="form-error">{errors.password}</p>}
                </div>
                <div className="box">
                  <label htmlFor="confirm_password">Confirm password:</label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password && <p className="form-error">{errors.confirm_password}</p>}
                </div>
              </div>
              <div>
                <div className="box">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Your price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.price && touched.price && <p className="form-error">{errors.price}</p>}
                </div>
                <div className="box">
                  <label htmlFor="qualifications">Qualifications:</label>
                  <input
                    type="text"
                    id="qualifications"
                    name="qualifications"
                    placeholder="Your qualifications"
                    value={values.qualifications}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.qualifications && touched.qualifications && <p className="form-error">{errors.qualifications}</p>}
                </div>
                <div className="box">
                  <label htmlFor="specialization">Specialization:</label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    placeholder="Area of Specialization"
                    value={values.specialization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.specialization && touched.specialization && <p className="form-error">{errors.specialization}</p>}

                <div className="box">
                  <label htmlFor="timeSlots">Available Time Slots:</label>
                  <input
                    type="text"
                    id="timeSlots"
                    name="timeSlots"
                    placeholder="Time slots"
                    value={values.timeSlots}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.timeSlots && touched.timeSlots && <p className="form-error">{errors.timeSlots}</p>}
                </div>
                <div className="box">
                  <label htmlFor="image">Upload Your Image:</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(event) => setFieldValue("image", event.currentTarget.files[0])}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              </div>
              <div>
                <div className="box">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    cols="30"
                    rows="10"
                    placeholder="Your address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <p className="form-error">{errors.address}</p>}
                </div>
                <div className="box">
                  <label htmlFor="about">About you:</label>
                  <textarea
                    id="about"
                    name="about"
                    cols="30"
                    rows="10"
                    placeholder="Your Introduction"
                    value={values.about}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.about && touched.about && <p className="form-error">{errors.about}</p>}
                </div>
                <p className="signin">
                  Already an user? <Link to="/doctorlogin"><span>Sign in</span></Link>
                </p>
                <div className="box">
                  <button type="submit" disabled={isSubmitting}>Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DRegister;
