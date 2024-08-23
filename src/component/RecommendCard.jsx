import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecommendCard = ({ title, composer }) => {
  return (
    <div className="w-full group">
      <div className="w-full h-32 bg-[#c9c9c9] hover:bg-[#9c9c9c] rounded-xl flex justify-center items-center">
        <FontAwesomeIcon
          icon={faPlayCircle}
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-4xl text-white"
        />
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-600">{title}</div>
      <div className="text-xs text-slate-400 font-medium">{composer}</div>
    </div>
  );
};
export default RecommendCard;
