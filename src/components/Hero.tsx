import React from "react";

const Hero =() => {
    return(
        <section className="max-container padding-container flex flex-col 
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 
        border-red-500">
            <div 
                className="hero-bg bg-center h-[500px] md:h-[800px]"
                style={{ 
                backgroundImage: "url('/land.jpg')",
                backgroundSize: '150%'  // Makes the image appear larger
                }}
            />
            <h1 className="absolute top-1/2 left-1/2 left-1/2 transform -translate-x-1/2 -translate-y1/2 text-white text-4xl md:text-5xl font-bold">Where have you been and where should you go?</h1>
        </section>

    )
}

export default Hero