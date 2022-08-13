import React from "react";
import { connect } from "react-redux";

function Login({login, setLogin }) {
  return (
    <section
      onClick={() => {
        setLogin(false);
      }}
      className={login ? "sign modal show" : "sign modal"}
    >
      <div onClick={(e) => e.stopPropagation()} className="sign__item">
        <p onClick={() => setLogin(false)} className="sign__close">&times;</p>
        <div className="sign__head">
          <h3 className="sign__title">Sign In</h3>
        </div>
        <div className="sign__body">
          <form action="">
            <input type="text" placeholder="Username" />
            <br />
            <input type="text" placeholder="Password" />
            <p className="sign__forget">
              Forgot <span>Username / Password?</span>
            </p>
            <input className="sign__sign" type="submit" value="Sign in" />
          </form>
        </div>
        <div className="sign__bottom">
          <p className="sign__dont">Don’t have an account?</p>
          <p className="sign__btn">SIGN UP NOW</p>
        </div>
      </div>
    </section>
  );
}

let t = (a) => a;
export default connect(t)(Login);
