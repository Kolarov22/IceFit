import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    navigate(0);
  };
  return (
    <>
      <nav className="lg:mx-20 flex items-center justify-between  border-primary sm:border-b-2 pt-5 mx-2">
        <Link to="/">
          <div className="logo text-primary font-aldrich text-4xl lg:text-5xl">
            IceFit
          </div>
        </Link>
        <div className="hidden sm:flex items-center justify-between gap-10">
          <div>
            <ul className="flex items-center justify-between px-10 gap-16 text-primary font-poppins text-base font-medium">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="buttons flex items-center gap-5 text-primary mb-1">
            {token ? (
              <button onClick={logOut} className="text-sm font-medium">
                Sign Out
              </button>
            ) : (
              <Link to="/signin">
                <button className="text-sm font-medium">Sign In</button>
              </Link>
            )}

            <Link to="/signup">
              <button className="bg-primary rounded text-white font-poppins text-sm font-medium px-1 py-2 md:px-4">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {isOpen ? (
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary w-8 h-8 sm:hidden"
          />
        ) : (
          <Bars3Icon
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary w-10 h-10 sm:hidden"
          />
        )}
      </nav>
      {isOpen && (
        <div className="border-y-2 border-primary bg-white bg-opacity-95 p-2 sm:hidden transition duration-700 ease-in-out">
          <ul className="flex flex-col items-center justify-center gap-5 text-primary font-poppins text-base font-medium">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
