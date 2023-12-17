const validate = () => {
    if (localStorage.getItem("authToken")) {
      return true;
    } else {
      return false;
    }
  }
  
  export default validate;