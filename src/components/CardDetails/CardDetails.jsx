import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadApplication } from "../../utility/readlocalstorage";
import { saveWishApplication } from "../../utility/wishlocalstorage";



const CardDetails = () => {
    const cards = useLoaderData();
    const {bookId} = useParams()
    const idInt = parseInt(bookId);
    const card = cards.find(card => card.bookId === idInt)
    console.log(card);

    const handleRead = () =>{
        saveReadApplication(idInt);
        toast('You have read');
    }

    const handleWish = () =>{
        saveWishApplication(idInt);
        toast('wish');
    }

    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={card.image} className="rounded-lg lg:w-[390px] lg:h-[500px] shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{card.bookName}</h1>
      <p className="py-6 font-semibold"><span className="text-black font-semibold">By:</span>{card.category}</p>
      <hr />
      <p className="text-black font-semibold mt-4">{card.category}</p>
      <hr />
      <p className="mt-8 text-[#131313] text-opacity-70 gap-4"><span className="text-black font-semibold ">Review:</span>{card.review}</p>
      <div className="flex gap-10 mt-16">
        <p className="mt-6 font-semibold">Tag</p>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags}</button>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags2}</button>
      </div>
      <hr />
      <p className="mt-4 gap-4 text-[#1E1E1E] font-semibold "><span className="text-[#131313] text-opacity-70 mr-10">Number of Pages:</span>{card.totalPages}</p>
      <p className="mt-4 text-[#1E1E1E] font-semibold"><span className="text-[#131313] text-opacity-70 mr-10 ">Publisher:</span>{card.author}</p>
      <p className="mt-4 text-[#1E1E1E] font-semibold"><span className="text-[#131313] text-opacity-70 mr-16">Year of Publishing:</span>{card.publisher}</p>
      <p className="mt-4 text-[#1E1E1E] font-semibold"><span className="text-[#131313] text-opacity-70 mr-10">Rating:</span>{card.rating}</p>

      <div className="flex gap-10 mt-4">
      <button onClick={handleRead} className="btn border ">Read</button>
      <button onClick={handleWish} className="btn bg-[#50B1C9] text-white">Wishlist</button>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default CardDetails;