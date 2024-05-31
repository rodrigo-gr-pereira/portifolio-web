import React from "react";
import NavLinks from "../components/NavLinks";

const MenuOverley = ({ links}) =>{
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
            <li key={index}>
            <NavLinks href={link.path} title={link.title}/>
            </li>
    ))}
    </ul>
    )

}

export default MenuOverley;