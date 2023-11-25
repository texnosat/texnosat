import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-1">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light">
            Texnosat
          </Link>
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
            <div>
              <ul className="catalog">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link mx-2 dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-brands fa-windows text-light me-2 catalog-icon"></i>
                    Kataloq
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Elektronika
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Elektronika Aksesuarları
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        TV
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto ">
              <div className="search">
                <input
                  type="text"
                  placeholder="Məhsulun adını qeyd edin"
                  className="p-2 input-product"
                />
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </div>

              <i className="fa-solid fa-location-dot location ms-2 mb-2"></i>
              <select name="" id="" className="ms-2">
                <option value="">Bakı</option>
                <option value="">Bakı</option>
                <option value="">Bakı</option>
                <option value="">Bakı</option>
                <option value="">Bakı</option>
                <option value="">Bakı</option>
              </select>
              <a
                href="#"
                className="text-decoration-none add-products ms-2 effect effect-4 text-light"
              >
                <i className="fa-solid fa-plus"></i>
                <span className="mobile-add-product ms-1">Yeni elan</span>
              </a>
            </ul>

            <ul className="navbar-nav ms-auto d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a
                  className="nav-link h5 effect-login effect-login-4 text-light"
                  href="#"
                  target="blank"
                >
                  <i className="fa-solid fa-right-to-bracket"></i> Daxil ol
                </a>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to={"registration"}
                  className="nav-link h5 effect-register effect-register-4 text-light"
                >
                  <i className="fa-solid fa-user-plus"></i> Qeydiyyat
                </Link>
                {/* <a
                  className="nav-link h5 effect-register effect-register-4 text-light"
                  href="#"
                  target="blank"
                >
                  <i className="fa-solid fa-user-plus"></i> Qeydiyyat
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="search-mobile mt-2 m-2">
        <input
          type="text"
          placeholder="Məhsulun adını qeyd edin"
          className="p-2 input-product"
        />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
    </div>
  );
}

export default Header;
