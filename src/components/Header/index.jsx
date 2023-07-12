import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto max-w-7xl">
        <nav>
          <ul className="list-items flex items-center gap-x-8 justify-end">
            <li className="list-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/works">Works</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
