import "./product.scss"
import image from './dark.avif';

function Product() {
    return (

        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} alt="bag-ground" style={{ width: "500px", height: "500px"}} />
                    </div>
                    <div className="col-md-6 font">

                        <p><b>Bobbi Brown Skin Full Cover Concealer Mini - Warm Natural
                            (2ml)</b><br/>
                            4.3/5
                            802  ratings
                            &
                            45 reviews<br/>
                            MRP:
                           <b> ₹1800</b><br/>
                            inclusive of all taxes</p>
                            <button className="btn-add"><b>Add to Bag</b></button>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Product;