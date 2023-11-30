import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/login.gif';
import { useFormik } from "formik";
import userService from '../../services/user_service.jsx'
import {loginschema} from '../Login/Loginschema.jsx'
import { SiteContext } from '../../context/siteContext.jsx';


const Login = () => {
  const { setUid } = useContext(SiteContext)
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: ""
    };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginschema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log("Login Values:", values);
        userService.login(values).then((res)=>{
          console.log('Login Res:', res.data);
          setUid(res.data);
        }).catch((err)=>{console.log('Login Err:',err.response.data);})
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
                      name="username"
                      id="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
        {errors.username && touched.username ? (
                      <p className="form-error">{errors.username}</p>
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
        Don't have an account? <Link to="/register">Sign up now</Link>{" "}
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




