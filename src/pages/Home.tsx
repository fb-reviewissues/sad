import { Link } from "react-router-dom";
import Banner from "../assets/f_locked.png";
import Warn from "../assets/warn.jpg";

const Home = () => {
  return (
    <div className="bg-[#F1F2F6] flex justify-center items-center h-screen">
      <div className="sm:w-11/12 md:w-2/3 lg:w-2.5/5 xl:w-2/5 w-11/12 mx-auto rounded-lg p-5 bg-[#fff] self-center">
        <img className="w-[70%] mx-auto" src={Banner} alt="Banner" />
        <p className="font-bold text-2xl">
          The security of your account is at risk.
        </p>
        <p className="my-3 leading-6">
          We have temporarily blocked your account because your Facebook Protect
          settings have been modified.
        </p>
        <div className="p-3 flex items-center gap-3 bg-[#F7F8FA] rounded-md">
          <div className="text-2xl w-6 h-6 text-yellow-600">
            <img className="w-6 h-6" src={Warn} alt="Warn" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">Your page was restricted on November 22, 2023.</p>
            <p className="leading-6">We did this to protect your account from being suspended.</p>
          </div>
        </div>
        <p className="mt-3 mb-5 leading-6">We will guide you through some steps to lift the page restriction and unlock your account.</p>
        <Link to={'/business'} className="block text-lg cursor-pointer bg-blue-500 w-full font-semibold text-center py-3 text-white rounded-lg">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
