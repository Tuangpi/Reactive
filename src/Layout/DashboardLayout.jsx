import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons/faBackwardStep";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons/faForwardStep";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import {
  faArrowsRotate,
  faDesktop,
  faPlusCircle,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";

const DashboardLayout = () => {
  return (
    <main className="bg-pink-500 h-screen">
      <div className="bg-white overflow-y-auto h-[85%] rounded-bl-[2rem] rounded-br-[2rem]">
        <div className="flex justify-between items-start">
          <div className="w-[20%] bg-[#F5F5F5]">
            <SideBar />
          </div>
          <div className="w-[80%]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center gap-x-28">
        <div className="flex justify-between items-start gap-x-2">
          <div className="w-12 h-12 rounded-full bg-zinc-600"></div>
          <div className="mr-8">
            <div className="text-white font-semibold">Mind-Blowing</div>
            <div className="text-zinc-300 text-sm font-medium">
              Various Artists
            </div>
          </div>
          <FontAwesomeIcon icon={faPlusCircle} className="text-white" />
        </div>
        <div className="w-2/3 flex justify-between items-center gap-x-8">
          <FontAwesomeIcon
            icon={faBackwardStep}
            className="text-white font-bold text-2xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-white font-bold text-4xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faForwardStep}
            className="text-white font-bold text-2xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="text-white font-bold text-xl"
          />
          <div className="flex items-center gap-x-2 w-full">
            <span className="text-xs font-medium text-white">0:00</span>
            <input type="range" className="w-full !bg-pink-400" />
            <span className="text-xs font-medium text-white">9:10</span>
          </div>
          <div className="flex justify-between items-center gap-x-4 w-1/2">
            <FontAwesomeIcon
              icon={faMusic}
              className="text-white font-bold text-xl"
            />
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-white font-bold text-xl"
            />
            <FontAwesomeIcon
              icon={faVolumeUp}
              className="text-white font-bold text-xl"
            />
            <div className="h-1 bg-white w-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
