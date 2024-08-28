import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Loader from '../components/Loader'

export default function Shop() {

const [products,setProducts]=useState([]);
const [loading,setLoading]=useState(true);
const [search,setSearch]=useState('');
console.log(search);
useEffect(()=>{
 axios.get("https://fakestoreapi.com/products")
 .then(res=>{setProducts(res.data);
  setLoading(false);
 })
 .catch(error=>console.log(error))
},[])
  if(loading)
  {
  return (
    <>
    <Navbar/>
    <Loader/>
    <Footer/> 
    </>
  )
  }
  else
  {
  return (
    <>
    <div><Navbar/></div>
    <div className='inputDiv'>
    <input className="form-control me-2 inputStyle" type="search" placeholder="Search product by name or category" aria-label="Search" value={search} onChange={e=>setSearch(e.target.value)}></input>
    <span className="fa fa-search form-control-feedback searchIcon"/>
    </div>
    <h1 className='heading'>Shop the World, from Your Home</h1>
    <div className="grid-container">
    {
    products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase())|| product.category.toLowerCase().includes(search.toLowerCase())).map((product)=>{return <div key={product.id} >
    <Cards  id ={product.id} url={product.image} name={product.title} price={product.price} details={product.description}/>
    </div>
    }) 
    }
    </div>
    <div><Footer/></div>
    </>
  )
  }
}
