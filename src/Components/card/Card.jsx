import card from "../../images/card.png";
import notch from "../../images/Notch.svg";
import elipse from "../../images/Ellipse 824.svg";
import heart from "../../images/heart.png";
import "./Card.css";
const Card = () => {
  return (
    <div className="  card  shadow-2xl flex max-w-[305px] flex-col items-stretch">
      <div
        className="flex w-full flex-col pl-20 items-start mx-3 mt-5"
        style={{
          backgroundImage: `url(${card})`,
          width: " 305.493px",
          height: "237.227px",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <span className="notch ">
          <img className="ml-1 notch-img" src={notch} alt="" />
          <p className="notch-content">4.1(1,648)</p>
        </span>

        <span
          style={{ width: " 32.72px", height: "30.72px" }}
          className="relative"
        >
          <img className=" ml-[180px]" src={elipse} alt="img" />
          <img
            className="absolute top-[7px] left-[188px]"
            src={heart}
            alt="img"
          />
        </span>
      </div>
      <span
        style={{ position: "absolute", width: "305.493px", top: "330.227px" }}
        className=" content ml-3 shadow-lg backdrop-blur-[8.533332824707031px] flex w-full flex-col mt-4 py-5 rounded-2xl border-[0.853px] border-solid border-white items-start"
      >
        <div className="text-white text-lg font-bold leading-4 tracking-tight whitespace-nowrap ml-2.5">
          Toronto, Canada
        </div>
        <div className="justify-between items-stretch self-stretch flex gap-5 mt-4 px-2.5 rounded-none">
          <span className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-opacity-60 text-center text-xs font-semibold leading-5 tracking-tight uppercase">
              Cost
            </div>
            <div className="text-white text-center text-xs font-medium leading-5 tracking-tight whitespace-nowrap">
              $200 CAD / night
            </div>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-opacity-60 text-center text-xs font-semibold leading-5 tracking-tight uppercase whitespace-nowrap">
              Distance
            </div>
            <span className="items-stretch flex justify-between gap-1">
              <div className="text-cyan-400 text-center text-sm font-medium leading-5 tracking-tight grow whitespace-nowrap">
                􀎫
              </div>
              <div className="text-white text-center text-xs font-medium leading-5 tracking-tight grow whitespace-nowrap">
                257km
              </div>
            </span>
          </span>
          <span className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-opacity-60 text-center text-xs font-semibold leading-5 tracking-tight uppercase whitespace-nowrap">
              Available
            </div>
            <span className="items-center flex justify-between gap-1">
              <div className="text-cyan-400 text-center text-sm grow whitespace-nowrap my-auto">
                􀉉
              </div>
              <div className="text-white text-center text-xs font-medium leading-5 tracking-tight self-stretch grow whitespace-nowrap">
                Oct 24 - 26
              </div>
            </span>
          </span>
        </div>
      </span>
    </div>
  );
};

export default Card;
