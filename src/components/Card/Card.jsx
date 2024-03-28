import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({card}) => {
    const {bookId, image, tags, tags2, bookName, author, category, rating} = card;
    return (
      
            <Link to={`/card/${bookId}`} className=" card w-[350px] mt-5 gap-5 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10 bg-[#F3F3F3]">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex  gap-6 ">
  <p className=" flex text-xl gap-4 font-semibold " ><span></span>{
                  tags.map(tag => (
                    <p key={tag.id} className=" text-sm text-[#23BE0A] rounded-full bg-[#23BE0A] bg-opacity-5 py-2 px-2">{tag}</p>
                  ))
                }
                
                </p>
    {/* <div><button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px] ">{tags}</button></div>
    <div><button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px] p-2">{tags2}</button></div> */}
  </div>
  <div className="card-body ">
    <h2 className="card-title">{bookName}</h2>
    <p><span>By : </span>{author}</p>
    <hr />
    <div className="flex justify-between gap-40">
     <div><h1>{category}</h1></div>
     <div className="flex">
        <div className="gap-2 mt-1 "><IoMdStarOutline></IoMdStarOutline></div>
        <div><h1>{rating}</h1></div>
     </div>
    </div>
  </div>
</Link>
        
    );
};

export default Card;