import "./Booking.css";
import wifiImg from "../../images/Wifi.png";
import batteryImg from "../../images/battery.png";
import Datepicker from "../../Components/datepicker/Datepicker";
import polygoneImg from "../../images/Polygon 7.png";

import left from "../../images/left.png";
import right from "../../images/right.png";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking-page">
      {/* status bar  */}
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
            {/* <img src={networkImg} alt="network img" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
            >
              <path
                d="M9.26881 3.18668C9.26881 2.7154 9.65086 2.33335 10.1221 2.33335H10.9755C11.4468 2.33335 11.8288 2.7154 11.8288 3.18668V10.0133C11.8288 10.4846 11.4468 10.8667 10.9755 10.8667H10.1221C9.65086 10.8667 9.26881 10.4846 9.26881 10.0133V3.18668Z"
                fill="white"
              />
              <path
                d="M13.5355 1.48001C13.5355 1.00873 13.9175 0.626678 14.3888 0.626678H15.2421C15.7134 0.626678 16.0955 1.00873 16.0955 1.48001V10.0133C16.0955 10.4846 15.7134 10.8667 15.2421 10.8667H14.3888C13.9175 10.8667 13.5355 10.4846 13.5355 10.0133V1.48001Z"
                fill="white"
              />
              <path
                d="M5.00214 6.17334C5.00214 5.70206 5.38419 5.32001 5.85547 5.32001H6.70881C7.18009 5.32001 7.56214 5.70206 7.56214 6.17334V10.0133C7.56214 10.4846 7.18009 10.8667 6.70881 10.8667H5.85547C5.38419 10.8667 5.00214 10.4846 5.00214 10.0133V6.17334Z"
                fill="white"
              />
              <path
                d="M0.735474 8.30668C0.735474 7.8354 1.11752 7.45334 1.58881 7.45334H2.44214C2.91342 7.45334 3.29547 7.8354 3.29547 8.30668V10.0133C3.29547 10.4846 2.91342 10.8667 2.44214 10.8667H1.58881C1.11752 10.8667 0.735474 10.4846 0.735474 10.0133V8.30668Z"
                fill="white"
              />
            </svg>
            <img src={wifiImg} alt="wifi img" />
            <img src={batteryImg} alt="img" />
          </div>
        </div>
      </div>

      {/* navigation bar  */}
      <div className="flex justify-between mx-3">
        <Link to="/details">
          <div className="flex flex-row gap-2 text-white ">
            {" "}
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="20"
                viewBox="0 0 17 22"
                fill="none"
              >
                <path
                  d="M2.67992 10.9213C2.67992 11.2471 2.80451 11.525 3.06326 11.7742L10.5383 19.0863C10.7395 19.2971 11.0078 19.4025 11.3145 19.4025C11.9374 19.4025 12.4262 18.9233 12.4262 18.2908C12.4262 17.9842 12.3016 17.7063 12.0908 17.4954L5.35367 10.9213L12.0908 4.34709C12.3016 4.12667 12.4262 3.84875 12.4262 3.54209C12.4262 2.91917 11.9374 2.44 11.3145 2.44C11.0078 2.44 10.7395 2.54542 10.5383 2.75625L3.06326 10.0683C2.80451 10.3175 2.68951 10.5954 2.67992 10.9213Z"
                  fill="white"
                />
              </svg>
            </span>{" "}
            <span className=" navigation-content cursor-pointer ">Back</span>
          </div>
        </Link>
        <Link to="/">
          <div className=" text-white  cancell cursor-pointer">Cancel</div>
        </Link>
      </div>

      {/* booking page content  */}

      <div className="availability mx-4 ml-6 mt-6 ">
        <h3>2-night stay</h3>

        <p>Mon, Oct 24 - Wed, Oct 26</p>
      </div>

      {/* days of the week */}
      <div className=" days flex justify-between items-center mt-10 mx-7">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>

      {/* dates of the month */}

      <div className="datePicker text-white mx-2 mt-8">
        <Datepicker />
      </div>
      {/* page control */}
      <div className="page-control flex justify-center items-center">
        <div className="inner flex mt-6 justify-between items-center text-white w-[110px]">
          <div>
            <div className="left-icon cursor-pointer hover:opacity-50">
              <img className="polygone" src={polygoneImg} alt="polygone" />
              <img className="component" src={left} alt="" />
            </div>
          </div>
          <p>
            {" "}
            <div className="left-icon cursor-pointer hover:opacity-50">
              <img className="polygone" src={polygoneImg} alt="polygone" />
              <img className="component" src={right} alt="" />
            </div>
          </p>
        </div>
      </div>
      {/* tabs  */}

      <div className="superhost-content mt-3  ">
        <div>left content</div>
        <div>Right content</div>
      </div>
    </div>
  );
};

export default Booking;
