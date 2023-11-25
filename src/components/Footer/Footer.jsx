import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start text-white mt-2">
        <section className="d-flex justify-content-between p-4 social-networks">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">TexnoSat</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum totam repellat laboriosam praesentium.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#" className="text-white">
                    TexnoSat
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <i className="fas fa-home mr-3"></i> Baku, AZ
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 994 (55) 555 55 55
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 994 (55) 555 55 55
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 footer-bottom">© 2023 TexnoSat</div>
      </footer>

      <nav className="footer-mobile text-center">
        <ul>
          <li>
            <i className="fa-solid fa-house"></i> <br />
            Ana səhifə
          </li>
          <li>
            <i className="fa-solid fa-heart"></i> <br />
            Seçilmişlər
          </li>
          <li className="mobile-add">+</li>
          <li>
            <i className="fa-solid fa-message"></i> <br />
            Mesajlar
          </li>
          <li>
            <i className="fa-solid fa-user"></i> <br />
            Hesabım
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
