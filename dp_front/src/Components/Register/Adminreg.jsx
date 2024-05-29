import React, { useContext } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { saveToken } from '../../services/user_service.jsx';
import { SiteContext } from '../../context/siteContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import adminService from '../../services/admin_service.jsx'

const AdminReg = () => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { setUid } = useContext(SiteContext);
  const navigate = useNavigate();
  const showToastMessage = (msg) => {
    if(msg === "success"){
      toast.success('Registration Successful!', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
      });
    } else if(msg === "failed") {
      toast.warning('Registration Failed!', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  const initialValues = {
    adminname: "",
    password: "",
    confirmPassword: "",
    secretKey: ""
  };
  const registerSchema = Yup.object({
    adminname: Yup.string().min(5, 'Name must be at least 5 characters').required("Name is Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Required"),
    secretKey: Yup.string().required("Required"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        const data={
          adminname: values.adminname,
          password1: values.password,
          password2: values.confirmPassword,
          secret: values.secretKey
        }
        console.log("Register Values:", data);
        adminService.register(data).then(async (res)=>{
          console.log('Register Res:', res.data);
          showToastMessage("success");
        }).catch((err)=>{
          toast.warning('Registration error', err.response.data);
        });
        action.resetForm();
      },
    });

  return (
    <>
      <ToastContainer />
      <div className="admin-register-container">
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <h2>Admin Register</h2>
            <div className='formbox'>
              <div className="box">
                <i className="fa-solid fa-user" />
                <div>
                  <input
                    type="text"
                    placeholder="admin name"
                    autoComplete="off"
                    name="adminname"
                    id="adminname"
                    value={values.adminname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                  {errors.adminname && touched.adminname ? (
                    <p className="form-error">{errors.adminname}</p>
                  ) : null}
              </div>
              <div className="box">
                <i className="fa-solid fa-lock" />
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
              </div>
              <div className="box">
                <i className="fa-solid fa-lock" />
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="form-error">{errors.confirmPassword}</p>
                  ) : null}
              </div>
              <div className="box">
                <i className="fa-solid fa-key" />
                <div>
                  <input
                    type="text"
                    placeholder="Secret Key"
                    autoComplete="off"
                    name="secretKey"
                    id="secretKey"
                    value={values.secretKey}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                  {errors.secretKey && touched.secretKey ? (
                    <p className="form-error">{errors.secretKey}</p>
                  ) : null}
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/adminlogin">Login now</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminReg;
