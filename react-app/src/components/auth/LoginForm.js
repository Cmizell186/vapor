import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './index.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login_form'>
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label className="login_label" htmlFor='email'>Vapor Email</label>
        <input
          name='email'
          type='text'
          value={email}
          onChange={updateEmail}
          className="input_login"
        />
      </div>
      <div>
        <label className="login_label" htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={updatePassword}
          className="input_login"
        />
        <button className="sign_in_button" type='submit'>Sign In</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
