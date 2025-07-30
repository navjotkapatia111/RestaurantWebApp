import { Link } from "react-router";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = ({ setShowModal }) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-cyan-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-10 m-5">
          <li className="px-4"><Link to="/list">List</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <li className="px-4">
            <p onClick={() => setShowModal(true)} className="cursor-pointer hover:underline">Sign In</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
