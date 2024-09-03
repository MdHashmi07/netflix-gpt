export const checkValidData = (fullName, email, password) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (fullName === "") return alert("Enter your name");

  if (email === "") {
    alert("Enter your email");
  } else if (!isEmailValid) {
    return "Email is not Valid";
  }

  if(password=== "") {
    alert("Enter your password");
  }else if (!isPasswordValid) {
    return "Password is not valid (atleast 8 character)";
  } 

  return null;
};
