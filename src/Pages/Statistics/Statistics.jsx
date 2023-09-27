

const Statistics = () => {
const donationItem =JSON.parse(localStorage.getItem('Donation')) || {}
    console.log(donationItem)
    return (
        <div>
            Statistics
        </div>
    );
};

export default Statistics;