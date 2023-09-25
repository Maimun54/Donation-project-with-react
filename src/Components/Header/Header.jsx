import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div  >
            <nav className="flex justify-between py-5 px-10 items-center ">
         <div className="w-[80%]">
            <img src="Logo.png" alt="" />
         </div>
                <ul className="flex gap-5">
                    <li><NavLink
     to="/"
         className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
       >
      Home
       </NavLink></li>
                    <li><NavLink
     to="/donation"
         className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
       >
     Donation
       </NavLink></li>
                    <li><NavLink
     to="/statistics"
         className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
       >
      Statistics
       </NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Header;