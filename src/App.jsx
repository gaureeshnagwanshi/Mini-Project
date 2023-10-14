import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import AddSales from './Components/AddSales';
import SaleManager from './Components/SaleManager';
import BrowseSales from './Components/BrowseSales';
import Home from './Components/Home';
import UserAuth from './UsersAuth';
import { AppProvider } from './AppContext';
import UpdateSale from './Components/UpdateSale';
import SaleDetail from './Components/SaleDetail';

function App() {
  return (
    <div >
      <BrowserRouter>
        <AppProvider>

        <Navbar />
        <Routes>

          <Route element={<Login /> } path='Login' />

          <Route element={<Home />} path='Home' />

          <Route element={<SignUp />} path='SignUp' />
          <Route element={<UserAuth><AddSales /></UserAuth> } path='AddSales' />
          <Route element={<UserAuth><SaleManager /></UserAuth> } path='SaleManager' />
          <Route element={ <UserAuth><BrowseSales /></UserAuth> } path='BrowseSales' />
          <Route element={ <UserAuth><SaleDetail /></UserAuth> } path='saledetails/:id' />
          <Route element={ <UpdateSale /> } path='UpdateSale/:id' />
          <Route element={ <SaleDetail /> } path='SaleDetail/:id' />





        </Routes>



        </AppProvider>


      </BrowserRouter>


    </div>
  );
}

export default App;
