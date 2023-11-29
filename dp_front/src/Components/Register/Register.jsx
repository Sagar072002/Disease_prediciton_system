import React from 'react';
import './Register.css';
import img from '../../assets/register.gif';
import { useFormik } from "formik";

import {registerschema} from '../Register/Registerschema.jsx'

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone:""
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerschema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );
  return (
    <div className="register-container">
  <div className="register-form">
    <div className="register-left">
  <form onSubmit={handleSubmit}>
      <h2>Registration form</h2>
      <div className="box">
        <i className="fa-solid fa-user" />
        <div>
        <input type="text"  placeholder="Your Name"  
                      autoComplete="off"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
        {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                    </div>
      </div>
      <div className="box">
        <i className="fa-solid fa-envelope" />
        <div>
        <input  type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                        {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                    </div>
      </div>
      <div className="box">
        <i className="fa-solid fa-phone" />
        <div>
        <input type="number"
                      autoComplete="off"
                      name="phone"
                      id="phone"
                      placeholder="Phone number "
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                        {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
                    </div>
      </div>
      <div className="box">
        <i className="fa-solid fa-lock" />
        <div>
        <input type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null} 
</div>
      </div>
      <div className="box lastbox">
        <i className="fa-solid fa-lock" />
        <div>
        <input type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null} 
                    </div>
      </div>
      <button type="submit"> Register</button>
      <p>
        Already an user? <a href="register.html">Sign in now</a>{" "}
      </p>
    </form>
    </div>
    <div className="register-right">
      <img src={img} alt="" />
    </div>
  </div>
</div>

  )
}

export default Register