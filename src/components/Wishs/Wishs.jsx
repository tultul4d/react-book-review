import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishApplication } from "../../utility/wishlocalstorage";
import Wish from "../Wish/Wish";


const Wishs = () => {
    const [appliedWish, setAppliedWish] = useState([]);
    const wishs = useLoaderData();
    useEffect(() =>{
        const storedWishIds = getStoredWishApplication();
        if(wishs.length > 0){
            const wishApplied = wishs.filter(wish => storedWishIds.includes(wish.bookId))
            // console.log(wishApplied)
            setAppliedWish(wishApplied);
        }
    })
    return (
        <div>
            <h2 className="text-5xl">wish:{appliedWish.length}</h2>
            {
                appliedWish.map(wish => <Wish key={wish.id} wish={wish}></Wish>)
            }
        </div>
    );
};

export default Wishs;