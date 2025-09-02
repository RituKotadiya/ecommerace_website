
import "./Cart.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AuthContext } from '../AuthContext/AuthContext';
import { useContext, useState } from 'react';
import Product from "../Product/Product";
import { useNavigate } from 'react-router-dom';


// ✅ Declare the cart data outside the component
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
  const navigate = useNavigate();
  const { cartItems, handleRemoveItem, updateQuantity, removeFromCart } = useContext(AuthContext);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);





  // const [cartItems, setCartItems] = useState(initialCart);
  // const [promoCode, setPromoCode] = useState("");
  // const [discount, setDiscount] = useState(25);

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


  return (
    <div>
      <Header />

      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>DELETE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="product-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>
                        Size: {item.size} | Color: {item.color}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, -1)} >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>
                </td>
                <td>

                  <h6>
                    ₹{
                      (
                        Number(item.price.replace(/[^0-9.]/g, "")) * Number(item.quantity)
                      ).toFixed(2)
                    }
                  </h6>

                </td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                </td>
              </tr>

            ))}
          </tbody>

        </table>

        <div className="cart-actions">
          <button className="update-btn" onClick={() => navigate("/Processcart")}>Place Order</button>
          <button className="continue-btn" >Continue Shopping</button>
        </div>

        <div className="cart-summary">
          {/* <div className="promo-section">
          <h3>Discount / Promo Code</h3>
          <p>
            Don’t have any code yet?{" "}
            <a href="#">Go to our promotional program</a>
          </p>
          <input
            type="text"
            placeholder="Promo Code Here"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button>Apply</button>
        </div> */}

          {/* <div className="summary-section">
          <p>
            <strong>Address:</strong>
            <br />
            Kyla Olsen Ap #651-8679 Soddales Av. Tamuning PA 10855
          </p>
          <p>
            <strong>Discount:</strong> ₹{discount.toFixed(2)}
          </p>
          <h3>Total: ₹{(total - discount).toFixed(2)}</h3>
        </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
