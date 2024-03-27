import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/vPnX61c/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
      <Link to={`/book`} className="btn text-[#FFFFFF] bg-[#23BE0A] mt-5 mr-24 rounded-lg">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;