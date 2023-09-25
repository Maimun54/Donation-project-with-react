import DonationCard from "./DonationCard";



const DonationCatagories = ({catagoriesCards}) => {
 console.log(catagoriesCards)

    return (
        <div>
            <h2>All donation catagories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
     catagoriesCards?.map(catagories=> <DonationCard key={catagories.id} catagories={catagories}></DonationCard>)
            }
            </div>
        </div>
    );
};

export default DonationCatagories;