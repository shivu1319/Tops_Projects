import React from "react";

function Home() {
  return (
    <div id="wrapper">
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Admin Dashboard</h2>
              <h5>Welcome Jhon Deo , Love to see you back. </h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-red set-icon">
                  <i className="fa fa-envelope-o" />
                </span>
                <div className="text-box">
                  <p className="main-text">120 New</p>
                  <p className="text-muted">Messages</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                  <i className="fa fa-bars" />
                </span>
                <div className="text-box">
                  <p className="main-text">30 Tasks</p>
                  <p className="text-muted">Remaining</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue set-icon">
                  <i className="fa fa-bell-o" />
                </span>
                <div className="text-box">
                  <p className="main-text">240 New</p>
                  <p className="text-muted">Notifications</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                  <i className="fa fa-rocket" />
                </span>
                <div className="text-box">
                  <p className="main-text">3 Orders</p>
                  <p className="text-muted">Pending</p>
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue">
                  <i className="fa fa-warning" />
                </span>
                <div className="text-box">
                  <p className="main-text">52 Important Issues to Fix </p>
                  <p className="text-muted">
                    Please fix these issues to work smooth
                  </p>
                  <p className="text-muted">Time Left: 30 mins</p>
                  <hr />
                  <p className="text-muted">
                    <span className="text-muted color-bottom-txt">
                      <i className="fa fa-edit" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      gthn. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit gthn.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="panel back-dash">
                <i className="fa fa-dashboard fa-3x" />
                <strong> &nbsp; SPEED</strong>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit ametsit
                  amet elit ftr. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 ">
              <div className="panel ">
                <div className="main-temp-back">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-6">
                        {" "}
                        <i className="fa fa-cloud fa-3x" /> Newyork City{" "}
                      </div>
                      <div className="col-xs-6">
                        <div className="text-temp"> 10° </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
