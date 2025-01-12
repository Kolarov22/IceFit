import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Navigator = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const decoded = jwtDecode(token);
      if (!decoded || !decoded.ROLES) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  }, [token, navigate]);

  const role =
    jwtDecode(token)?.ROLES === "ROLE_INSTRUCTOR"
      ? "instructor" 
      : "client";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { path: `/${role}/dashboard`, label: 'Dashboard', icon: '📊' },
    { path: '/chat', label: 'Chat', icon: '💬' },
    { path: `/${role}/settings`, label: 'Settings', icon: '⚙️' },
    { path: '/support', label: 'Support', icon: '❓' }
  ];

  return (
    <nav className="bg-primary shadow-lg">
      {/* Mobile menu button */}
      <div className="md:hidden px-4 py-3">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark transition duration-150 ease-in-out"
            >
              {item.icon} {item.label}
            </Link>
          ))}
          <button 
            onClick={handleLogout}
            className="w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark transition duration-150 ease-in-out"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex justify-between items-center px-6 py-3">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition duration-150 ease-in-out"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <button 
          onClick={handleLogout}
          className="text-white flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition duration-150 ease-in-out"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigator;
