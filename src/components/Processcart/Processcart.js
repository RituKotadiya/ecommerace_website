import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Processcart.scss";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";


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

  const [cartItems, setCartItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(25);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>

      <Header />

      <div className="container mt-4">
        <div className="row">
          {/* Left Block - Form */}
          <div className="col-md-4">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Name" required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="mobile" className="form-label">Mobile No</label>
                <input type="text" className="form-control" id="mobile" placeholder="Mobile no" required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="City" required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option value="" disabled selected>State</option>
                  <option>Lathi</option>
                  <option>Amreli</option>
                </select>
                <div className="invalid-feedback">Please select a valid state.</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Address" required />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" required />
                <div className="invalid-feedback">Please provide a valid zip.</div>
              </div>

              <div className="col-md-12">
                <label htmlFor="payment" className="form-label">Payment Method</label>
                <select className="form-select" id="payment" required>
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
                      <td>₹{item.price.toFixed(2)}</td>
                      <td>
                        {/* <button onClick={() => handleQuantityChange(item.id, -1)}>-</button> */}
                        <span className="mx-2">{item.quantity}</span>
                        {/* <button onClick={() => handleQuantityChange(item.id, 1)}>+</button> */}
                      </td>
                      <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary ">
                <p><strong>Discount:</strong> ₹{discount.toFixed(2)}</p>
                <h3>Total: ₹{(total - discount).toFixed(2)}</h3>
              </div>

              <div className="cart-summary mt-3">

                <button className="btnn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Place Order</button>
              </div>


              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Place Order</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Thank you for your purchase. Your order has been received and is now being processed.
                      You will receive a confirmation email shortly with the details.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Continue Shopping</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;