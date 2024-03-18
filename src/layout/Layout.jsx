import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import About from '../pages/About';
import DetaliProducts from '../pages/DetaliProducts';
import Contacts from '../pages/Contacts';
import axios from '../axios';
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';


const Layout = () => {
  const [products, setProducts]=useState(null)

  const getProducts = async () => {
    try{
      const {data} = await axios.get();
    setProducts(data);
      return data;
    } catch(err){
      throw err;
    }
  };

  useEffect(()=>{
    getProducts()
  }, [])
  if (products === null){
    return <h1>Loading...</h1>
  }
  console.log(products);
  return (
    <div>
        <Header />
        <Hero />
        <Card />
        <Footer/>
        <Routes>
           <Route path='/' element={ <Home/>} />
           <Route path='/shop' element={ <Shop/>} />
           <Route path='/about' element={ <About/>} />
           <Route path='/detaliProduct' element={ <DetaliProducts/>} />
           <Route path='/contacts' element={ <Contacts/>} />
        </Routes>
       
    </div>
  )
}

export default Layout