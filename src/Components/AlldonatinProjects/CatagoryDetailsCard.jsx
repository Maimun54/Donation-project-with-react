

const CatagoryDetailsCard = ({catagoriCard}) => {
  // const {id,image,title,category,category_bg,card_bg,text_color,button_bg,description,price} = catagoriCard
  const {id,image,title,category,category_bg,card_bg,text_color,button_bg,description,price} = catagoriCard
  console.log(catagoriCard)
    return (
        <div className="flex justify-center items-center h-[60vh] py-28 px-20">
            <div > 
              <div>
            <div>
            <img className="w-[800px] h-[400px] " src={image} alt="" />
            </div>
                <div className="opacity-80"></div>
                <button className="  absolute p-3 lg:bottom-60 text-white" style={{backgroundColor:text_color}}>Donate {price}</button>

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