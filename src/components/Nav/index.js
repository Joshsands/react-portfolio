import { useEffect } from "react";

const Nav = (props) => {
  const { selectedNavLink, setSelectedNavLink } = props;

  useEffect(() => {
    document.title = selectedNavLink;
  }, [selectedNavLink]);

  return (
    <header className="container">
      <nav class="navbar navbar-dark bg-dark p-2 d-flex justify-content-around">
        <button class="btn btn-outline-secondary" type="button">
          <a
            className={`${selectedNavLink === "About" && "navActive"}`}
            href="#about-me"
            onClick={() => setSelectedNavLink("About")}
          >
            About Me
          </a>
        </button>
        <button class="btn btn-outline-secondary" type="button">
          <a
            className={`${selectedNavLink === "Portfolio" && "navActive"}`}
            href="#portfolio"
            onClick={() => setSelectedNavLink("Portfolio")}
          >
            Portfolio
          </a>
        </button>
        <button class="btn btn-outline-secondary" type="button">
          <a
            className={`${selectedNavLink === "Contact" && "navActive"}`}
            href="#contact"
            onClick={() => setSelectedNavLink("Contact")}
          >
            Contact
          </a>
        </button>
        <button class="btn btn-outline-secondary" type="button">
          <a
            className={`${selectedNavLink === "Resume" && "navActive"}`}
            href="#Resume"
            onClick={() => setSelectedNavLink("Resume")}
          >
            Resume
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
