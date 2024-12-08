import React from "react";
import './header.css'
import backgroundImage from'../assets/head.jpg'

const header = (props) => {
    return(
        <div>
            <div
            className="flex flex-col justify-center items-center text-center p-6 md:p-8 w-full"
            style={{
                backgroundImage: 'url(' + backgroundImage + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
            <h1 className="shine text-4xl md:text-7xl sm:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold tracking-widest md:mt-8 " style={{fontFamily:'bam'}}>PRODUCTS</h1>
            <h3 className="shine text-xs md:text-base sm:text-xs lg:xs xl:text-base 2xl:text-base mt-1 mb-8 md:mb-10 " style={{fontFamily: "Arial, Helvetica, sans-serif"}}>Featuring our Latest and Hottest Collections</h3>
            </div>




        </div>
    )
}

export default header;
