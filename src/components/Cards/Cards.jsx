import { useEffect, useState } from "react";


const Cards = () => {
    const [card, setCard] = useState([]);
    useEffect(() =>{
        fetch('bookCard.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center mt-10 font-bold">Books:</h2>
        </div>
    );
};

export default Cards;