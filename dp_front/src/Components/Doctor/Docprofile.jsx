import React, { useState, useEffect, useContext } from "react";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import userService from "../../services/user_service";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import doctorService from "../../services/doc_service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiteContext } from "../../context/siteContext";

const Docprofile = () => {

  const { uid } = useContext(SiteContext)
  const [doc, setDoc] = useState({})
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [activeMenu, setActiveMenu] = useState("Edit Profile");

  useEffect(()=>{
    doctorService.get(uid).then((res)=>{
      console.log("Res:",res)
      setDoc(res.data)
    }).catch((err)=>{
      console.log("Error :", err)
    })
  },[])

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email("Invalid email address"),
    phoneNumber: Yup.string(),
    price: Yup.number(),
    specialisation: Yup.string(),
    qualifications: Yup.array().of(Yup.string()),
    timeSlot: Yup.array().of(Yup.string()),
    address: Yup.string(),
    introduction: Yup.string()
  });
  const showToastMessage =(msg) => {
    // console.log("called ",msg)
    if(msg === "success"){
      toast.success('UPDATE SUCCESSFUL !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    else if(msg === "failed"){
      toast.warning('Failed to update !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    };

  if(!doc) return <div>Loading....</div>

  return (
    <>
    <ToastContainer/>
    <div className="admin admindct">
      <div className="sidebar">
        {/* <div className="logo">
          <img src={img1} alt="Logo" />
          <p>DISPRED</p>
        </div> */}
        <div className="image">
          <img src={img} alt="Profile" />
          <p>Sagar Negi</p>
        </div>
        <div className="det">
          <Link to="/doctor">
            <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => setActiveMenu("Appointments")}>
              Appointments
            </p>
          </Link>
          <Link to="/doctorreviews">
            <p className={activeMenu === "Reviews" ? "active" : ""} onClick={() => setActiveMenu("Reviews")}>
              Reviews
            </p>
          </Link>
          <Link to="/docprofile">
            <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => setActiveMenu("Edit Profile")}>
              Edit Profile
            </p>
          </Link>
        </div>
      </div>
      <div className="rightside">
        <div className="prof">
          <div className="profile-div dctrprof">
            <h2>Edit Profile</h2>
            <Formik
              initialValues={{
                name: doc.name || "",
                email: doc.email || "",
                phoneNumber: doc.phone || "",
                price: doc.price || "",
                specialisation: doc.specialization || "",
                qualifications: doc.qualifications || [""],
                timeSlot: doc.timeSlots || [""],
                address: doc.address || "",
                introduction: doc.about || ""
              }}
              enableReinitialize= "true"
              validationSchema={validationSchema}
              onSubmit={(values, action) => {
                const data={
                  name:values.name,
                  email:values.email,
                  phone:values.phoneNumber,
                  price:values.price,
                  specialization:values.specialisation,
                  qualifications:values.qualifications,
                  timeSlots:values.timeSlot,
                  address:values.address,
                  about:values.introduction,
                }
                console.log(data);
                doctorService.update(data).then((res)=>{
                  console.log("Res: ",res)
                  showToastMessage("success");
                  delay(1000)
                  window.location.reload()
                }).catch((err)=>{
                  console.log("Error: ",err)
                })
                action.resetForm();
              }}
              >
              {formik => (
                <form onSubmit={formik.handleSubmit} className="profiles">
                  <div className="adminform">
                  <div className="profile-container">
                    <div className="input-field">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="form-error">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="input-field">
  <label htmlFor="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}
    />
  {formik.touched.email && formik.errors.email ? (
    <div className="form-error">{formik.errors.email}</div>
  ) : null}
</div>
<div className="input-field">
  <label htmlFor="phoneNumber">Phone Number</label>
  <input
    type="text"
    name="phoneNumber"
    id="phoneNumber"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.phoneNumber}
    />
  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
    <div className="form-error">{formik.errors.phoneNumber}</div>
  ) : null}
</div>
<div className="input-field">
  <label htmlFor="price">Price</label>
  <input
    type="number"
    name="price"
    id="price"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.price}
    />
  {formik.touched.price && formik.errors.price ? (
    <div className="form-error">{formik.errors.price}</div>
  ) : null}
</div>
<div className="input-field">
  <label htmlFor="specialisation">Specialisation</label>
  <input
    type="text"
    name="specialisation"
    id="specialisation"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.specialisation}
    />
  {formik.touched.specialisation && formik.errors.specialisation ? (
    <div className="form-error">{formik.errors.specialisation}</div>
  ) : null}
</div>
                  </div>
                  <div className="profile-container">
                    <FieldArray name="qualifications">
                      {({ push, remove }) => (
                        <>
                          <div className="input-field">
                            <label>Qualifications</label>
                            {formik.values.qualifications.map((qualification, index) => (
                              <div key={index}>
                                <input
                                  type="text"
                                  name={`qualifications[${index}]`}
                                  value={qualification}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  />
                                {formik.touched.qualifications && formik.errors.qualifications && formik.errors.qualifications[index] ? (
                                  <div className="form-error">{formik.errors.qualifications[index]}</div>
                                ) : null}
                                <button type="button" className="push" onClick={() => remove(index)}>-</button>
                                <button type="button" className="push" onClick={() => push('')}>+</button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </FieldArray>
                    <FieldArray name="timeSlot">
                      {({ push, remove }) => (
                        <>
                          <div className="input-field">
                            <label>Time Slot</label>
                            {formik.values.timeSlot.map((slot, index) => (
                              <div key={index}>
                                <input
                                  type="text"
                                  name={`timeSlot[${index}]`}
                                  value={slot}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  />
                                {formik.touched.timeSlot && formik.errors.timeSlot && formik.errors.timeSlot[index] ? (
                                  <div className="form-error">{formik.errors.timeSlot[index]}</div>
                                ) : null}
                                <button type="button" className="push" onClick={() => remove(index)}>-</button>
                                <button type="button" className="push" onClick={() => push('')}>+</button>
                              </div>
                            ))}
                          </div>
                          </>
                      )}
                    </FieldArray>
                    <div className="input-field">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="form-error">{formik.errors.address}</div>
                      ) : null}
                    </div>
                    <div className="input-field">
                      <label htmlFor="introduction">Introduction</label>
                      <input
                        type="text"
                        name="introduction"
                        id="introduction"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.introduction}
                        />
                      {formik.touched.introduction && formik.errors.introduction ? (
                        <div className="form-error">{formik.errors.introduction}</div>
                      ) : null}
                    </div>
                  </div>
                  </div>
                  <div>
                    <button type="submit" className="submitbutton">Submit</button>
                    <button type="button" className="cancelbutton" onClick={formik.handleReset}>Cancel</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Docprofile;
