import { color } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




const BrowseSales = () => {


    const [salesList, setSalesList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    // const [selShop, setSelShop] = useState(second)
    // const shopArray=['Bag','Keyboard','painting','keyboard and mouse'];

    const fetchBrowserData = async () => {
        const res = await fetch('http://localhost:5000/sales/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data);
        setSalesList(data);
        setMasterList(data);

    };
    useEffect(() => {
        //on page open
        fetchBrowserData();
    }, []);



    const searchSale = (e) => {
        let search = e.target.value;

        let filterData = masterList.filter((sale) => { return sale.title.toLowerCase().includes(search.toLowerCase()) });
        setSalesList(filterData);
    }
    // const filtershopName = (e) => {
    //     let search = e.target.value;

    //     let filterData = saleData.filter((sale) => { return product.shopName.toLowerCase().includes(search.toLowerCase()) });
    //     setSaleArray(filterData);

    // }


        const displaySales = () => {
            return salesList.map((sale) => {
                return <div className='col-md-3 mb-4 '>
                    <div className="card">
                        <img className='card-img-top card-img' src={'http://localhost:5000/' + sale.image} alt="" />
                        <div className="card-body ">
                            <h5>{sale.title}</h5>
                            <h5>{sale.shopName}</h5>
                           
                              <p>  {sale.description.substring(1, 20)}...</p>
                          
                            <p>{sale.duration}</p>
                           
                            <Link className='btn btn-success ms-2' to={'/saledetails/' + sale._id}>  Details</Link>
                        </div>

                    </div>
                </div>
            })
        }
    

    return (
        <div>



            <div className='card justify-content-center align-items-center d-flex w-100 h-50 brow'>

                <h1 className='text-center mt-3'><b className='text-danger'>DealDojo</b>   <b style={{ color: 'white' }}>ONLINE Shoping</b></h1>
                <input onChange={searchSale} style={{ width: '60%', height: '40px', borderRadius: '10px', padding: '5px', marginBottom: '100px' }} type="text" placeholder=' Search Here' /></div>
            <div className='m-3 p-2 hi'>


                <div className="row mt-4">

                    {displaySales()}
                </div>
            </div>

        </div>
    )
}

export default BrowseSales;
