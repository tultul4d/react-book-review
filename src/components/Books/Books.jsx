import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadApplication } from "../../utility/readlocalstorage";
import Book from "../Book/Book";

const Books = () => {
    const [tabIndex, setTabIndex] = useState();
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
            <div role="tablist" className=" tabs-lifted mt-10 ">
  <Link to= '' onClick={() =>setTabIndex(0)} role="tab" className={` ${tabIndex === 0 ? 'tab  tab-active':'tab'} text-[#242222] text-opacity-50`}>Read Books</Link>
  <Link to= {`wish`} onClick={() =>setTabIndex(1)} role="tab" className={` ${tabIndex === 1 ? 'tab  tab-active':'tab'} text-[#242222] text-opacity-50`}>Wishlist Books</Link>
  </div>
  {
                appliedReads.map(read => <Book key={read.id} read={read}></Book>)
            }
        </div>
    );
};

export default Books;