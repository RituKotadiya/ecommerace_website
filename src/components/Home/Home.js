import "./Home.scss"
import image from './dark.jpg';
import im from './simple.jpg';
import perfume from './perfume.webp';



function Home() {

      const products = [
            { id: 1, image: im, name: "Product 1", description: "Description for product 1" },
            { id: 2, image: perfume, name: "Product 2", description: "Description for product 2" },
            { id: 3, image: im, name: "Product 3", description: "Description for product 3" },
            { id: 4, image: im, name: "Product 4", description: "Description for product 4" },
            { id: 5, image: im, name: "Product 5", description: "Description for product 5" },
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

                        <div className="text">
                              <h1>New in</h1>
                              <p>Bringing you the Newest Trends, Latest Styles, and Must-Have Collections -- Just Dropped!</p>
                        </div>

                  </div>

            </div>

      )
}

export default Home;