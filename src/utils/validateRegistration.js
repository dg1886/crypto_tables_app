export default function validateRegistration(values) {
  const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const passwordRegexp = /[^A-Z-a-z-0-9]/g;
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegexp.test(String(values.email).toLowerCase())) {
    errors.email = "Invalid email. Please check!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (passwordRegexp.test(String(values.password).toLowerCase())) {
    errors.password = "Only latin letters and numbers";
  } else if (values.password.length < 3 || values.password.length > 10) {
    errors.password = "No less than 3 and more than 10 characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please enter Confirm Password";
  } else if (passwordRegexp.test(String(values.confirmPassword)
    .toLowerCase())) {
    errors.confirmPassword = "Only latin letters and numbers";
  } else if (values.confirmPassword.length < 3 || values.confirmPassword.length > 10) {
    errors.confirmPassword = "No less than 3 and more than 10 characters";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match.";
  }
  return errors;
}
