import React from 'react';
import useForm from '../custom-hooks/useForm';
import validate from './validateForm';

import '../styles/Form.css';

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    validate,
    submit
  );

  function submit(errObj) {
    const length = Object.keys(errObj).length;
    if (length <= 1) {
      console.log('Submitted Successfully');
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Registration Form</h2>
        <div
          className={`${
            errors.className.username !== '' &&
            errors.className.username !== undefined
              ? errors.className.username
              : 'form-control'
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            value={values.username}
            onChange={handleChange}
          />
          <small>{`${errors.username}`}</small>
        </div>
        <div
          className={`${
            errors.className.email !== '' &&
            errors.className.email !== undefined
              ? errors.className.email
              : 'form-control'
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>
        </div>
        <div
          className={`${
            errors.className.password !== '' &&
            errors.className.password !== undefined
              ? errors.className.password
              : 'form-control'
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          <small>{errors.password}</small>
        </div>
        <div
          className={`${
            errors.className.password2 !== '' &&
            errors.className.password2 !== undefined
              ? errors.className.password2
              : 'form-control'
          }`}
        >
          <label htmlFor="password2">Confirm Password</label>
          <input
            name="password2"
            type="password"
            placeholder="Enter password again"
            value={values.password2}
            onChange={handleChange}
          />
          <small>{errors.password2}</small>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
