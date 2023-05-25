import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="">
              <button
                type="button"
                className="btn btn-outline-primary"
                id="btn2"
              >
                Pocetna
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <button
                type="button"
                className="btn btn-outline-primary"
                id="btn2"
              >
                Kontakt
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <button
                type="button"
                className="btn btn-outline-primary"
                id="btn2"
              >
                Lokacija
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
