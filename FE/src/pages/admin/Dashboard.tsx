import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div>
        <h2>SideBar</h2>
        <ul>
          <li>
            <Link to={"product"}>Product</Link>
          </li>
          <li>
            <Link to={"category"}>Category</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
