const getStoredWishApplication = () =>{
    const storedWishApplication = localStorage.getItem('wish-applications');
    if(storedWishApplication){
        return JSON.parse(storedWishApplication);
    }
    return [];
}


const saveWishApplication = bookId =>{
    console.log(bookId);
     const storedWishApplication= getStoredWishApplication() || [];
    
     const exists = storedWishApplication.find(jobId => jobId === bookId);
     if(!exists){
        storedWishApplication.push(bookId);
        console.log(storedWishApplication);
        localStorage.setItem('wish-applications', JSON.stringify(storedWishApplication))
     }
}

export { getStoredWishApplication , saveWishApplication}