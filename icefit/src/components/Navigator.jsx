import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navigator = () => {
  if (localStorage.getItem("token") == null) {
    window.location.href = "/sign-in";
  }

  const role =
    jwtDecode(localStorage.getItem("token")).ROLES === "ROLE_INSTRUCTOR"
      ? "instructor"
      : "client";

  return (
    <nav className="flex py-3 items-center justify-center  bg-primary h-16">
      <ul className="flex gap-16 md:gap-32 text-white md:text-xl font-poppins font-semibold">
        <li>
          <Link to={`/${role}/dashboard`}>Dashboard</Link>
        </li>
        <li>
          <a href="">Chat</a>
        </li>
        <li>
          <Link to="/instructor/settings">Settings</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
