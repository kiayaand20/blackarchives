import { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function SignIn({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signIn(form);
      if (user) {
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="form-container">
        <h1>Login to your Account</h1>
        <form className="sign-in-form" onSubmit={handleSignIn}>
          <label className="sign-in-label">Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label className="sign-in-label">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="sign-in-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;

