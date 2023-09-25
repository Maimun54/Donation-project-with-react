

const Banner = () => {
    return (
        <div >
           <div className="hero h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/7JytL09/381393396-2087773674909399-2102054021281236741-n.jpg)'}}>
  <div className="hero-overlay bg-opacity-rgba(255, 255, 255, 0.95);"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
       <div>
       <input type="search" name="" id="" placeholder="Search here...." className="h-11 w-60" />
      <button className="btn btn-primary bg-[#FF444A]">Search</button>
       </div>
    </div>
  </div>
</div> 
            
        </div>
    );
};

export default Banner;

