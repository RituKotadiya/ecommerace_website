import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Product.scss";
import sampleImage from './dark.avif'; // Use actual image here
import React, { useState } from 'react';


const Product = () => {
    const shadeImages = [
        { name: 'Warm Natural', color: '#C49A6C', image: sampleImage },
        { name: 'Beige', color: '#E4C7A1', image: sampleImage },
        { name: 'Honey', color: '#D9A76C', image: sampleImage },
        { name: 'Natural', color: '#F3D6B1', image: sampleImage },
        { name: 'Ivory', color: '#F5E3CB', image: sampleImage },
        { name: 'Sand', color: '#F2D8A5', image: sampleImage },
        { name: 'Porcelain', color: '#FBE6CC', image: sampleImage },
    ];

    const [selectedShade, setSelectedShade] = useState(shadeImages[0]);
    const [pincode, setPincode] = useState('');

    return (
        <div>
            <Header />
            <div className="product-page">

                <div className="left-column">

                    <div className="main-image">
                        <img src={selectedShade.image} alt={selectedShade.name} />
                    </div>
                    <div className="thumbnail-list">
                        {shadeImages.map((shade, index) => (
                            <img
                                key={index}
                                src={shade.image}
                                alt={shade.name}
                                className={`thumbnail ${shade.name === selectedShade.name ? 'active' : ''}`}
                                onClick={() => setSelectedShade(shade)}

                            />

                        ))}
                    </div>
                </div>

                <div className="right-column">
                    <h2>Bobbi Brown Skin Full Cover Concealer Mini - {selectedShade.name}</h2>
                    <div className="rating">★★★★☆  4.3/5 &nbsp;|&nbsp; 802 ratings & 45 reviews</div>
                    <div className="price">MRP: <strong>₹1800</strong> <span>(inclusive of all taxes)</span></div>

                    <div className="offer-box">
                        <p>🎁 Get free mini + samples on all Bobbi Brown orders above ₹3000</p>
                    </div>

                    <div className="shade-picker">
                        <span>{selectedShade.name}</span>
                        <div className="shades">
                            {shadeImages.map((shade, index) => (
                                <div
                                    key={index}
                                    className={`shade ${shade.name === selectedShade.name ? 'selected' : ''}`}
                                    style={{ backgroundColor: shade.color }}
                                    onClick={() => setSelectedShade(shade)}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <button className="add-to-bag">Add to Bag</button>

                    <div className="delivery-box">
                        <p>Delivery Options</p>
                        <input
                            type="text"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                        />
                        <button onClick={() => alert(`Checking delivery for: ${pincode}`)}>Check</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Product;



