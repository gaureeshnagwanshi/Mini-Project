import { useFormik } from 'formik';
import Swal from 'sweetalert2'
import React from 'react'
import { useState } from 'react';

const AddSales = () => {

    const [selFile, setSelFile] = useState("");

    const AddSale = useFormik({
        initialValues: {
            shopName: '',
           
            title: '',
            description: '',
            image: '',
            address: '',
            createdAt: new Date(),
            duration: ''

        },
        onSubmit: async (value) => {
            value.image = selFile;
            console.table(value);

            const res = await fetch('http://localhost:5000/sales/add', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your sale has added',

                })
            } else if (res.status == 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Try again'
                })
            }

        }

    })
    const Uploadfile = async (e) => {
        if (!e.target.files) return;

        
        const file = e.target.files[0];
        setSelFile(file.name);

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
            <div className='container justify-content-center align-items-center d-flex add'>
                <div style={{}} className='card m-4 p-4 text-center adds  '>
                    <h1 className='text-center'> Add YOur Sales</h1> <hr />
                    <form onSubmit={AddSale.handleSubmit}>
                        <input type="text" id='shopName' placeholder='Shop Name' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.shopName} /><br /> 
                        <input type="text" id='title' placeholder='Procuct Title' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.title} /> <br />
                        <input type="text" id='description' placeholder='Description' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.description} /> <br />
                        
                        
                        
                        <input type="text" id='address' placeholder='Address' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.address} /> <br />
                       

                        <input type="text" id='duration' placeholder='Time Period' className='form-control' onChange={AddSale.handleChange} value={AddSale.values.duration} /> <br />
                        <input type="file" id='file' placeholder='Image ' className='form-control' onChange={Uploadfile} /> <br />
                        <button className='btn btn-success'>  Add your Sales</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddSales;
