import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header p-4">
      <div className="container mx-auto max-w-7xl">
        <nav>
          <ul className="list-items flex items-center gap-x-8 justify-end">
            <li className="list-item text-white text-[22px] hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-item text-white text-[22px] hover:underline">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="list-item text-white text-[22px] hover:underline">
              <NavLink to="/works">Works</NavLink>
            </li>
            <li className="list-item text-white text-[22px] hover:underline">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
