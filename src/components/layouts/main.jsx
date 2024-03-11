import {
    Outlet
  } from "react-router-dom";
function Layout() {
    return (
      <div className="wrapper">
        <div id="content">
          <Outlet />
        </div>
      </div>
    );
  }

export default Layout;