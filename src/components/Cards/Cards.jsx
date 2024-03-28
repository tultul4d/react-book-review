import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCard] = useState([]);
    useEffect(() =>{
        fetch('bookCard.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, [])
    return (
       <div>
         <div>
            <h2 className="text-3xl text-center mt-10 font-bold">Books  </h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
       </div>
        
    );
};

export default Cards;