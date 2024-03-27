const getStoredReadApplication = () =>{
    const storedReadApplication = localStorage.getItem('read-applications');
    if(storedReadApplication){
        return JSON.parse(storedReadApplication);
    }
    return [];
}


const saveReadApplication = bookId =>{
    console.log(bookId);
     const storedReadApplication= getStoredReadApplication() || [];
    
     const exists = storedReadApplication.find(jobId => jobId === bookId);
     if(!exists){
        storedReadApplication.push(bookId);
        console.log(storedReadApplication);
        localStorage.setItem('read-applications', JSON.stringify(storedReadApplication))
     }
}

export { getStoredReadApplication , saveReadApplication}