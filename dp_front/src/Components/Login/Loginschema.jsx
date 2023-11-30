import * as Yup from "yup";

export const loginschema = Yup.object({
  username: Yup
  .string()
  .required('Username is required')
  .min(5, 'Username must be at least 5 characters')
  .max(20, 'Username must be at most 20 characters')
  .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  // email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  
});
