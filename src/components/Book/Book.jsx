
import { FaLocationDot } from "react-icons/fa6";
import { MdMan2 } from "react-icons/md";
import { MdOutlineRestorePage } from "react-icons/md";

const Book = ({read}) => {
    
    const { image, tags, tags2, bookName, author, category, rating, publisher, totalPages} = read;
    return (
        
        <div>
            <div className="hero lg:w-[1000px] lg:h-[277px] mt-10 bg-base-200 rounded-lg ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="lg:text-5xl text-xl font-bold">{bookName}</h1>
            <p className="py-6">{author}</p>
            <div className="lg:flex flex-row-1 justify-between ">
                <p className="text-xl font-semibold">Tag</p>
                <p className="text-[#23BE0A] bg-[#23BE0A] bg-opacity-5 border rounder-full">{tags}</p>
                <p className="text-[#23BE0A] bg-[#23BE0A] bg-opacity-5 border rounder-full">{tags2}</p>
                <div> <FaLocationDot></FaLocationDot></div>
                <p>Year of Publishing: </p>
                <p>{publisher}</p>
            </div>
            <div className="lg:flex flex-row-2 justify-between mt-5">
                <div>
                 <MdMan2></MdMan2>
                </div>
                <p><span>Publisher:</span>{category}</p>
                <div><MdOutlineRestorePage></MdOutlineRestorePage></div>
                <p><span>Page</span>{totalPages}</p>
            </div>
            <hr />
           <div className="lg:flex flex-row-1 gap-5 mt-5 ">
           <button className="btn text[#328EFF]  bg-[#328EFF] bg-opacity-15 rounded-full"><span>Category:</span>{category}</button>
           <button className="btn text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 rounded-full"><span>Rating:</span>{rating}</button>
           <button className="btn bg-[#23BE0A] text-white rounded-full">View Details</button>
           </div>
          </div>
        </div>
      </div>

      
        </div>
    );
};

export default Book;