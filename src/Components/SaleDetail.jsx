import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AddSales from './AddSales';

const SaleDetail = () => {
  const { id } = useParams();
  const [saleData, setSaleData] = useState(null);

  const fetchSalesDetails = async () => {
    const res = await fetch('http://localhost:5000/sales/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    setSaleData(data);
    console.table(data);
  };
  useEffect(() => {
    //on page open
    fetchSalesDetails();
  }, [])


  const displaySaleDetails = () => {
    if (saleData !== null) {
      return <div className='card'>
        <div className="card-body">
          <img src={'http://localhost:5000/' + saleData.image} />
          <h5>By {saleData.shopName}</h5>
          <h1>{saleData.title}</h1>
          <p>{saleData.description} </p>
          <p>{saleData.duration} </p>
          <h3>{saleData.address} </h3>
        </div>
      </div>
    }
  }

  return (
    <div>
      <div className='container justify-content-center align-items-center d-flex'>
       <div className='card w-75 h-100 '>


         
       {displaySaleDetails()}
       </div>
      </div>
    </div>
  )
}

export default SaleDetail;
