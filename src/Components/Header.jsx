import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("username");
    toast.success("Logout success");
    return redirect("/");
  };

  return (
    <div className="banner_bg_main">
      {/* header top section start */}
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li>
                    <NavLink to="/Home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Men">Men</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Jwellary">Jwellary</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Electronics">Electronics</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Login">Sign Up</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Profile">
                      {" "}
                      <i class="fa-solid fa-user"></i>{" "}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top section start */}
      {/* logo section start */}
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo section end */}
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            <div id="mySidenav" className="sidenav">
              <Link
                to="/javascript:void(0)"
                className="closebtn"
                onclick="closeNav()"
              ></Link>
              <Link to="/index">Home</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/electronic">Electronic</Link>
              <Link to="/jewellery">Jewellery</Link>
            </div>
            <span className="toggle_icon" onclick="openNav()">
              <img src="images/toggle-icon.png" />
            </span>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Category
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  Action
                </Link>
                <Link className="dropdown-item" to="/">
                  Another action
                </Link>
                <Link className="dropdown-item" to="/">
                  Something else here
                </Link>
              </div>
            </div>
            <div className="main">
              {/* Another variation with a button */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search this blog"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#f26522",
                      borderColor: "#f26522",
                    }}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="lang_box ">
                <Link
                  to="/"
                  title="Language"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src="images/flag-uk.png"
                    alt="flag"
                    className="mr-2 "
                    title="United Kingdom"
                  />{" "}
                  English{" "}
                  <i className="fa fa-angle-down ml-2" aria-hidden="true" />
                </Link>
                <div className="dropdown-menu ">
                  <Link to="/" className="dropdown-item">
                    <img
                      src="images/flag-france.png"
                      className="mr-2"
                      alt="flag"
                    />
                    French
                  </Link>
                </div>
              </div>
              <div className="login_menu">
              {(() => {
                  if (localStorage.getItem("uid")) {
                    return (
                      <>
                        <Link to="/profile">
                          <i className="fa fa-user" aria-hidden="true" />
                          <span>{localStorage.getItem("username")}</span>
                        </Link>
                        <a href="javascript:void(0)" onClick={logout}>
                          <span> &nbsp; Logout</span>
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
            </div>
          </div>
        </div>
      </div>
      {/* header section end */}
      {/* banner section start */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital">
                      Get Start <br />
                      Your favriot shoping
                    </h1>
                    <div className="buynow_bt">
                      <Link to="/">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital">
                      Get Start <br />
                      Your favriot shoping
                    </h1>
                    <div className="buynow_bt">
                      <Link to="/">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital">
                      Get Start <br />
                      Your favriot shoping
                    </h1>
                    <div className="buynow_bt">
                      <Link to="/">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="carousel-control-prev"
              to="/my_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </Link>
            <Link
              className="carousel-control-next"
              to="/my_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* banner section end */}
    </div>
  );
}

export default Header;
