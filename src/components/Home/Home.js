import "./Home.scss"
import image from './dark.jpg';
import collection from './collection.jpg';
import perfume from './perfume.webp';
import model from './model.webp';
import Makeup from './Makeup.jpg';
import tabel from './tabel.webp';
import bag from './bag.jpg';
import collection_new from './collection_new.jpg';
import perfumePhoto from './perfume-photo.jpg';
import myntra from './myntra.jpg';

import hand_bag from './hand_bag.webp';




function Home() {

      const products = [
            { id: 1, image: Makeup, name: "Makeup", description: "Description for product 1" },
            { id: 2, image: perfume, name: "Perfume", description: "Description for product 2" },
            { id: 3, image: model, name: "Model", description: "Description for product 3" },
            { id: 4, image: tabel, name: "Tabel", description: "Description for product 4" },
            { id: 5, image: bag, name: "Bag", description: "Description for product 5" },
      ];

      const product = [
            { id: 1, image: Makeup, name: "Makeup", description: "Description for product 1" },
      ];

      return (
            <div>
                  <div className="container-fluid image-container">
                        <img src={image} alt="bag-ground" style={{ width: "100%" }} />
                        <h1 className="overlay-text">Your One Stop <br />Shop for Exerything</h1>
                        <p className="overlay-txt">Find everything you need in one place - great deals, top quality, and endless convenience. Shop anytime, anywhere. Instant deals!</p>

                        <div className="overlay-card" style={{ width: "18rem" }}>
                              {
                                    products.map((item) => {
                                          return (
                                                <div style={{ textAlign: "center" }}>
                                                      <img src={item.image} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />
                                                      <h5 style={{ margin: "0.5rem 0" }}>{item.name}</h5>
                                                      <p style={{ fontSize: "0.9rem", margin: 0 }}>{item.description}</p>
                                                </div>
                                          )
                                    })
                              }
                        </div>

                        <div className="text" >
                              <h1><b>New in</b></h1>
                              <span>Bringing you the Newest Trends, Latest Styles, and Must-Have</span>  <span>Collections -- Just Dropped!</span>
                        </div>

                  </div>

                  <div className="container-fluid image-container" >
                        <img src={collection} alt="bag-ground" style={{ width: "100%", height: "400px" }} />
                  </div>

                  <div className="product">
                        <div class="card" style={{ width: "18rem" }}>
                              <img src={collection_new} class="card-img-top" alt="..." style={{ height: '300px' }} />
                              <div class="card-body" >
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                              <img src={myntra} class="card-img-top" alt="..." style={{ height: '300px' }} />
                              <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                              <img src={perfumePhoto} class="card-img-top" alt="..." style={{ height: '300px' }} />

                              <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                              <img src={hand_bag} class="card-img-top" alt="..." style={{ height: '300px' }} />
                              <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                        </div>
                  </div>

            </div>


      )
}

export default Home;