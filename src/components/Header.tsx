import { AiFillHome } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
   return (
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
         <div className="flex gap-4 p-2">
            <MenuItem
               title="home"
               address="/"
               Icon={AiFillHome}
            />
            <MenuItem
               title="about"
               address="/about"
               Icon={BsFillInfoCircleFill}
            />
         </div>
         <div>
            <Link href={"/"} className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
               IMDB
            </Link>
            <span className="text-2xl hidden sm:inline">Clone</span>
         </div>
      </div>
   );
};

export default Header;
