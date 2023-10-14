import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Yup from 'yup';
const SignUPSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const SignUp = () => {

  const navigate = useNavigate()
  const SignUpForm = useFormik({
    initialValues: {
      Name: '',
      email: '',
      password: '',
      Confirm: ''
    },

    onSubmit: async (value) => {
      console.table(value);
      const res = await fetch('http://localhost:5000/Users/add', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'SignUp success',
          text: 'Now Login to Continue'
        })
        navigate('/Login');
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Something went Wrong',
          text: 'Please Try Again'
        })
      }


    },
    // validationSchema: SignUPSchema


  });





  return (
    <div  className=''>
      <div className=' justify-content-center align-items-center d-flex background  vh-100'>
        <div className='card  p-3 text-center    img'>
          <h1 className='put'></h1>
          <h1 className='text-center text-black'>DealDojo Account</h1> <hr />
          <div className=' card-body'>
            <form onSubmit={SignUpForm.handleSubmit}>
              <input   type="text" id='Name' placeholder='Enter Your Name' onChange={SignUpForm.handleChange} value={SignUpForm.values.Name} className='form-control mb-4' />
              <input  type="email" id='email' placeholder='Email Id' required onChange={SignUpForm.handleChange} value={SignUpForm.values.email} className='form-control mb-4' />
              <input  type="password" id='password' placeholder='Enter Your Password' onChange={SignUpForm.handleChange} value={SignUpForm.values.password} className='form-control mb-4' />
              <input  type="text" id='Confirm' placeholder='Confirm Password' onChange={SignUpForm.handleChange} value={SignUpForm.values.Confirm} className='form-control mb-4' />
              <button className='btn btn-success mb-2'>Submit</button> <br />
              <a style={{color:'black'}} className='link' href="http://localhost:3000/Login">Login Here </a>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp
