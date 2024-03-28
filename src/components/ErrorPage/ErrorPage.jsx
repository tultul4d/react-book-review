import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
            <img src="../../assets/404-error-with-landscape-concept-illustration.zip" alt="" />
            <h2 className="text-2xl font-bold">not found page</h2>
            <Link to="/" className="border mt-10 bg-[#328EFF] bg-opacity-15 text-[#328EFF]">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;