import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Table, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useCartContext } from '../context/cart_context'
import thrash from "./constants/thrash.svg";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cart,deleteFromCart,emptyCart} = useCartContext();
  const navigate=useNavigate();
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };
  
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);
  };

  return (
    <>
    <div><Navbar/></div>
    {
    cart.length>0 ?  
    (
    <Container>
      <div className='heading'><h2 >Shopping Cart</h2></div>
      <Table  bordered  responsive>
        <thead className='text-color'>
          <tr>
            <th>Item Image</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
   
        <tbody className='text-color'>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <Image src={item.image} alt={item.name} thumbnail style={{ width: '100px' ,height:"100px"}} />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
              <td><button type="button" className="btn p-0 bg-danger"><img src={thrash}  alt="delete" style={{width: "35px"}} onClick={()=>{deleteFromCart(item.id)}} /></button> </td>
            </tr>
    
          ))}
               
        </tbody>
      </Table>
      <Row className="justify-content-end">
        <Col xs="auto">
          <h4 className='text-color'>Total: ${calculateTotal().toFixed(2)}</h4>
        </Col>
      </Row>
      <Row className="justify-content-end mt-3">
        <Col xs="auto">
          <button type="button" class="btn btn-success" onClick={()=>{navigate("/shop")}} style={{marginRight:'5px'}}>Shop More</button>
          <Button variant="primary" onClick={()=>{emptyCart()}}>Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
    )
    :
    (
    <div className='cartWrap'>
    <div className='vertical-center'>
    <div><h1 className='heading'>Your Cart is Empty!</h1></div>
    <div><button type="button" class="btn btn-success" onClick={()=>{navigate("/shop")}}>Shop Now</button></div>
    </div>
    </div>
    )
    }
    <Footer/>
    </>
    
  )
}

export default Cart;