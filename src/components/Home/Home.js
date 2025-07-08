import "./Home.scss"
import image from './simple.jpg';
import im from './old.webp';

function Home() {
      return (
            <div>
                  <div className=".container-fluid image-container">
                        <img src={image} alt="bag-ground" style={{ width: "100%" }} />
                        <h1 className="overlay-text">Your One Stop <br />Shop for Exerything</h1>

                        <div className="overlay-card" style={{ width: "18rem" }}>
                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />
                              {/* <div className="card-body">
                              <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                              </p>
                        </div> */}
                        </div>
                  </div>



            </div>

      )
}

export default Home;