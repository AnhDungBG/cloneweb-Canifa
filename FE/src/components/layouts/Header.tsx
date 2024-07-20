import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setAccount } from "../../redux/users/userActions";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../redux/rootReducers";
import { AuthActionTypes } from "../../redux/users/actionType";
function Header() {
  // const dispatch = useDispatch();
  const dispatch: ThunkDispatch<RootState, unknown, AuthActionTypes> =
    useDispatch();
  const { isAuth, userInfo, isAdmin }: RootState["auth"] = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(setAccount());
    }
  }, []);
  const handleLogut = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <header className=" shadow-md">
      <div className=" container mx-auto flex justify-between items-center p-4">
        <div className=" text-2xl font-bold">
          <Link className="hover:text-secondary" to={"/"}>
            Brand
          </Link>
        </div>
        <nav>
          <ul className=" flex space-x-4">
            <li>
              <Link className=" hover:text-secondary" to="/home">
                Home
              </Link>
            </li>
            {isAuth ? (
              <li>
                <button className="btn-primay" onClick={() => handleLogut()}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link className="hover:text-secondary" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </>
            )}
            {/* {isAdmin ? ( */}
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            {/* ) : (
              ""
            )} */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
