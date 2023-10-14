import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Swal } from 'sweetalert2'
const UpdateSale = () => {

  const { id } = useParams();
  const [saleData, setsaleData] = useState(null)
  const navigate = useNavigate();
  const [selFile, setselFile] = useState('');

  const fetchSaleData = async () => {
    const res = await fetch('http://localhost:5000/sales/getbyid/' + id);
    const data = await res.json();
    console.log(data);
    setsaleData(data);
  }

  useEffect(() => {
    fetchSaleData();

  }, [])

  const updateFrom = async (value) => {
    value.image = selFile;
    const res = await fetch('http://localhost:5000/sales/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'icon',
        title: 'Sales Update'
      })
      navigate('/managerSales')
    }
  }

  const UploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setselFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  }


  return (
    <div>
      <div className='container justify-content-center align-content-center d-flex'>
        <div className='card m-4 p-4 text-center '>
          <h1 className='text-center'> Update YOur Sales</h1> <hr />


          {
            saleData != null ? (
              <Formik
                initialValues={saleData}
                onSubmit={updateFrom}
              >
                {
                  (AddSale) => (



                    <form onSubmit={AddSale.handleSubmit}>
                      <input type="text" id='shopName' placeholder='Shop Name' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.shopName} /><br /> <br />
                      <input type="text" id='description' placeholder='Description' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.description} /> <br /><br />
                      <input type="text" id='title' placeholder='Procuct Title' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.title} /> <br /><br />
                      <input type="text" id='address' placeholder='Address' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.address} /> <br /><br />


                      <input type="text" id='duration' placeholder='Time Period' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.duration} /> <br /><br />
                      <div className="row">
                        <div className="col-md-6">
                          <img className='img-fluid' src={"http://localhost:5000/" + AddSale.values.image} alt="" />

                        </div>
                        <div className="col-md-6">

                          <input type="file" placeholder='Image ' className='form-control' onChange={UploadFile} /> <br />
                        </div>
                      </div>
                      <button className='btn btn-success'> Update</button>
                    </form>



                  )}

              </Formik>
            ) : <h1 className='text-center my-5'> Loading.... </h1>


          }



        </div>
      </div>
    </div>
  )
}

export default UpdateSale
