
export default function Footer() {
  return (
    <>
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Deeside Competitions</h3>
            <p>
              Garthdee House <br />
              Garthdee Rd, Garthdee,
              <br />
              Aberdeen
              <br />
              <br />
              <strong>Phone:</strong> +44 7754597234
              <br />
              <strong>Email:</strong> info@DeesideCompetitions.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>
              You'll be the first to hear about our latest raffles, ensuring you
              never miss a chance to win our lavish prizes.{" "}
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-lg-flex py-4">
      <div className="me-lg-auto text-center text-lg-start"></div>
      <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

  );
}
