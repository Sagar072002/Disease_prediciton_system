import React from 'react';
import './Login.css'
import img from '../../assets/login.gif';
import { useFormik } from "formik";

import {loginschema} from '../Login/Loginschema.jsx'



const Login = () => {
  const initialValues = {
    name: "",
    password: ""
    };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginschema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  // console.log(errors);
  return (
    <div className="login-container">
  <div className="login-form">
    <div className="login-left">
    <form onSubmit={handleSubmit}>

      <h2>Login form</h2>
      <div className="box">
        <i className="fa-solid fa-user" />
        <div>
        <input  type="text"  placeholder="Username"  
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
        <i className="fa-solid fa-lock" />
        <div>
        <input  type="password"
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
      <a href="" className='forgot'>Forgot Password?</a> <br />
      <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="#">Sign up now</a>{" "}
      </p>
      <p className="ortext">OR</p>
      <div className="loginbtn">
        <button type="submit" className="google">
          <i className="fa-brands fa-google" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="facebook">
          <i className="fa-brands fa-facebook-f" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="twitter">
          <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="insta">
          <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }} />
        </button>
      </div>
    </div>
    <div className="login-right">
      <img src={img} alt="" />
    </div>
  </div>
</div>

  )
}

export default Login




