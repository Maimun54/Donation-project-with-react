import { useLoaderData } from "react-router-dom";
import DonationCatagories from "../../Components/AlldonatinProjects/DonationCatagories";
import Banner from "../../Components/Banner";



const Home = () => {

    const catagoriesCards = useLoaderData()
   
    return (
        <div>
          <Banner></Banner>
          <div className="px-20 py-10">
          <DonationCatagories catagoriesCards={catagoriesCards}></DonationCatagories>
          </div>
        </div>
    );
};

export default Home;