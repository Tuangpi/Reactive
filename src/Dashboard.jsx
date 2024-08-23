import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DASHBOARD_DATA from "./assets/DASHBOARD_DATA";
import RECENTLYPLAY_DATA from "./assets/RECENTLYPLAY_DATA";
import RECOMMEND_DATA from "./assets/RECOMMEND_DATA";
import DashboardCard from "./component/DashboardCard";
import RecentPlayCard from "./component/RecentPlayCard";
import RecommendCard from "./component/RecommendCard";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { getRecentPlayList } from "./services/getRecentPlayList";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["RECENT_PLAYLIST"],
    queryFn: () => getRecentPlayList(),
  });

  if (error) console.log(error);

  return (
    <div className="p-10">
      <div className="flex justify-between items-center pb-8">
        <FontAwesomeIcon icon={faSearch} className="text-xl" />
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          <span className="absolute -top-1 -right-1">
            <span className="text-white p-0.5 bg-red-500 rounded-full text-[8px]">
              3
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-6">
        {DASHBOARD_DATA.map((data) => (
          <DashboardCard
            key={data.id}
            title={data.title}
            slogan={data.slogan}
            color={data.color}
          />
        ))}
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="w-[46%]">
          <h2 className="text-lg font-medium mb-3">Recently Played</h2>
          <div className="flex flex-col gap-y-5">
            {RECENTLYPLAY_DATA.map((data) => (
              <RecentPlayCard
                key={data.id}
                imgUrl={data.imgUrl}
                musicType={data.musicType}
                name={data.name}
                duration={data.duration}
              />
            ))}
          </div>
        </div>
        <div className="w-[54%]">
          <h2 className="text-lg font-medium">Recommended For You</h2>
          <div className="grid grid-cols-3 gap-x-3 mt-3">
            {RECOMMEND_DATA.map((data) => (
              <RecommendCard
                key={data.id}
                title={data.title}
                composer={data.composer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
