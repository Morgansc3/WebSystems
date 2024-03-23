
export default function CustomNavbar() { // Renamed function
  return (
    <>
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <h1>
          DEESIDE COMPETITIONS
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="index.html">
              HOME
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>COMPETITIONS</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="competitions.html">Live Competitions</a>
              </li>
              <li>
                <a href="#">Last Chance Competitions</a>
              </li>
              <li>
                <a href="#">Waiting to be drawn</a>
              </li>
              <li>
                <a href="#">Previous Competitions</a>
              </li>
            </ul>
            {/* <li><a class="nav-link scrollto" href="#about"> HOW IT WORKS</a></li> */}
            {/*  <li><a class="nav-link scrollto" href="#services">Services</a></li> */}
            {/* <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
            {/* <li><a class="nav-link scrollto" href="#pricing">CHARITIES</a></li> */}
          </li>
          <li>
            <a className="nav-link scrollto" href="#faq">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a className="nav-link scrollto" href="login.html">
              SIGN IN/REGISTER
            </a>
          </li>
          <li>
            {" "}
            <a className="nav-link scrollto" href="basket.html">
              <i className="fa-solid fa-basket-shopping fa-xl" />
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
</>

  );
}
