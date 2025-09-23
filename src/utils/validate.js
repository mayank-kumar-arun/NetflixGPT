export const ValidateForm = (email, password, name) => {
  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isValidPassword =
    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password);
  const isValidName = /^[a-z\s]{1,255}$/i.test(name);
  if (!isValidName) return "Full Name is Not Valid";
  if (!isValidEmail) return "Email Id is Not Valid";
  if (!isValidPassword) return "Password is Not Valid";

  return null;
};
