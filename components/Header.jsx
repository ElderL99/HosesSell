import React from "react";
import Image from "next/image";

export function Header(){
    
const bgImage = "/Header.jpg"; 
    return(
        <nav>
            <div className="">
                <img
                    src={bgImage}
                    alt="Header Background"
                    className="w-full h-100 object-cover"        

                />
            </div>
        </nav>
    )
}