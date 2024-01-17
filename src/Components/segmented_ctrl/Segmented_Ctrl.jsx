import "./Segmented_Ctrl.css";
import menuitems from "../../Constants";
import selected from "../../images/Seletced.svg";
import { Link } from "react-router-dom";
const Segmented_Ctrl = () => {
  return (
    <div className="Segmented_Ctrl mt-3 ml-3">
      <div className="first_in">
        <div className="second_in">
          <div className="menu">
            {menuitems.map((item) => {
              return (
                <div key={item.id}>
                  <div className="menu-div  ">
                    <Link to={`${item.url}`}>
                      <img
                        key={item.id}
                        className="cursor-pointer  hover:filter hover:brightness-150"
                        src={item.img}
                        alt=""
                      />
                    </Link>

                    <p key={item.id}>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <img src={selected} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segmented_Ctrl;
