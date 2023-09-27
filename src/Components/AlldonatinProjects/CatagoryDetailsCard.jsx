
import swal from 'sweetalert';

const CatagoryDetailsCard = ({catagoriCard}) => {
  
  const {id,image,title,category,category_bg,card_bg,text_color,button_bg,description,price} = catagoriCard || {}
  
  const handleAddDonatin =()=>{
    console.log(catagoriCard)
    const addedDonation =[];
    const donationItem =JSON.parse(localStorage.getItem('Donation') )
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
        <div >
            <div className=" justify-center items-center  px-20 "> 
              <div>
            <div className='relative'>
            <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] " src={image} alt="" />
            <div className="w-full h-[55px] md:h-[110px] lg:h-[110px]  bg-opacity-60 hero-overlay absolute top-36 md:top-72 lg:top-72 ;"></div>
            </div>
                <div className="opacity-80"></div>
                <button onClick={handleAddDonatin}  className="  absolute md:p-3 bottom-60 md:bottom-24 lg:bottom-24 xl:bottom-24 text-white" style={{backgroundColor:text_color}}>Donate {price}</button>

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