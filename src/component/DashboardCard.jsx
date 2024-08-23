import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardCard = ({ title, slogan, color }) => {
  return (
    <div
      className={`${color} rounded-2xl w-full p-4 hover:scale-105 transition-transform`}
    >
      <h1 className="text-5xl font-black uppercase text-white">{title}</h1>
      <div className="text-slate-300 -mt-1.5">{slogan}</div>
      <div className="pt-24">
        <FontAwesomeIcon icon={faPlayCircle} className="text-white" />
      </div>
    </div>
  );
};

export default DashboardCard;
