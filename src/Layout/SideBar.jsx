import { faChartBar } from "@fortawesome/free-regular-svg-icons/faChartBar";
import {
  faAngleDown,
  faHome,
  faMusic,
  faPlayCircle,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="overflow-y-auto h-screen px-6">
      <div className="flex items-center mt-8 gap-x-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9T7d954UPK6CtzuhJbYBFMoV6ueGkD_gVg&s"
          className="rounded-full w-10 h-10"
        />
        <div>
          <div>
            Joshua <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="text-xs uppercase  border border-dashed border-slate-400">
            Premium
          </div>
        </div>
      </div>

      <div className="mt-8 text-[#9c9c9c] font-bold uppercase text-sm">
        Browse
      </div>
      <div className="flex flex-col gap-y-4 mt-4 text-[#989898]">
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faHome} />
          <Link to="/#" className="text-[#505050]">
            Home
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faMusic} />
          <Link to="/#">Songs</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faMugHot} />
          <Link to="/#">Playlists</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/#">Just for you</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faChartBar} />
          <Link to="/#">Top Charts</Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 text-[#989898]">
        <div className="flex justify-between items-center mt-8">
          <div className="text-[#9c9c9c] font-bold uppercase text-sm">
            Your Playlists
          </div>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPlayCircle} />
          <Link to="/#">Workout Mix</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPlayCircle} />
          <Link to="/#">Chillin at Home</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPlayCircle} />
          <Link to="/#">Booping at Adobe</Link>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPlayCircle} />
          <Link to="/#">XD 4 life</Link>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
