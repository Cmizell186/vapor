import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup_form'>
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label className="login_label">User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          className="input_login"
        ></input>
      </div>
      <div>
        <label className="login_label">Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className="input_login"
        ></input>
      </div>
      <div>
        <label className="login_label">Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className="input_login"
        ></input>
      </div>
      <div>
        <label className="login_label">Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="input_login"
        ></input>
      </div>
      <div id='robot_div'>
      <input id='login_checkboxa' type='checkbox'></input>
      <label className='login_label'>I am a robot.</label>
      </div>
      <div id='fake_checkbox'>
      <input id='login_checkbox' type='checkbox'></input>
      <label className='login_label'>I am 13 years of age or older and agree to the terms of the Vapor Subscriber Agreement and the Jason Privacy Policy.</label>
      </div>
      <button className="sign_up_button" type='submit'>Continue</button>
    </form>
    </div>
  );
};

export default SignUpForm;
