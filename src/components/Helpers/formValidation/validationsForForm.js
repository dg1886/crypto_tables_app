const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const passwordRegexp = /[A-z0-9]+$/;

const minMaxLength = (value) => value.length < 3 || value.length > 10;

const isMatchingRegexp = (regepx, value) => !regepx.test(String(value).toLowerCase());

const isRequired = (value) => !value || value.trim().length === 0;

const isSame = (value1, value2) => value1 !== value2;

export const validationsRegestration = {
  email: ({ email }) => {
    if (isRequired(email)) { return { email: "Please enter Email" }; }
    if (isMatchingRegexp(emailRegexp, email)) { return { email: "Invalid email. Please check!" }; }
    return "";
  },
  password: ({ password }) => {
    if (isRequired(password)) { return { password: "Please enter Password" }; }
    if (minMaxLength(password)) { return { password: "No less than 3 and more than 10 characters" }; }
    if (isMatchingRegexp(passwordRegexp, password)) { return { password: "Only latin letters and numbers" }; }
    return "";
  },
  confirmPassword: ({ password, confirmPassword }) => {
    if (isSame(password, confirmPassword)) { return { confirmPassword: "Password and Confirm Password does not match" }; }
    if (isRequired(confirmPassword)) { return { confirmPassword: "Please enter Password" }; }
    return "";
  },
};

export const validationsLogin = {
  email: ({ email }) => {
    if (isRequired(email)) { return { email: "Please enter Email" }; }
    if (isMatchingRegexp(emailRegexp, email)) { return { email: "Invalid email. Please check!" }; }
    return "";
  },
  password: ({ password }) => {
    if (isRequired(password)) { return { password: "Please enter Password" }; }
    if (minMaxLength(password)) { return { password: "No less than 3 and more than 10 characters" }; }
    if (isMatchingRegexp(passwordRegexp, password)) { return { password: "Only latin letters and numbers" }; }
    return "";
  },
};
