import "./Home.scss"
import image from './dark.jpg';
import im from './simple.jpg';


function Home() {
      return (
            <div>
                  <div className=".container-fluid image-container">
                        <img src={image} alt="bag-ground" style={{ width: "100%" }} />
                        <h1 className="overlay-text">Your One Stop <br />Shop for Exerything</h1>
                        <p className="overlay-txt">Find everything you need in one place - great deals, top quality, and endless convenience. Shop anytime, anywhere. Instant deals!</p>

                        <div className="overlay-card" style={{ width: "18rem" }}>
                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

                              <img src={im} className="card-img-top" alt="Card image" style={{ borderRadius: "120px 120px 0 0", height: "250px", width: "200px" }} />

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