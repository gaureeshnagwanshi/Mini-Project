import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import{AnimatePresence, motion } from 'framer-motion';


const SaleManager = () => {

  const [saleList, setSaleList] = useState([]);



  const fetchSaleData = async () => {
    const res = await fetch('http://localhost:5000/sales/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);
    setSaleList(data);

  };
  useEffect(() => {
    //on page open
    fetchSaleData();


  }, [])

  const deleteSale = async (id) => {
    console.log(id);


    const res = await fetch('http://localhost:5000/sales/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchSaleData();
      toast.success('Sales deleted successfully');
    }



  }


  return (
    <motion.div
    
    initial={{opacity:0 , scale: 0.2, x:'100%'}}
    animate={{opacity:1, scale: 1,x:0}}
    className='vh-100 bg-body-secondary container' >
      <h1 className='text-center my-4'>Manager Saless</h1>
      <div><table className="table ">
        <thead>
          <tr>
            <th scope="col">S.N</th>

            <th scope="col">Shop Name</th>
            <th scope="col">Description</th>
            <th scope='col'>Address</th>
            <th scope='col'>Duration </th>
            <th scope='col'>Image</th>
            <th scope='col'>Title</th>


            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode='popLayout'>

          {
            saleList.map((sales, index) => (
              <motion.tr 
         layout
              animate={{opacity:1,x:0}}
              exit={{opacity:0, y:'100%'}}
              key={sales._id}>
                <td>
                  {index + 1}
                </td>

                <td>{sales.shopName} </td>
                <td>{sales.description} </td>
                <td>{sales.address} </td>
                <td>{sales.duration} </td>
                <td><img height='100' src={'http://localhost:5000/' + sales.image}  alt="" /></td>
                <td>{sales.title} </td>


                <td>
                  <Link to={'/UpdateSale/'+sales._id} className='btn btn-primary'>Edit</Link>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={() => { deleteSale(sales._id) }}>Delete</button>
                </td>
              </motion.tr>


            ))
          }

          </AnimatePresence>
          
        </tbody>
      </table>
      </div>

    </motion.div>
  )
}

export default SaleManager;
