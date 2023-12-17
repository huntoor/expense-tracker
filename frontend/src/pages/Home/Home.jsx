import React from 'react';
import Navbar from '../../Context/navbar';
import validate from '../../Context/validation';

const Home = () => {

  return (
    <>
      <Navbar isLoggedin = {validate()} username={localStorage.getItem("username")} />
      HOOOOOOOOOOOOOOOOOMMMMMMMMMMEEEEEEEEEE!!!!!!!!!!!!
    </>

    // <div>
    //   <h2>Signin</h2>
    //   <form>
    //     {/* ... (your form inputs) */}
    //     <button type="button" onClick={handleSignin}>
    //       Signin
    //     </button>
    //   </form>
    // </div>
  );
};

export default Home;
