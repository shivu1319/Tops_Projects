import React,{useEffect} from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();

  // useEffect(()=>{
  //   if(localStorage.getItem('uid')){
  //     redirect ('/')
  //     return false;
  //   }
  // },[]);

  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("username");
    toast.success("Logout success");
    return redirect("/");
  };

  return (
    <div>
      <nav
        className="navbar navbar-default navbar-cls-top "
        role="navigation"
        style={{ marginBottom: 0 }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/index">
            Binary admin
          </Link>
        </div>
        <div
          style={{
            color: "white",
            padding: "15px 50px 5px 50px",
            float: "right",
            fontSize: 16,
          }}
        >
          {" "}
          Last access : 28 Sep 2023 &nbsp;{" "}
          {(() => {
            if (localStorage.getItem("uid")) {
              return (
                <>
                  <Link to="/profile">
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>{localStorage.getItem("username")}</span>
                  </Link>
                  <a href="javascript:void(0)" onClick={logout}>
                    <Link to="/" className="btn btn-danger square-btn-adjust">
                      Logout
                    </Link>
                  </a>
                </>
              );
            } else {
              return (
                <>
                  <Link to="/Log">
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>Login</span>
                  </Link>
                </>
              );
            }
          })()}
        </div>
      </nav>
      {/* /. NAV TOP  */}
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="text-center">
              <img
                src="assets/img/find_user.png"
                className="user-image img-responsive"
              />
            </li>
            <li>
              <NavLink className="active-menu" to="/Home">
                <i className="fa fa-dashboard fa-3x" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/Admin">
                <i className="fa fa-user fa-3x" /> &nbsp; Admin
              </NavLink>
            </li>
            <li>
              <Link to="/Manage_categories">
                <i className="fa fa-table fa-3x" /> Manage_categories
              </Link>
            </li>
            <li>
              <Link to="/Add_categories">
                <i className="fa fa-edit fa-3x" /> Add Categories
              </Link>
            </li>
            <li>
              <Link to="/Manage_Products">
                <i className="fa fa-table fa-3x" /> Manage Products
              </Link>
            </li>
            <li>
              <Link to="/Add_Products">
                <i className="fa fa-edit fa-3x" /> Add Products
              </Link>
            </li>
            <li>
              <Link to="/Manage_user">
                <i className="fa fa-edit fa-3x" /> Manage User
              </Link>
            </li>
            <li>
              <Link to="/Header">
                <i className="fa fa-square-o fa-3x" /> Blank Page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
