import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Processcart.scss";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';



const initialCart = [
  {
    id: 1,
    name: "Dribbble Product Style 01",
    size: "L",
    color: "Black",
    price: 166,
    quantity: 2,
    image: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    name: "Dribbble Product Style 01",
    size: "M",
    color: "Black",
    price: 166,
    quantity: 1,
    image: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    name: "Dribbble Product Style 01",
    size: "S",
    color: "Black",
    price: 166,
    quantity: 3,
    image: "https://via.placeholder.com/60",
  },
];

function Home() {

  const { cartItems } = useContext(AuthContext);

  // const [cartItems, setCartItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(25);

  // const handleQuantityChange = (id, delta) => {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(0, item.quantity + delta) }
  //         : item
  //     )
  //   );
  // };

  // const handleRemoveItem = (id) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  const total = cartItems.reduce((sum, item) => {
    const numericPrice = Number(
      typeof item.price === "string"
        ? item.price.replace(/[^0-9.]/g, "")
        : item.price
    );
    return sum + numericPrice * item.quantity;
  }, 0);


  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    mobile: '',
    city: '',
    state: '',
    address: '',
    zip: '',
    payment: '',
  });
  const formfill = () => {
    const { firstName, mobile, city, state, address, zip, payment } = formData;

    if (!(firstName && mobile && city && state && address && zip && payment)) {
      alert("❌ Please fill in all fields before placing the order.");
    } else {
      setShowModal(true); // ✅ React opens modal
    }
  };




  return (
    <div>

      <Header />

      <div className="container mt-4" style={{ paddingTop: "200px", paddingBottom: "100px" }} >
        <div className="row">
          {/* Left Block - Form */}
          <div className="col-md-4">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12">
                <label htmlFor="firstName" className="form-label"  >First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Name" value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="mobile" className="form-label">Mobile No</label>
                <input type="text" className="form-control" id="mobile" placeholder="Mobile no" value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="City" value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })} required>
                  <option value="" disabled selected>State</option>
                  <option>Lathi</option>
                  <option>Amreli</option>
                </select>
                <div className="invalid-feedback">Please select a valid state.</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Address" value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })} required />
                <div className="invalid-feedback">Please provide a valid zip.</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="payment" className="form-label">Payment Method</label>
                <select className="form-select" id="payment" value={formData.payment}
                  onChange={(e) => setFormData({ ...formData, payment: e.target.value })} required>
                  <option value="" disabled selected>Payment</option>
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Cash on Delivery</option>
                </select>
                <div className="invalid-feedback">Please select a valid payment method.</div>
              </div>


            </form>
          </div>

          {/* Right Block - Cart */}
          <div className="col-md-8">
            <div className="cart-containerr">
              <table className="cart-table table table-bordered">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="product-info d-flex align-items-center">
                          <img src={item.image} alt={item.name} className="me-2" />
                          <div>
                            <p>{item.name}</p>
                            <p>Size: {item.size} | Color: {item.color}</p>
                          </div>
                        </div>
                      </td>
                      <td>{item.price}</td>

                      <td>
                        {/* <button onClick={() => handleQuantityChange(item.id, -1)}>-</button> */}
                        <span className="mx-2">{item.quantity}</span>
                        {/* <button onClick={() => handleQuantityChange(item.id, 1)}>+</button> */}
                      </td>
                      <td>   ₹{
                        (
                          Number(item.price.replace(/[^0-9.]/g, "")) * Number(item.quantity)
                        ).toFixed(2)
                      }</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary ">
                <p><strong>Discount:</strong> ₹ {discount.toFixed(2)}</p>
                <h3>Total: ₹ {(total - discount).toFixed(2)}</h3>
              </div>

              <div className="cart-summary mt-3">

                <button className="btnn btn-primary" type="submit" onClick={(e) => formfill(e)} >Place Order</button>
              </div>


              {/* <!-- Modal --> */}
              {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Place Order</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowModal(false)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        Thank you for your purchase. Your order has been received and is now being processed.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setShowModal(false)}
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;