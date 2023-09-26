
import swal from 'sweetalert';

const CatagoryDetailsCard = ({catagoriCard}) => {
  
  const {id,image,title,category,category_bg,card_bg,text_color,button_bg,description,price} = catagoriCard
  
  const handleAddDonatin =()=>{
    console.log(catagoriCard)
    const addedDonation =[];
    const donationItem =JSON.parse(localStorage.getItem('Donation'))
    if(!donationItem){
         addedDonation.push(catagoriCard)
         localStorage.setItem('Donation',JSON.stringify(addedDonation))
         swal("Good job!", "You added your Donation!", "success");

    }
    else{
      const ishave =donationItem.find(item=>item.id===id)
      if(!ishave){
        addedDonation.push(...donationItem,catagoriCard)
        localStorage.setItem('Donation',JSON.stringify(addedDonation))
        swal("Good job!","You added Donation", "success");
      }
      else{
        swal("Sorry!","You added Donation", "error");
      }
      

    }
  }
    return (
        <div className="flex justify-center items-center h-[60vh] py-28 px-20">
            <div > 
              <div>
            <div className='relative'>
            <img className="w-[800px] md:h-[400px] " src={image} alt="" />
            <div className="w-[800px] h-[83px] border bg-opacity-60 hero-overlay absolute top-80 ;"></div>
            </div>
                <div className="opacity-80"></div>
                <button onClick={handleAddDonatin}  className="  absolute md:p-3 bottom-52 md:bottom-56 lg:bottom-60 text-white" style={{backgroundColor:text_color}}>Donate {price}</button>

              </div>
              <div>
                <h1 className="text-2xl font-bold py-5">{title}</h1>
                <p className="text-xl">{description}</p>
              </div>
            </div>
        </div>
    );
};

export default CatagoryDetailsCard;