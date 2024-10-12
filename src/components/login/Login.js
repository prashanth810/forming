import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setShowPopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');  // State to store username error
  const [passwordError, setPasswordError] = useState('');  // State to store password error
  const [apiError, setApiError] = useState('');  // State to store API error response
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear API error before each request
    setApiError('');

    // Validate fields
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        username,  // Assuming username can also be an email
        password,
      });

      // If login is successful (assuming the backend responds with a 200 status code)
      if (response.status === 200) {
        // Assuming response contains a user object or token in data
        const user = response.data;

        // Save user data or token in localStorage
        localStorage.setItem("Loginuser", JSON.stringify(user));
        alert("Login successful!!");
        nav('/home');  // Navigate to /home after successful login
      }
    } catch (error) {
      // Display error message from the backend
      if (error.response && error.response.data && error.response.data.message) {
        setApiError(error.response.data.message);
      } else {
        setApiError("An error occurred. Please try again.");
      }
    }
  };

  // Validation function
  const validate = () => {
    let isValid = true;

    if (username === '') {
      setUsernameError("Please enter a username or email!");  // Set error message for username
      isValid = false;
    }

    if (password === '') {
      setPasswordError("Please enter a password!");  // Set error message for password
      isValid = false;
    }

    return isValid;
  };

  // Clear errors as user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value !== '') setUsernameError('');  // Clear username error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== '') setPasswordError('');  // Clear password error when user starts typing
  };

  return (
    <div className='main_login veg_home'>
      <div className='container'>
        <div className='row'>
          <div className='flex justify-center items-center'>
            <form onSubmit={handleLogin}>
              <div className='card mt-5 veg_home md:p-0 py-4 px-1 border-dashed border-2 border-gray-400 md:w-[500px]'>
                <div className='card-header flex justify-between items-center border-b-2 border-dashed border-gray-400 md:pb-1 pb-4'>
                  <div>
                    <h3 className='text-[26px]'>User Login</h3>
                  </div>
                  <div>
                    {/* Close Popup Button */}
                    <button
                      type="button"
                      className='btn btn-outline-danger'

                    >
                      X
                    </button>
                  </div>
                </div>

                <div className='card-body pt-5'>
                  <div className='form-group'>
                    <label> Username or Email <span className='err-message text-danger'>*</span></label>
                    <input
                      type='text'
                      value={username}
                      onChange={handleUsernameChange}
                      className={`form-control mt-2 ${usernameError ? 'border-red-500' : ''}`}  // Add red border if error
                      placeholder='Enter Username or Email...'

                    />
                    {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}  {/* Display username error */}
                  </div>

                  <div className='form-group mt-3'>
                    <label> Password <span className='err-message text-danger'>*</span></label>
                    <input
                      type='password'
                      value={password}
                      onChange={handlePasswordChange}
                      className={`form-control mt-2 ${passwordError ? 'border-red-500' : ''}`}  // Add red border if error
                      placeholder='Enter Password...'

                    />
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}  {/* Display password error */}
                  </div>
                </div>

                {/* Display API error message if login fails */}
                {apiError && <p className="text-red-500 text-center mt-3">{apiError}</p>}

                <div className='card-footer flex md:justify-between gap-1 justify-between my-2'>
                  <button type='submit' className='btn btn-primary login_btn_loginpage'>
                    Login
                  </button>
                  <Link to="/register" className='btn btn-success newacc_btn_loginpage'>
                    Create a New Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
