import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen px-20 aspect-video pt-[16%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div className="flex">
        <button className="p-2 mr-6 bg-white text-black px-5 rounded-md flex items-center gap-2 hover:opacity-80">
          <FaPlay /> Play
        </button>
        <button className="p-2 bg-gray-600 px-4 opacity-80 rounded-md flex items-center gap-2">
          <IoIosInformationCircleOutline />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
