import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../schemas";
import CountryCode from "../country_code/CountryCodes.json";

// const handleEvent = (e) => ({
  
// })

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  address: "",
};

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <>
      <div className="main-site">
        <div className="left">
          <div className="left-heading">
            <p className="heading-text">Let’s get you started</p>
          </div>
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <div className="errors">
                    <i class="uil uil-exclamation-octagon"></i>
                    <p> {errors.name} </p>
                  </div>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div className="errors">
                    <i class="uil uil-exclamation-octagon"></i>
                    <p> {errors.email} </p>
                  </div>
                ) : null}
              </div>

              <div className="input-block tel-block">
                <label htmlFor="name" className="input-label">
                  Phone number
                </label>
                <div className="number-input">
                  <input
                    type="number"
                    name="number"
                    placeholder="800 2738 9700"
                    id="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="country-list">
                    <select>
                      {CountryCode.map((items) => {
                        return (
                          <>
                            <option key={parseInt(items.dial_code)}> {items.code}</option>
                          </>
                        );
                      })}
                    </select>
                    {/* <span className="country_code">+91</span> */}
                  </div>
                </div>
                {errors.number && touched.number ? (
                  <div className="errors">
                    <i class="uil uil-exclamation-octagon"></i>
                    <p> {errors.number} </p>
                  </div>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Create password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <div className="errors">
                    <i class="uil uil-exclamation-octagon"></i>
                    <p> {errors.password} </p>
                  </div>
                ) : null}
              </div>

              <div className="input-block">
                <label htmlFor="textarea" className="input-label">
                  Address (Optional)
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="Address"
                  id="textarea"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="submit-button">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="login">
              <span className="login-span">Already a user?</span>
              <Link to="#" className="login-link">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <h1 className="right-title">
              “Creativity is intelligence having fun”
            </h1>
            <p className="author">- Designed by Oluyomi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
