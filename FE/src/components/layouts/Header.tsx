import { Link } from "react-router-dom";

function Header() {
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
            <li>
              <Link className="hover:text-secondary" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
