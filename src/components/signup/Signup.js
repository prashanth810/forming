import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import Axios

const Signup = ({ setShowPopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [errors, setErrors] = useState({}); // State to manage error messages
  const nav = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Making a POST request to the backend signup endpoint
        const response = await axios.post('http://localhost:8000/auth/signup', {
          username,
          email,
          password,
          confirmpassword
        });

        if (response.status === 201) {  // If signup is successful
          alert("Signup successful !!");
          nav('/');  // Redirect to the home or login page after successful signup
        }
      } catch (error) {
        console.error('Error during signup:', error.response?.data || error.message);
        // Display the error message returned from the backend, if any
        if (error.response && error.response.data && error.response.data.message) {
          alert(`Signup failed: ${error.response.data.message}`);
        } else {
          alert("Signup failed, please try again.");
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };


  const validate = () => {
    let validationErrors = {}; // Object to store validation errors

    if (username.trim() === "") {
      validationErrors.username = "Enter user name !!";
    }
    if (email.trim() === "") {
      validationErrors.email = "Enter valid email !!";
    }
    if (password.trim() === "") {
      validationErrors.password = "Enter valid password !!";
    }
    if (confirmpassword.trim() === "") {
      validationErrors.confirmpassword = "Enter confirm password !!";
    }
    if (password !== confirmpassword) {
      validationErrors.confirmpassword = "Passwords do not match !!";
    }

    return validationErrors; // Return any validation errors
  };

  const handleInputChange = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className='main_login veg_home'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSignUp}>
            <div className='card mt-5 veg_home shadow-md rounded-md border-2 border-dashed border-gray-300 w-full md:w-[700px]'>
              <div className='card-header flex justify-between items-center border-b-2 border-dashed border-gray-300 pb-4  md:mt-4 mt-3'>

                <h3 className='text-[26px]'>Sign Up</h3>
                <button
                  className='btn btn-outline-danger text-red-500' >X
                </button>
              </div>
              <div className='card-body pt-5'>
                <div className='space-y-4'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label className='block text-sm font-medium'> Username <span className='text-red-500'>*</span></label>
                      <input
                        type='text'
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          handleInputChange('username');
                        }}
                        className={`mt-2 p-2 text-black border rounded-md w-full ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder='Enter Username...'
                      />
                      {errors.username && <p className='text-red-500 text-xs mt-2'>{errors.username}</p>}
                    </div>

                    <div className='col-md-6'>
                      <label className='block text-sm font-medium '>Email <span className='text-red-500'>*</span></label>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleInputChange('email');
                        }}
                        className={`mt-2 p-2 text-black border rounded-md w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder='Enter Email...'
                      />
                      {errors.email && <p className='text-red-500 text-xs mt-2'>{errors.email}</p>}
                    </div>

                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div>
                        <label className='block text-sm font-medium'>Password <span className='text-red-500'>*</span></label>
                        <input
                          type='password'
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            handleInputChange('password');
                          }}
                          className={`mt-2 p-2 text-black border rounded-md w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder='Enter Password...'
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-2'>{errors.password}</p>}
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <label className='block text-sm font-medium'>Confirm Password <span className='text-red-500'>*</span></label>
                      <input
                        type='password'
                        value={confirmpassword}
                        onChange={(e) => {
                          setConfirmpassword(e.target.value);
                          handleInputChange('confirmpassword');
                        }}
                        className={`mt-2 p-2 text-black border rounded-md w-full ${errors.confirmpassword ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder='Confirm Password...'
                      />
                      {errors.confirmpassword && <p className='text-red-500 text-xs mt-2'>{errors.confirmpassword}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer flex md:justify-between gap-1 justify-between my-2 mb-4'>
                <button type='submit' className='btn btn-primary login_btn_loginpage'> Sign Up </button>
                <Link to="/" className='btn btn-success newacc_btn_loginpage'> Already have an Account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
