import "./Sidebar.css";
import Sidebar_div from "../sidebar_div/Sidebar_div";
import chevron from "../../images/Chevron.png";

import bellicon from "../../images/bellicon.png";
import paymenticon from "../../images/payment.png";
import translateicon from "../../images/translate.png";
import privacyicon from "../../images/privacy.png";

import listingicon from "../../images/list.png";
import hostingicon from "../../images/host.png";

import nighticon from "../../images/darkmode.png";

import updateicon from "../../images/update.png";

import userimg from "../../images/user.png";
import elipse from "../../images/ellipse-184.svg";
import closeimg from "../../images/close.png";

import networkImg from "../../images/Mobile Signal.jpg";
import wifiImg from "../../images/Wifi.png";
import batteryImg from "../../images/battery.png";
import { useState } from "react";
const Sidebar = ({ setActive }) => {
  const toggle = () => {
    setActive(false);
  };
  return (
    <div className="sidebar w-[336.36px] h-[727.04px]  flex-shrink-0 ">
      <div>
        <div className="StatusBar">
          {/* left center right */}
          <div className="left-div">
            <div>9:41</div>
          </div>
          <div className="center-div">
            <div />
          </div>
          <div className="right-div">
            <div>
              <img src={networkImg} alt="network img" />
              <img src={wifiImg} alt="wifi img" />
              <img src={batteryImg} alt="" />
            </div>
          </div>
        </div>
        <div className="userblock ml-4 mt-4">
          <div className="usericon cursor-pointer hover:opacity-50">
            <img className="ecllipse" src={elipse} alt="polygone" />
            <img className="content" src={userimg} alt="" />
          </div>
          <div className="profile_name  p-0 ">
            <h1 className="mb-0">Alice Portman</h1>
            <p className="mt-0">Show Profile</p>
          </div>

          <button onClick={() => toggle()} className="closebutton-user">
            <div className="usericon cursor-pointer hover:opacity-50">
              <img className="ecllipse" src={elipse} alt="polygone" />
              <img className="content-close" src={closeimg} alt="component" />
            </div>
          </button>
        </div>
        <div className="mt-2">
          <div className="ml-6 mt-2 text-heading">
            <h1>Account Setting</h1>
          </div>
          <Sidebar_div
            leftimg={bellicon}
            rightimg={chevron}
            content={"Notification"}
          />
          <Sidebar_div
            leftimg={paymenticon}
            rightimg={chevron}
            content={"Payment"}
          />
          <Sidebar_div
            leftimg={translateicon}
            rightimg={chevron}
            content={"Translate"}
          />
          <Sidebar_div
            leftimg={privacyicon}
            rightimg={chevron}
            content={"Privacy"}
          />
        </div>

        {/* hosting  */}

        <div className="mt-5">
          {" "}
          <div className="ml-6 mt-2 text-heading">
            <h1>Hosting</h1>
          </div>
          <Sidebar_div
            leftimg={listingicon}
            rightimg={chevron}
            content={"Listing"}
          />
          <Sidebar_div
            leftimg={hostingicon}
            rightimg={chevron}
            content={"Host"}
          />
        </div>

        {/* More */}

        <div className="mt-5">
          <div className="ml-6 mt-2 text-heading">
            <h1>More</h1>
          </div>

          <Sidebar_div
            leftimg={nighticon}
            rightimg={chevron}
            content={"Dark Mode"}
          />
          <Sidebar_div
            leftimg={updateicon}
            rightimg={chevron}
            content={"Update"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
