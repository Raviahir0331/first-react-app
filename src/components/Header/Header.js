import { useNavigate } from "react-router";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
const Header = () => {
  const navigate = useNavigate();

  const Signup = () => {
    navigate("/Signup", { replace: true });
    
  };
  const Signin = () => {
    navigate("/Signin", { replace: true });
  };
  return (
    <div className="main container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            <img
              src="https://students.techamdavad.com/pluginfile.php/1/theme_moove/logo/1687583716/logo.png"
              width="100px"
              height="100px"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tilessignin.html">
                  MARBEL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tilessignup.html">
                  PARKING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Walltiles.html">
                  WALLTILES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Floortiles.html">
                  FLOORTILES
                </a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <button
              className="btn btn-outline-success"
              onClick={() => {
                Signup();
              }}
              type="Register"
            >
              Register
            </button>

            <button
              className="btn btn-outline-success"
              onClick={() => {
                Signin();
              }}
              type="login"
            >
              login
            </button>
          </div>
        </div>
      </nav>
      <br />

      <div className="floortiles container-fluid">
        <div className="slide container-fluid">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.kajariaceramics.com/images/slider/slider-indias-number-1-tile-company.jpg"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.kajariaceramics.com/images/slider/superbrand.jpg"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.kajariaceramics.com/images/slider/slider-award.jpg"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;
