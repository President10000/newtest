import "./Sidebar_div.css";
import polygoneImg from "../../images/Polygon 7.png";

const Sidebar_div = (props) => {
  const { leftimg, rightimg, content } = props;
  return (
    <div className="flex pl-5 mt-3 pb-2 justify-start maindiv  ">
      <div className="flex justify-start  gap-4">
        <div className="left-icon cursor-pointer hover:opacity-50">
          <img className="polygone" src={polygoneImg} alt="polygone" />
          <img className="component" src={leftimg} alt="" />
        </div>
        <p className="mt-2 content">{content}</p>
      </div>

      <img
        style={{ width: "7px", height: "15px" }}
        className="mt-2 chevron cursor-pointer hover:opacity-50"
        src={rightimg}
        alt="img"
      />
    </div>
  );
};

export default Sidebar_div;
