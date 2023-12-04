import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <h2>Opps  !!!</h2>
            <h2>Page not Found</h2>
            <Link to="./"><button>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;