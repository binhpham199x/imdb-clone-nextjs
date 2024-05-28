import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
   title: string;
   address: string;
   Icon: IconType;
};

const MenuItem = (props: Props) => {
   return (
      <Link href={props.address} className="hover:text-amber-500">
         <props.Icon className="text-2xl sm:hidden"/>
         <p className="uppercase hidden sm:inline text-sm">{props.title}</p>
      </Link>
   );
};

export default MenuItem;
