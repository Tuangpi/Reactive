import axiosInstance from "../Axios"

const getRecentPlayList = () => {
    return axiosInstance.get(`/track.php?m=2115888`)
}
export { getRecentPlayList }
