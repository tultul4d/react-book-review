
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMan2 } from "react-icons/md";
import { MdOutlineRestorePage } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { getStoredReadApplication } from "../../utility/readlocalstorage";

const Book = () => {

  // const { image, tags, tags2, bookName, author, category, rating, publisher, totalPages} = reads;

  const [appliedReads, setAppliedReads] = useState([]);
  const reads = useLoaderData();
  useEffect(() => {
    const storedReadIds = getStoredReadApplication();
    if (reads.length > 0) {
      const readApplied = reads.filter(read => storedReadIds.includes(read.bookId))
      // console.log(readApplied)
      setAppliedReads(readApplied);
    }
  }, [reads])
  return (

    <div>
      {
        appliedReads.map(read => <section key={read.bookId}><div className="hero lg:w-[1000px] lg:h-[297px] mt-10 bg-base-200 rounded-lg ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={read.image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="lg:text-5xl text-xl font-bold">{read.bookName}</h1>
              <p className="py-6">{read.author}</p>
              <div className="lg:flex flex-row-1 justify-between ">
                <p className=" flex text-xl gap-4 font-semibold " ><span>Tag:</span>{
                  read.tags.map(tag => (
                    <p key={tag.id} className=" text-sm text-[#23BE0A] rounded-full bg-[#23BE0A] bg-opacity-5 py-2 px-2">#{tag}</p>
                  ))
                }
                </p>
                {/* <p className="text-[#23BE0A] bg-[#23BE0A] bg-opacity-5 ">#{read.tags}</p> */}
                {/* <p className="text-[#23BE0A] bg-[#23BE0A] bg-opacity-5 border rounder-full">#{read.tags2}</p> */}
                <div> <FaLocationDot></FaLocationDot></div>
                <p>Year of Publishing: </p>
                <p>{read.publisher}</p>
              </div>
              <div className="lg:flex flex-row-2 justify-between mt-5">
                <div>
                  <MdMan2></MdMan2>
                </div>
                <p><span>Publisher:</span>{read.category}</p>
                <div><MdOutlineRestorePage></MdOutlineRestorePage></div>
                <p><span>Page</span>{read.totalPages}</p>
              </div>
              <hr />
              <div className="lg:flex flex-row-1 gap-5 mt-5 ">
                <button className="btn text[#328EFF]  bg-[#328EFF] bg-opacity-15 rounded-full"><span>Category:</span>{read.category}</button>
                <button className="btn text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 rounded-full"><span>Rating:</span>{read.rating}</button>
                <button className="btn bg-[#23BE0A] text-white rounded-full">View Details</button>
              </div>
            </div>
          </div>
        </div></section>)
      }


    </div>
  );
};

export default Book;