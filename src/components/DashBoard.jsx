import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = ({ user }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [image, setImage] = useState("");
  // const [mobile, setMobile] = useState("")
  // const [firstName, setFirstName] = useState("");
   const Navigate=useNavigate()
  console.log(user);

  return (
    <>
      <h1> Student Dashboard </h1>
      <h2>Welcome, {user.user.email}!</h2>
      <h2>Welcome, {user.user.name}!</h2>
      <h2>Welcome, {user.user.mobile}!</h2>

      <h2>Welcome, {user.user.first_school}!</h2>

      <button onClick={()=>{Navigate('/create')}}>Create Product</button>

    </>
  );
};

export default DashBoard;
