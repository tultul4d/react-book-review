import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadApplication } from "../../utility/readlocalstorage";
import { saveWishApplication } from "../../utility/wishlocalstorage";
import { useState } from "react";




const CardDetails = () => {
    const cards = useLoaderData();
    const {bookId} = useParams()
    const idInt = parseInt(bookId);
    const card = cards.find(card => card.bookId === idInt)
    console.log(card);

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    const handleRead = () =>{
        saveReadApplication(idInt);
        if (readBooks.includes(card)){
          toast.error('You have read');
        }
        else if (wishlistBooks.includes(card)){
          setReadBooks([...readBooks, card]);
          toast.success('this book added to you read list')
        }
        else{
          setReadBooks([...readBooks, card]);
          toast.success('this book added to you read list')

        }
        
    }

    const handleWish = () =>{
        saveWishApplication(idInt);
        if (wishlistBooks.includes(card)){
          toast.error('This book is already in your wishlist');
        }
        else if (readBooks.includes(card)){
          setReadBooks([...readBooks, card]);
          toast.error('this book is already added to you wish list')
        }
        else{
          setWishlistBooks([...wishlistBooks, card])
          toast.success('this book added to you read list')
        }
    }

    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={card.image} className="rounded-lg lg:w-[390px] lg:h-[500px] shadow-2xl" />
    <div>
      <h1 className="lg:text-5xl font-bold">{card.bookName}</h1>
      <p className="py-6 font-semibold"><span className="text-black font-semibold">By:</span>{card.category}</p>
      <hr />
      <p className="text-black font-semibold mt-4">{card.category}</p>
      <hr />
      <p className="mt-8 text-[#131313] text-opacity-70 gap-4"><span className="text-black font-semibold ">Review:</span>{card.review}</p>
      <div className="flex gap-10 mt-16">
      <p className=" flex text-xl gap-4 font-semibold " ><span>Tag:</span>{
                  card.tags.map(tag => (
                    <p key={tag.id} className=" text-sm text-[#23BE0A] rounded-full bg-[#23BE0A] bg-opacity-5 py-2 px-2">#{tag}</p>
                  ))
                }
                </p>
        {/* <p className="mt-6 font-semibold">Tag</p>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags}</button>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags2}</button> */}
      </div>
      <hr />
      <p className="mt-4 gap-4 text-[#1E1E1E] font-semibold "><span className="text-[#131313] text-opacity-70 mr-10">Number of Pages:</span>{card.totalPages}</p>
      <p className="mt-4 text-[#1E1E1E] font-semibold"><span className="text-[#131313] text-opacity-70 mr-10 ">Publisher:</span>{card.publisher}</p>
      <p className="mt-4 text-[#1E1E1E] font-semibold"><span className="text-[#131313] text-opacity-70 mr-16">Year of Publishing:</span>{card.yearOfPublishing}</p>
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