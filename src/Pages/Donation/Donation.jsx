import { useEffect, useState } from "react";
import Card from "./Card";


const Donation = () => {

    const [donation,setDonation]=useState([]);
     const [noDonatin,setNodonation]=useState(false)
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
            {noDonatin?<p>{noDonatin}</p>:<div></div>}
     <div className="grid grid-cols-3">
     {donation.map(card=><Card key={card.id} card={card}></Card>)}
     </div>
        </div>
    );
};

export default Donation;