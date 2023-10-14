import React from 'react'
import {useFomik, useFormik} from 'formik'
import Swal from 'sweetalert2'
import useAppContext from '../AppContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {

const {setLoggedin}=useAppContext();
const navigate=useNavigate()
  const google=useFormik({
    initialValues:
    {
      email:'',
      password:''
    },
    onSubmit: async(value)=>{
      console.log(value);
      const res= await fetch('http://localhost:5000/Users/authenticate',{
        method:'POST',
        body:JSON.stringify(value),
        headers:{
          'Content-Type':'application/json'
        }
      });
      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'Login Success'
        })
        console.log(res.status);
        setLoggedin(true);
        const data=await res.json();
        sessionStorage.setItem('Users',JSON.stringify(data))

        navigate('/BrowseSales')

      }

      else if(res.status===400)
        Swal.fire({
          icon:'error',
          title:'Login Failed',
          text:'Invalid Email or Password'
        })
      


    }
  });
  return (
    <div>
      <div  className=' justify-content-center align-items-center d-flex hello vh-100 '>

      <div className='card p-4 text-center login'>
        <h1 className='text-center text-white'>DealDajo Login</h1> <hr />
        <form action="" onSubmit={google.handleSubmit}>
          <input type="text" id='email' onChange={google.handleChange}  value={google.values.email} className='form-control' /> <br /><br />
          <input type="password" id='password' onChange={google.handleChange} value={google.values.password} className='form-control' /> <br /><br />
          <button className='btn btn-success'>submit</button>
        </form>
      </div>


      </div>
    </div>
  )
}

export default Login;
