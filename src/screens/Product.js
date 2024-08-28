import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import axios from "axios"
export default function Product(props) {
    const { addToCart } = useCartContext();
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading,setLoading]=useState(true);
    let [units, setUnits] = useState(1);
    const generateUniqueId = () => {
        return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      };
    const decUnits = () => {
        if (units - 1 >= 1) {
            setUnits(units - 1);
        }
        else {
            setUnits(1);
        }
    };
    const incUnits = () => {
        if (units + 1 <= product.rating.count) {
            setUnits(units + 1);
        }
        else {
            alert("You can't order more than available stock!!");
            setUnits(product.rating.count);
        }
    };
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {setProduct(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [])
    if(loading)
    {
    return<>
    <Navbar/>
    <Loader/>
    <Footer/>
    </>
    }
    else
    {
    return (
        <>
            <Navbar />
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className=" rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" rel="noreferrer" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                                    <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto", className: "rounded-4 fit" }} src={product.image} alt='pic' />
                                </a>
                            </div>


                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h1 className="heading">
                                    {product.title}
                                </h1>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>

                                    <span className="text-success ms-2">In stock</span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5 text-clr">Price : $ {product.price}</span>
                                    <span className="text-muted text-clr"> / per unit</span>
                                </div>
                                <h4 className='text-clr'>Description:</h4>
                                <p className="text-clr">
                                    {product.description}
                                </p>

                                <div className="row">
                                    <dt className="col-3 text-clr">Category : </dt>
                                    <dd className="col-9 text-clr">{product.category}</dd>
                                </div>

                                <hr />

                                <div className="row mb-4">
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block text-clr">Quantity</label>
                                        <div className="input-group mb-3" style={{ width: "170px" }}>
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={decUnits}>
                                                <i className="fas fa-minus" ></i>
                                            </button>
                                            <input type="text" className="form-control text-center border border-secondary" value={units} aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={(e) => { setUnits(e.target.value) }} />
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={incUnits}>
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <Link to="/cart" className="btn btn-primary shadow-0" onClick={() => addToCart( generateUniqueId(), units, product)}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </Link>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
   }
}
