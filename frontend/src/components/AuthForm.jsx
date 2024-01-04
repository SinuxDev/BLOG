import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  console.log(isLogin);

  return (
    <section className="form-section">
      <div>
        <p>{isLogin ? "Login to your account" : "Create Your new account"}</p>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
            />
          </div>
          <button className="btn login-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        {isLogin ? (
          <p className="create-acc">
            Don't have an account ?
            <Link to={"/auth?mode=register"}>Register Here</Link>
          </p>
        ) : (
          <p className="create-acc">
            Already have an account ?
            <Link to={"/auth?mode=login"}>Login Account</Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
