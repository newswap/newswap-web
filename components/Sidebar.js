import React from "react";

const Sidebar = () => {
  return (
    <aside>
      <div className="single-sidebar-widget mb-30">
        <div className="sidebar-title">
          <h5>Quick Links</h5>
        </div>
        <div className="sidebar-body latest-post">
          <ul>
            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="#">Link 1</a>
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="#">Link 2</a>
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="#">Link 3</a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
