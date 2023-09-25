import { Link } from "react-router-dom";


const DonationCard = ({catagories}) => {
    const {id,image,title,category,category_bg,card_bg,text_color,button_bg,description,price} = catagories
    
    return (
        <div>
    <Link to={`/catagories/${id}`}>
    <div className="card bg-base-100 shadow-xl"
    style={{backgroundColor:card_bg}} >
  
  <div><img className="w-full" src={image} alt="image" /></div>

  <div  className="px-2 py-2">
   <div className=" w-20 items-center "
   style={{backgroundColor:category_bg}}
   >
   <h1 className="p-2" style={{color:text_color}}>{category}</h1>
   </div>
    <p className="text-xl font-bold"
    style={{color:text_color}}
    >
    {title}</p>

    
   
  </div>
</div>
    </Link>
        </div>
    );
};

export default DonationCard;