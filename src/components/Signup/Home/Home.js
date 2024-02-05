import { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "../../css/Common.css";
import Signin from "../../Signin/Signin";

const Home = () => {
  const [Home, setHome] = useState();

  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row photo">
          <div class="col-md-6">
            <img
              src="https://www.kajariaceramics.com/assets/images/floortiles.jpg"
              width="90%"
              alt=""
            />
            <p>
              MADHAV's range of luxurious floor tiles integrates technological
              expertise with exquisite designs. Each tile is crafted using
              ultra-modern technology to ensure high quality.
            </p>
            <br />
            <br />
          </div>
          <div class="col-md-6">
            <div class=" icon container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/bedroom1.png"
                    alt=""
                  />
                  <h4>Bedroom Floor tiles</h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                </div>
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/exterior1.png"
                    alt=""
                  />
                  <h4>outdoor Floor tiles </h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/livingroom1.png"
                    alt=""
                  />
                  <h4>Living Room Floor Tiles</h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
                <div class="col-md-6">
                  <img
                    src="chttps://www.kajariaceramics.com/assets/images/commercial1.png"
                    alt=""
                  />
                  <h4> commerciall Floor Tiles</h4>
                  <a>
                    {" "}
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="icon1 container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class=" icon container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/bathroom.png"
                    alt=""
                  />
                  <h4>Bathroom wall tiles</h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/kitchen.png"
                    alt=""
                  />
                  <h4>kitchen wall tiles </h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/livingroom.png"
                    alt=""
                  />
                  <h4>Living Room Wall Tiles</h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
                <div class="col-md-6">
                  <img
                    src="https://www.kajariaceramics.com/assets/images/exterior.png"
                    alt=""
                  />
                  <h4>Outdoor Wall Tiles</h4>
                  <a>
                    <button class="btn btn-outline-success" type="Register">
                      Explore All
                    </button>
                  </a>
                  <li>
                    <a href="#"></a>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="photo">
              <img
                src="https://www.kajariaceramics.com/assets/images/walltiles.jpg"
                width="90%"
                alt=""
              />
              <p>
                MADHAV brings to you premium wall tiles that are detailed with
                perfection. Each tile is made using state of the art technology
                making them strong, durable & easy to maintain.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class=" about container-fluid">
        <h2>About Ciramic </h2>
        <p>
          MADHAV, the largest manufacturer of ceramic and vitrified tiles in
          India. It has an annual aggregate capacity of 81.55 mn. sq. meters,
          distributed across seven plants - Sikandrabad in Uttar Pradesh,
          Gailpur & Malootana in Rajasthan, Srikalahasti in Andhra Pradesh,
          Balanagar in Telangana and two plants in Gujarat. Equipped with
          cutting-edge technology, we strive to deliver quality products and
          services to our customers. Our team of experts work around the clock
          to ensure that the quality of our product is never compromised.
        </p>
        <br />
        <p>
          In order to cater to the specific needs of our customers we produce
          various categories of tiles, including kitchen tiles, bathroom tiles,
          wall tiles, floor tiles and exterior wall tiles. We aim at producing
          tiles that complement the distinctiv of our customers and cater to the
          vast needs of Indian audience. All of our tiles are crafted with
          intense care using state-of-the-art technology to ensure that we live
          up to the expectations of our buyers. Choicest of materials are used
          to produce our magnificent range of products.
        </p>
      </div>
      <hr />

      <div class="trending container-fluid">
        <br />
        <h2>
          <b>Trending Products</b>
        </h2>
        <br />
        <div class=" row photo">
          <div class="col-md-4">
            <img
              src="https://www.kajariaceramics.com/assets/images/newlaunches1.jpg"
              alt=""
            />
            <span> The Ultima - 120*240cm</span>
            <p>
              The Ultima, an extra-large Vitrified Slabs by Kajaria, is bigger
              than your dreams. While their large size exuberates the grandeur
              of real marble, their stunning looks charm connoisseurs across the
              globe.
            </p>
          </div>
          <div class="col-md-4">
            <img
              src="https://www.kajariaceramics.com/assets/images/newlaunches2.jpg"
              alt=""
            />
            <span> Gres Tough</span>
            <p>
              The Gres Tough Slabs Collection reproduces the extraordinarily
              elegant details and natural irregularities of Italian Marble, rich
              in veining, streaks, marbling and knots.
            </p>
          </div>
          <div class="col-md-4">
            <img
              src="https://www.kajariaceramics.com/images/newlaunch_vitronite.jpg"
              alt=""
            />
            <span>Vitronite - 80*240cm</span>
            <p>
              New Age Modern Counter Tops: The incredible range of slabs are
              designed for modern application and to create a chic and urban
              aura for a space.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div class="kitchen container-fluid">
        <div class="kit">
          <h5>KITCHEN TILES </h5>
          <h6>
            Protects from Moisture With so much plumbing behind the walls in
            your kitchen, there's a minimal chance of water damage. Even the
            smallest amount of water or moisture can lead to water damage.
          </h6>
        </div>
      </div>
      <Footer />
      {/* {Home ? <Signin setHome={setHome} /> : null} */}
    </>
  );
};
export default Home;
