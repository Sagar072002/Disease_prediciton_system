import React, { useState, useEffect } from "react";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import userService from "../../services/user_service";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

const Docprofile = () => {
  const [activeMenu, setActiveMenu] = useState("Edit Profile");
  const [searchQuery, setSearchQuery] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then((res) => {
        console.log("Res:", res.data);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  useEffect(() => {
    const filtered = userList.filter(
      (user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setFilteredUsers(filtered); // Not used in this snippet
  }, [searchQuery, userList]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    price: Yup.number().required("Price is required"),
    specialisation: Yup.string().required("Specialisation is required"),
    qualifications: Yup.array().of(Yup.string().required("Qualification is required")),
    timeSlot: Yup.array().of(Yup.string().required("Time slot is required")),
    address: Yup.string().required("Address is required"),
    introduction: Yup.string().required("Introduction is required")
  });

  return (
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
                name: "",
                email: "",
                phoneNumber: "",
                price: "",
                specialisation: "",
                qualifications: [""],
                timeSlot: [""],
                address: "",
                introduction: ""
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form Values:", values);
                // Handle form submission
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
  );
};

export default Docprofile;
