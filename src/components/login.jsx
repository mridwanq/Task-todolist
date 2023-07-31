import { ReactComponent as Shape } from "../assets/shape.svg";
import { ReactComponent as Background } from "../assets/my_notifications_rjej 1.svg";
import "../css/login.css";
const Login = () => {
  return (
    <div className="container">
      <Shape className="shape" />
      <div className="center full col gap-10">
        <h2 style={{ marginTop: "124px" }}>Welcome Back!</h2>
      </div>
      <div className="black center" style={{ marginBottom: "10px" }}>
        Lets help you meet your tasks
      </div>
      <div className="center">
        <Background className="back" />
      </div>

      <div className="col center gap-10">
        <input
          type="text"
          placeholder="Enter Your Email"
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "20px",
            border: "none",
            marginTop: "10px",
          }}
        />
        <input
          type="password"
          placeholder="Confrom Password"
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "20px",
            border: "none",
          }}
        />
      </div>
      <div className="center" style={{ color: "#b83f0b", marginTop: "15px" }}>
        Forgot Password
      </div>
      <div className="center">
        <button style={{ fontWeight: "bold", marginTop: "15px" }}>Login</button>
      </div>

      <div className="center" style={{ marginTop: "10px" }}>
        Dont have an account ?
        <span
          style={{ color: "#b55e38", fontWeight: "bold", paddingLeft: "5px" }}
        >
          <a href=""></a>
          Sign Up
        </span>
      </div>
    </div>
  );
};
export default Login;
