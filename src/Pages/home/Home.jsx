import "./Home.css";
import networkImg from "../../images/Mobile Signal.jpg";
import wifiImg from "../../images/Wifi.png";
import batteryImg from "../../images/battery.png";
import polygoneImg from "../../images/Polygon 7.png";
import componentImg from "../../images/Component 1.png";
import searchImg from "../../images/magnifyingglass.svg";
import microfineImg from "../../images/microphone.png";
import Segmented_Ctrl from "../../Components/segmented_ctrl/Segmented_Ctrl";

import Card from "../../Components/card/Card";

import plane from "../../images/plane.svg";
import location from "../../images/location.svg";
import heart2 from "../../images/heart2.svg";
import chat from "../../images/chatting.svg";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

Segmented_Ctrl;
const Home = () => {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }
  return (
    <div className="main-div">
      {active && <Sidebar setActive={setActive} />}
      <div className="TopNavigation">
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

        {/* top navigation content */}
        <div className="TopNavigation-content">
          <div className="left_Accessory">
            <div
              className="left-icon cursor-pointer hover:opacity-50"
              onClick={() => {
                toggle();
              }}
            >
              <img className="polygone" src={polygoneImg} alt="polygone" />
              <img className="component" src={componentImg} alt="" />
            </div>
            {!active && (
              <div className="SearchField">
                <div>
                  <img
                    className="cursor-pointer"
                    style={{
                      width: "13.338px",
                      height: "13.465px",
                      flexShrink: "0",
                      fill: " rgba(255, 255, 255, 0.60)",
                    }}
                    src={searchImg}
                    alt="searchimg"
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="Where to?"
                  />

                  <img
                    className="cursor-pointer"
                    style={{
                      width: "10.136px",
                      height: "15.088px",
                      flexShrink: "0",
                      fill: " rgba(255, 255, 255, 0.60)",
                    }}
                    src={microfineImg}
                    alt="microfineimg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {!active && (
        <div>
          <Segmented_Ctrl />
          <Card />
          <div className="mt-11">
            <Card />
            <div className="tabbar h-20 absolute top-[646px] ">
              <div className="tabbar-content">
                <img src={location} alt="img" />
                <img src={plane} alt="img" />
                <img src={heart2} alt="img" />
                <img src={chat} alt="img" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
