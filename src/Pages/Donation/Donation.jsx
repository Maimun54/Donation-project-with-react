import { useEffect, useState } from "react";
import Card from "./Card";


const Donation = () => {

    const [donation,setDonation]=useState([]);
     const [noDonatin,setNodonation]=useState(false)
     const [donationLength,setDonationLength]=useState(4)
    useEffect(()=>{
    const donationItem =JSON.parse(localStorage.getItem('Donation'))
    if(donation){
        setDonation(donationItem)
    }
    else{
        setNodonation('no data found')
    }
    },[])
    console.log(donation)
    return (
        <div>
            <h2>Donation</h2>
            {noDonatin?<p>{noDonatin}</p>:<div></div>}
     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-10">
     {donation.slice(0,donationLength).map(card=><Card key={card.id} card={card}></Card>)}
     <div style={{textAlign:"center"}} className={donationLength===donation.length ? 'hidden':''}>
        <button onClick={()=>setDonationLength(donation.length)}  className="btn btn-primary">Show All</button>
     </div>
     </div>
        </div>
    );
};

export default Donation;