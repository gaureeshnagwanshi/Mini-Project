import React, { useState } from 'react'

const Home = () => {


  return (
   <div className=' vh-100 home'>
 <header className='saleHeader'>
 <h5 style={{margin:'2px'}}> <b style={{color:'red',marginTop:'-50px',borderBottom:'2px solid red'}}>DealDojo</b> <br /> <b style={{color:'black',fontSize:'15px'}}>NEARBY SHOPING</b>   </h5>   
<div className='dis'>
      <a className='login2'  href="http://localhost:3000/SignUp">SignUp</a>
      <a className='login1'  href="http://localhost:3000/Login">Login</a>
</div>
 </header>
 <div  className='justify-content-center align-items-center d-flex vh-100 '> 
 <div style={{height:'500px',width:'1100px',border:'1px solid black',marginTop:'-100px'}} className='card p-4 deal'> 
  

    <h5> <b style={{color:'red',marginTop:'-50px',borderBottom:'2px solid red'}}>DealDojo</b> <br /> <b style={{color:'black',fontSize:'15px', paddingBottom:'-20px'}}>NEARBY SHOPING</b> </h5> <br /> <br />
<h1><b style={{fontSize:'50px',}}>DEALDOJO </b> <br /> <b style={{borderBottom:'6px solid red'}}><b>ONLINE</b> <b style={{color:"red"}}> Shop</b></b>  </h1>
<br />
 <p style={{marginTop:'-20px'}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Eos alias est, nemo sapiente,<br /> accusamus numquam ratione consectetur ducimus </p>
      
      <div>

      <button className='btn btn-danger'><a className='now' href="http://localhost:3000/BrowseSales">Shop Now</a></button><br /><br />
     <p><b>Call Us for Details</b> <br />6388013215</p>

      </div>

     
     
      <div>


        <img className='pic' src="https://thumbs.dreamstime.com/b/happy-shopping-girl-7869153.jpg" alt="" />
        <img className='pic1' src="https://images.freeimages.com/images/premium/previews/6078/60785700-happy-shopping-girl-with-many-shoping-bag.jpg" alt="" />
      </div>
  
  
   </div>   
  </div> 
   </div>
  )
}

export default Home
