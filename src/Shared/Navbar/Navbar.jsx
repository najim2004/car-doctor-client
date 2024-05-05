import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import { AuthData } from "../../Context/AuthProvider";
import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
  const { user, logOutUser, sweetAlert, loading } = useContext(AuthData);
  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/add-services"}>Add new Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {
        sweetAlert("Oops!", "warning", "Something went wrong", true, false);
      });
  };
  return (
    <div className="max-w-[1140px] lg:mt-[20px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-grow">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <img className="w-[107px] h-[87px] " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="!flex justify-center w-full px-3 items-center gap-8 menu-horizontal px-1">
            {menu}
          </ul>
        </div>
        <div className=" flex gap-6">
          <img src={cart} alt="" />
          <img src={search} alt="" />
          {loading ? (
            <span className="loading text-cmnBG loading-ring loading-lg"></span>
          ) : (
            <>
              {user ? (
                <div className="flex z-20 gap-3 items-center">
                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName.toUpperCase()}
                    data-tooltip-place="left"
                    className=" dropdown dropdown-end"
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 bg-gray-300 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            user?.photoURL ? user.photoURL : <FaRegCircleUser />
                          }
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      {user && (
                        <li onClick={handleLogOut}>
                          <a>Logout</a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="btn text-cmnBG bg-transparent h-10 btn-sm border-[2px] border-cRed rounded-[5px]">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
          <a className="btn btn-sm rounded-[5px] text-cRed h-14 w-[170px] bg-transparent border-[1px] border-cRed">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
