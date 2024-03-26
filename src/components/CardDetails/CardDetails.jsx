import { useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {
    const cards = useLoaderData();
    const {bookId} = useParams()
    const idInt = parseInt(bookId);
    const card = cards.find(card => card.bookId === idInt)
    console.log(card);

    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={card.image} className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{card.bookName}</h1>
      <p className="py-6">{card.author}</p>
      <hr />
      <p>{card.category}</p>
      <hr />
      <p><span>Review:</span>{card.review}</p>
      <div className="flex gap-10">
        <p>Tag</p>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags}</button>
        <button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px]">#{card.tags2}</button>
      </div>
      <hr />
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default CardDetails;