import { Link } from "react-router";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = ({ setShowModal }) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full px-4 sm:px-8 py-2 bg-cyan-100 z-10 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg mb-2">
      
      {/* Logo */}
      <div className="mx-auto md:mx-0">
        <img className="w-28 sm:w-40" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Nav Items */}
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <li className="text-lg sm:text-xl"><Link to="/list">List</Link></li>
          <li className="text-lg sm:text-xl"><Link to="/about">About Us</Link></li>
          <li className="text-lg sm:text-xl"><Link to="/contact">Contact Us</Link></li>
          <li className="text-lg sm:text-xl"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <li className="text-lg sm:text-xl">
            <p 
              onClick={() => setShowModal(true)} 
              className="cursor-pointer hover:underline"
            >
              Sign In
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
