import React, { useState } from "react";
import style from "./login.module.css";
import { toast } from "react-toastify";
import { Account, ID } from "appwrite";
import { account } from "../../library/appwrite";

const Login = () => {
  const [loginInput, setLoginInput] = useState({});
  const [registerInput, setRegisterInput] = useState({});
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((values) => ({ ...values, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterInput((values) => ({ ...values, [name]: value }));
  };

  const handleLogin =async (e) => {
    e.preventDefault();
    const {email, password}= loginInput
    try{
      await account.createEmailPasswordSession(email, password)
      toast.success("Logged in successfully!");

    }
    catch(err){
      console.log(err)
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const {email, password, username}= registerInput
    console.log("Register Input:", registerInput);
    try {
     await account.create(ID.unique(), email, password, username)

      toast.success("Registered successfully!");
      console.log("registered")
      account.createEmailPasswordSession(email, password)
      toast.success("logged in")
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className={style.login}>
      <div className={style.item}>
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={loginInput.email || ""}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginInput.password || ""}
            onChange={handleLoginChange}
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className={style.separator}></div>
      <div className={style.item}>
        <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="Avatar Preview" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={registerInput.username || ""}
            onChange={handleRegisterChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={registerInput.email || ""}
            onChange={handleRegisterChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerInput.password || ""}
            onChange={handleRegisterChange}
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
