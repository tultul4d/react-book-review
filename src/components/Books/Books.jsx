import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadApplication } from "../../utility/readlocalstorage";


const Books = () => {
    const [tabIndex, setTabIndex] = useState(0);
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

            <h2 className="text-7xl font-semibold text-center border bg-[#131313] bg-opacity-5 rounded-lg">Book</h2>
            <details className="dropdown ml-[500px] mt-2">
  <summary className="m-1 btn bg-[#59C6D2] text-white">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</details>
            <div role="tablist" className=" tabs-lifted mt-10 ">
  <Link to= '' onClick={() =>setTabIndex(0)} role="tab"  className={` ${tabIndex === 0 ? ' tab tab-active':'tab'} text-[#242222] text-opacity-50`}>Read Books</Link>
  <Link to= {`wish`} onClick={() =>setTabIndex(1)} role="tab" className={` ${tabIndex === 1 ? ' tab tab-active':'tab'} text-[#242222] text-opacity-50`}>Wishlist Books</Link>
  </div>
  {/* {
                appliedReads.map(read => <Book key={read.id} read={read}></Book>)
            } */}
            <Outlet></Outlet>
        </div>
    );
};

export default Books;