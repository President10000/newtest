import "./Details.css";
import img from "../../images/img.png";
// import networkImg from "../../images/Mobile Signal.jpg";
import wifiImg from "../../images/Wifi.png";
import batteryImg from "../../images/battery.png";
import polygoneImg from "../../images/Polygon 7.png";
import map from "../../images/map.png";
import { Link } from "react-router-dom";
import host from "../../images/host.png";

const Details = () => {
  return (
    <div>
      <div className="details-page">
        <div
          className="imgdiv "
          style={{
            // backgroundImage: `url(${img})`,

            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#D8D8D8",
          }}
        >
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
            <div className="navigation flex ">
              {/* first div  */}
              <div className="flex gap-5 ">
                <Link
                  to="/"
                  className="cursor-pointer"
                  style={{ width: "15.36px", height: "20.48" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                  >
                    <path
                      d="M2.67992 10.9213C2.67992 11.2471 2.80451 11.525 3.06326 11.7742L10.5383 19.0863C10.7395 19.2971 11.0078 19.4025 11.3145 19.4025C11.9374 19.4025 12.4262 18.9233 12.4262 18.2908C12.4262 17.9842 12.3016 17.7063 12.0908 17.4954L5.35367 10.9213L12.0908 4.34709C12.3016 4.12667 12.4262 3.84875 12.4262 3.54209C12.4262 2.91917 11.9374 2.44 11.3145 2.44C11.0078 2.44 10.7395 2.54542 10.5383 2.75625L3.06326 10.0683C2.80451 10.3175 2.68951 10.5954 2.67992 10.9213Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="/">
                  <p className="navigation-content cursor-pointer ">Back</p>
                </Link>
              </div>
              <div className="title"></div>

              <div className="right-title">
                <div>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33331 13.0812C7.48206 13.0812 7.69456 12.9821 7.85039 12.89C11.8383 10.34 14.3671 7.37208 14.3671 4.35458C14.3671 1.84708 12.6458 0.0762447 10.4216 0.0762447C9.04039 0.0762447 7.97789 0.841245 7.33331 2.00999C6.70289 0.848328 5.62623 0.0762447 4.24498 0.0762447C2.02081 0.0762447 0.299559 1.84708 0.299559 4.35458C0.299559 7.37208 2.82831 10.34 6.82331 12.89C6.97206 12.9821 7.18456 13.0812 7.33331 13.0812Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6033 11.2858C6.90789 11.2858 7.16997 11.0308 7.16997 10.7333V3.45874L7.12747 2.39624L7.60205 2.89916L8.67872 4.04666C8.77789 4.15999 8.91955 4.21666 9.06122 4.21666C9.35163 4.21666 9.5783 4.00416 9.5783 3.71374C9.5783 3.56499 9.51455 3.45166 9.4083 3.34541L7.01414 1.03624C6.87247 0.894578 6.75205 0.844995 6.6033 0.844995C6.46164 0.844995 6.34122 0.894578 6.19247 1.03624L3.7983 3.34541C3.69205 3.45166 3.63539 3.56499 3.63539 3.71374C3.63539 4.00416 3.84789 4.21666 4.14539 4.21666C4.27997 4.21666 4.4358 4.15999 4.53497 4.04666L5.60455 2.89916L6.08622 2.39624L6.04372 3.45874V10.7333C6.04372 11.0308 6.29872 11.2858 6.6033 11.2858ZM2.54455 16.8321H10.6691C12.1496 16.8321 12.8933 16.0954 12.8933 14.6362V7.56708C12.8933 6.10791 12.1496 5.37124 10.6691 5.37124H8.69289V6.51166H10.6479C11.3491 6.51166 11.7529 6.89416 11.7529 7.63083V14.5725C11.7529 15.3092 11.3491 15.6917 10.6479 15.6917H2.55872C1.85039 15.6917 1.4608 15.3092 1.4608 14.5725V7.63083C1.4608 6.89416 1.85039 6.51166 2.55872 6.51166H4.5208V5.37124H2.54455C1.06414 5.37124 0.320385 6.10791 0.320385 7.56708V14.6362C0.320385 16.0954 1.06414 16.8321 2.54455 16.8321Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <dir
            className={{
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "27.307px",
            }}
          ></dir>
        </div>

        <div className="details-page-div inline-flex flex-col">
          <div className="infopage">
            <p>Luxury, Lifestyle</p>

            <div className="first-div">
              <p className="text-white">&#9734; 4.9</p>
              <p>1648 reviews</p>
              <p>Superhost</p>
            </div>
            <div className="second-div">
              <div className="left-icon cursor-pointer hover:opacity-50">
                <img className="polygone" src={polygoneImg} alt="polygone" />
                <img className="component" src={map} alt="" />
              </div>
              <p>1155 Rue Sherbrooke Ouest, Toronto, Canada H3A 2N3</p>
            </div>
          </div>

          <div className="superhost-div ml- gap-2">
            <img className="" src={host} alt="host" />
            <div>
              <h3>Trang is a Superhost</h3>
              <p>
                Superhost are experienced, highly rated hosts who are committed
                to providing great stays for guest.
              </p>
            </div>
          </div>
          <div className="superhost-div-2 ">
            <div>200 CAD night</div>

            <Link to="/booking">
              <button className="bg-blue-800  p-2 px-7 rounded-full ml-8 ">
                Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
