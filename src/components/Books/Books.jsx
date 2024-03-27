import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadApplication } from "../../utility/readlocalstorage";
import Book from "../Book/Book";

const Books = () => {
    const [appliedReads, setAppliedReads] = useState([]);
    const reads = useLoaderData();
    useEffect(() =>{
        const storedReadIds = getStoredReadApplication();
         if(reads.length > 0){
            const readApplied = reads.filter(read => storedReadIds.includes(read.bookId))
            // console.log(readApplied)
            setAppliedReads(readApplied);
         }
    }, [])
    return (
        <div>
            <h2 className="text-7xl font-semibold text-center border bg-[#131313] bg-opacity-5 rounded-lg">Book: {appliedReads.length}</h2>
            {
                appliedReads.map(read => <Book key={read.id} read={read}></Book>)
            }
        </div>
    );
};

export default Books;