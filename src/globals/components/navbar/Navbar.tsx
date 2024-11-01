import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../../../store/cartSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.carts);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchCartItems());
    setIsLoggedIn(!!token || !!user.token);
  }, [user.token]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // "ey24234"
    setIsLoggedIn(!!token || !!user.token);
    dispatch(fetchCartItems());
  }, [user.token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <header
        id="page-header"
        className="relative flex flex-none items-center py-7 text-white bg-[#333333]"
      >
        <div className="container mx-auto flex flex-col gap-4 px-5 text-center sm:flex-row sm:items-center sm:justify-between lg:px-8 xl:max-w-7xl">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center   text-lg md:text-2xl font-bold tracking-wide"
            >
              <span className="text-pink-600 hover:text-pink-700">
                Classic{" "}
              </span>
              <span>-Watch Store</span>
            </Link>
          </div>
          <nav className="space-x-3 md:space-x-6">
            {!isLoggedIn ? (
              <>
                <Link
                  to="register"
                  className=" text-base font-semibold  hover:text-blue-600  md:text-lg "
                >
                  <span>Register</span>
                </Link>
                <Link
                  to="/login"
                  className=" text-base font-semibold  hover:text-blue-600  md:text-lg "
                >
                  <span>Login</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/cart"
                  className=" text-base font-semibold  hover:text-blue-600  md:text-lg "
                >
                  <span>
                    Cart<sub>{items.length}</sub>
                  </span>
                </Link>
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className=" text-base font-semibold  hover:text-blue-600  md:text-lg "
                >
                  <span>Logout</span>
                </Link>
              </>
            )}
          </nav>
        </div>
        {/* END Main Header Content */}
      </header>
    </>
  );
};

export default Navbar;
