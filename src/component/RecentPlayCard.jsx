import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentPlayCard = ({ imgUrl, name, musicType, duration }) => {
  return (
    <div className="grid grid-cols-8 text-xs items-center hover:bg-[#ebebeb] group">
      <div className="flex items-center gap-x-2 col-span-3">
        <div className="w-8 h-8 bg-[#c9c9c9] group-hover:bg-[#9c9c9c] flex justify-center items-center">
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xl"
          />
        </div>
        <p>{name}</p>
      </div>
      <div className="col-span-2">{musicType}</div>
      <div>{duration}</div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div>...</div>
    </div>
  );
};
export default RecentPlayCard;
