import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import Comment from './pages/comment';
import Analiytics from './pages/Analiytics';
import Product from './pages/product';
import ProductList from './pages/productList';
import Sidebar from './components/Sidebar';
import Rewiews from './pages/Rewiews';
import Foods from './pages/Foods';
import FoodDetail from './pages/foodDetail';
import Customerdetail from './pages/customerdetail';
import Calendar from './pages/calendar';
import Chat from './pages/chat';
import Wallet from './pages/wallet';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Container className='container'>
    <BrowserRouter>
     <Sidebar>
        <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/dashboard" element= {<Dashboard/>}/>
          <Route path = "/orderList" element= {<OrderList/>}/>
          <Route path = "/Comment" element= {<Comment/>}/>
          <Route path = "/analytics" element= {<Analiytics/>}/>
          <Route path = "/product" element= {<Product/>}/>
          <Route path = "/productList" element= {<ProductList/>}/>
          <Route path = "/Rewiews" element= {<Rewiews/>}/>
          <Route path = "/Foods" element= {<Foods/>}/>
          <Route path = "/foodDetail" element= {<FoodDetail/>}/>
          <Route path = "/Customerdetail" element= {<Customerdetail/>}/>
          <Route path = "/Calendar" element= {<Calendar/>}/>
          <Route path = "/Chat" element= {<Chat/>}/>
          <Route path = "/wallet" element= {<Wallet/>}/>
           
          
          </Routes>
          </Sidebar>
    </BrowserRouter>
    </Container>
  );
}

export default App;
