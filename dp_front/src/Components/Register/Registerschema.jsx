import * as Yup from "yup";
export const registerschema = Yup.object({
  name: Yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(20, 'Username must be at most 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  phone: Yup.number()
  .typeError("Phone must be a number")
  .integer("Phone must be an integer")
  .min(1000000000, "Phone number must have at least 10 digits")
  .max(9999999999, "Phone number can have at most 10 digits")
  .required("Please enter your phone"), 
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
