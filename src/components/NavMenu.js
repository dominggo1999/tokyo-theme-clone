import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="flex flex-col font-montserrat text-gray-700 text-[15px]">
      <NavLink
        className="py-1 tracking-wider"
        activeClassName="text-black font-medium"
        exact
        to="/"
      >Home
      </NavLink>
      <NavLink
        className="py-1 tracking-wider"
        activeClassName="text-black font-medium"
        exact
        to="/about"
      >About
      </NavLink>
      <NavLink
        className="py-1 tracking-wider"
        activeClassName="text-black font-medium"
        exact
        to="/portfolio"
      >Portfolio
      </NavLink>
      <NavLink
        className="py-1 tracking-wider"
        activeClassName="text-black font-medium"
        exact
        to="/news"
      >News
      </NavLink>
      <NavLink
        className="py-1 tracking-wider"
        activeClassName="text-black font-medium"
        exact
        to="/contact"
      >Contact
      </NavLink>
    </nav>
  );
};

export default NavMenu;
