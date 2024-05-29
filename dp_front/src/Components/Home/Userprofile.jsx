import { Formik } from 'formik';
import * as Yup from 'yup';
import userService from '../../services/user_service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userprofile = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Invalid email'),
    phoneNumber: Yup.number(),
    age: Yup.number(),
    gender: Yup.string()
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

  return (
    <>
    <ToastContainer/>
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
          onSubmit={(values,action ) => {
            const data={
              username:values.name,
              email:values.email,
              phone:values.phoneNumber,
              age:values.age,
              gender:values.gender
            }
            console.log(data);
            userService.update(data).then((res)=>{
              console.log("Res: ",res)
              showToastMessage("success");
            }).catch((err)=>{
              console.log("Error: ",err)
              
            })
            action.resetForm();
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
    </>
  );
}

export default Userprofile;
