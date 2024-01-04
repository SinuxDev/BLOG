import React from "react";
import { Link, useSearchParams, Form, useActionData } from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="form-section">
      <div>
        <p>{isLogin ? "Login to your account" : "Create Your new account"}</p>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}> {error} </li>
            ))}
          </ul>
        )}
        {data && data.message && <p> {data.message} </p>}
        <Form method="POST">
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              required
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              required
            />
          </div>
          <button className="btn login-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </Form>
        {isLogin ? (
          <p className="create-acc">
            Don't have an account ?
            <Link to={"/auth?mode=signup"}>Register Here</Link>
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
