import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ setUser }) => {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(data);
    navigate("/");
  };

  return (
    <div className="login-details">
      <p className="sign">Sign up</p>
      <div className="inp-btn">
        <input
          className="form-control"
          type="text"
          name="username"
          id="username"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <br />
        <button className="btn btn-md  btn-success" onClick={handleClick}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.scss";

// const Login = ({ setUser }) => {
//   const [data, setData] = useState("");
//   const navigate = useNavigate();

//   const handleClick = () => {
//     setUser(data);
//     navigate("/main"); // Redirect to Main page after signing up
//   };

//   return (
//     <div className="login-details">
//       <p className="sign">Sign up</p>
//       <div className="inp-btn">
//         <input
//           className="form-control"
//           type="text"
//           name="username"
//           id="username"
//           value={data}
//           onChange={(e) => setData(e.target.value)}
//         />
//         <br />
//         <button className="btn btn-md  btn-success" onClick={handleClick}>
//           Sign up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
