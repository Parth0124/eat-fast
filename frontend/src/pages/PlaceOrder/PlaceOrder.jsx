import { useContext, useState, useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function PlaceOrder() {

const {getTotalCartAmount, token,cartItems, food_list,url} = useContext(StoreContext)

const navigate = useNavigate();
  const[data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    city:"",
    state:"",
    zipcode:"",
    phone:"",
    country:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  console.log('Token:', token);

  useEffect(() => {
    console.log('Token:', token);
    if (!token) {
      console.log('no token');
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      console.log('no items in cart');
      navigate("/cart");
    }
  }, [token]);
  
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 50,
    };
    try {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        console.error('Order placement failed:', response.data);
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert("Error placing order. Please try again.");
    }
  };
  
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input  required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
        <input  required name='address' onChange={onChangeHandler} value={data.address} type="text" placeholder="Address" />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Pin Code" />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone"/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
