import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CatagoryDetailsCard from "./CatagoryDetailsCard";


const CatagoryDetails = () => {
    const {id} =useParams()
    const [catagoriCard,setCatagoriCard]=useState({})
    
    const catagories =useLoaderData()
    
    useEffect(()=>{
     const findCatagories =catagories.find(item=>item.id ==id)
     setCatagoriCard(findCatagories)
    },[id,catagories])

    console.log(catagoriCard)
    return (
        <div>
    <CatagoryDetailsCard catagoriCard={catagoriCard} ></CatagoryDetailsCard>
        </div>
    );
};

export default CatagoryDetails;