
const Card = ({card}) => {
    const {image, tags, tags2, bookName, author, category, rating} = card;
    return (
        <div className="  ">
            <div className=" card w-[350px] mt-5 gap-5 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10 bg-[#F3F3F3]">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex  gap-6 ">
    <div><button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px] ">{tags}</button></div>
    <div><button className="btn text-[#23BE0A] bg-[#23BE0A] bg-opacity-15 mt-2 rounded-full w-[100px] h-[19px] p-2">{tags2}</button></div>
  </div>
  <div className="card-body ">
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <hr />
    <div className="flex justify-between gap-40">
     <div><h1>{category}</h1></div>
     <div>
        <div></div>
        <div><h1>{rating}</h1></div>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;