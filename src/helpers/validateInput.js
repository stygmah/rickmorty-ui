const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const validateForm = (credentials) => {
  let newErrors = { email: null, password: null, repeatedPassword: null };
  if (!credentials.email) {
    newErrors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(credentials.email)) {
    newErrors.email = "Invalid email address";
  }
  if (!credentials.password) {
    newErrors.password = "Password is required";
  } else if (!PASSWORD_REGEX.test(credentials.password)) {
    newErrors.password = "Invalid password";
  }
  if (!credentials.repeatedPassword) {
    newErrors.repeatedPassword = "Please repeat your password";
  } else if (credentials.repeatedPassword !== credentials.password) {
    newErrors.repeatedPassword = "Passwords do not match";
  }
  return newErrors;
};


export const validateLogin = (credentials) => {
  if (!credentials.email) {
    return false;
  } else if (!EMAIL_REGEX.test(credentials.email)) {
    return false;
  }
  if (!credentials.password) {
    return false;
  }
  if (credentials.password.length < 8) {
    return false;
  }
  return true;
};
